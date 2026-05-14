import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

interface RegisterScreenProps {
  onRegister: (nombre: string, apellidos: string, email: string, fechaNacimiento: string, password: string) => void;
  onSwitchToLogin: () => void;
}

export default function RegisterScreen({ onRegister, onSwitchToLogin }: RegisterScreenProps) {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (!nombre) newErrors.nombre = 'El nombre es requerido';
    if (!apellidos) newErrors.apellidos = 'Los apellidos son requeridos';
    if (!email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    if (!fechaNacimiento) newErrors.fechaNacimiento = 'La fecha de nacimiento es requerida';
    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirme su contraseña';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister(nombre, apellidos, email, fechaNacimiento, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />
      <div className="bg-indigo-600 h-[87px] w-full" />

      <div className="relative z-10 px-6 pt-6">
        <h1 className="text-[28px] font-bold text-slate-700 text-center leading-[34px] mb-8">
          Registro
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={setNombre}
            error={errors.nombre}
            label="Nombres"
          />

          <Input
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            onChange={setApellidos}
            error={errors.apellidos}
            label="Apellidos"
          />

          <Input
            type="date"
            placeholder="Fecha de nacimiento"
            value={fechaNacimiento}
            onChange={setFechaNacimiento}
            error={errors.fechaNacimiento}
            label="Fch. Nacimiento"
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            error={errors.email}
            label="Email"
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={setPassword}
            error={errors.password}
            label="Contraseña"
          />

          <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={setConfirmPassword}
            error={errors.confirmPassword}
            label="Confirmar contraseña"
          />

          <div className="pt-6">
            <Button type="submit">Crear cuenta</Button>
          </div>
        </form>

        <p className="text-center mt-6 text-indigo-600 text-[16px] tracking-[0.75px]">
          ¿Ya tienes una cuenta?{' '}
          <button
            onClick={onSwitchToLogin}
            className="font-bold underline"
          >
            inicia sesión
          </button>
        </p>
      </div>
    </div>
  );
}
