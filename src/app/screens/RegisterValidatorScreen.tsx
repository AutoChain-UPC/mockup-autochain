import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { Check } from 'lucide-react';

interface RegisterValidatorScreenProps {
  onBack: () => void;
  onRegister: (data: any) => void;
}

export default function RegisterValidatorScreen({ onBack, onRegister }: RegisterValidatorScreenProps) {
  const [nombre, setNombre] = useState('');
  const [ruc, setRuc] = useState('');
  const [direccion, setDireccion] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (!nombre) newErrors.nombre = 'El nombre del taller es requerido';
    if (!ruc) newErrors.ruc = 'El RUC/ID Fiscal es requerido';
    if (!direccion) newErrors.direccion = 'La dirección es requerida';
    if (!accepted) newErrors.accepted = 'Debe aceptar los términos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister({ nombre, ruc, direccion });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-4 pt-6">
        <h1 className="text-slate-700 text-[28px] font-bold text-center leading-[34px] tracking-[0.75px] mb-12">
          Registro de taller
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="nombre del taller"
            value={nombre}
            onChange={setNombre}
            error={errors.nombre}
            label="Nombre del Taller"
          />

          <Input
            type="text"
            placeholder="ruc / id fiscal"
            value={ruc}
            onChange={setRuc}
            error={errors.ruc}
            label="RUC / Id Fiscal"
          />

          <Input
            type="text"
            placeholder="dirección"
            value={direccion}
            onChange={setDireccion}
            error={errors.direccion}
            label="Dirección de Operaciones"
          />

          {/* Checkbox de aceptación */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setAccepted(!accepted)}
              className="flex gap-3 items-start text-left"
            >
              <div
                className={`w-[16px] h-[16px] rounded flex items-center justify-center flex-shrink-0 mt-1 transition-colors border-2 ${
                  accepted
                    ? 'bg-[#2c2c2c] border-[#2c2c2c]'
                    : 'bg-white border-gray-400'
                }`}
              >
                {accepted && <Check size={12} className="text-[#f5f5f5]" strokeWidth={3} />}
              </div>

              <p className="text-[#1e1e1e] text-[16px] leading-[1.4] flex-1">
                Declaro que la información proporcionada es verídica y acepto sostenerme al
                proceso de auditoría presencial según el protocolo de AutoChain
              </p>
            </button>
            {errors.accepted && (
              <p className="text-red-500 text-sm mt-2 ml-7">{errors.accepted}</p>
            )}
          </div>

          <div className="pt-6">
            <Button type="submit">Registrar Taller</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
