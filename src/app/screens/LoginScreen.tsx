import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import imgLogo from '../../imports/LoginBase/97c807db3f814f0c13aad01b1add8ca1e25a79f6.png';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToRegister: () => void;
}

export default function LoginScreen({ onLogin, onSwitchToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 h-[83px] w-full flex items-center justify-end px-6 relative shadow-lg">
        <img src={imgLogo} alt="Logo" className="h-[35px] opacity-80 drop-shadow-md" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-12 pb-8 animate-fadeIn">
        <div className="mb-12">
          <h1 className="text-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center leading-[48px] mb-3">
            AutoChain
          </h1>
          <p className="text-center text-slate-500 text-[15px]">
            Gestión vehicular en blockchain
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={setPassword}
            error={errors.password}
          />

          <div className="text-right">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-[14px] transition-colors"
            >
              ¿Olvidó su contraseña?
            </button>
          </div>

          <div className="space-y-3 pt-6">
            <Button type="submit">Ingresar</Button>
            <Button variant="secondary" onClick={onSwitchToRegister}>Registrar</Button>
          </div>
        </form>

        <p className="text-center mt-8 text-slate-400 text-[15px]">
          ¿Aún no forma parte de AutoChain?
        </p>
      </div>
    </div>
  );
}
