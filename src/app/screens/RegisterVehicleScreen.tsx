import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { Camera } from 'lucide-react';
import imgPlaceholder from '../../imports/RegisterVehicleBase/39c6be6b26d52dc0674638fb6ecb40a366e0ec43.png';

interface RegisterVehicleScreenProps {
  onBack: () => void;
  onRegister: (vehicleData: any) => void;
}

export default function RegisterVehicleScreen({ onBack, onRegister }: RegisterVehicleScreenProps) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('');
  const [placa, setPlaca] = useState('');
  const [vin, setVin] = useState('');
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};

    if (!marca) newErrors.marca = 'La marca es requerida';
    if (!modelo) newErrors.modelo = 'El modelo es requerido';
    if (!año) newErrors.año = 'El año es requerido';
    if (!placa) newErrors.placa = 'La placa es requerida';
    if (!vin) newErrors.vin = 'El VIN es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister({ marca, modelo, año, placa, vin, imagen: imgPlaceholder });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-4 pt-6">
        <h1 className="text-slate-700 text-[28px] font-bold text-center leading-[34px] mb-8">
          Registro de vehículo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Porsche"
            value={marca}
            onChange={setMarca}
            error={errors.marca}
            label="Marca"
          />

          <Input
            type="text"
            placeholder="911"
            value={modelo}
            onChange={setModelo}
            error={errors.modelo}
            label="Modelo"
          />

          <Input
            type="text"
            placeholder="2015"
            value={año}
            onChange={setAño}
            error={errors.año}
            label="Año"
          />

          <Input
            type="text"
            placeholder="YLZ-001"
            value={placa}
            onChange={setPlaca}
            error={errors.placa}
            label="Placa"
          />

          <Input
            type="text"
            placeholder="KPS123456789"
            value={vin}
            onChange={setVin}
            error={errors.vin}
            label="Nro Serie(VIN)"
          />

          <div className="pt-4">
            <p className="text-slate-700 text-[16px] mb-3 tracking-[0.75px]">
              Representación Visual{' '}
              <span className="text-slate-400 text-[13px] font-normal">(opcional)</span>
            </p>
            <div className="bg-slate-100 rounded-[25px] h-[146px] flex flex-col items-center justify-center gap-2 border border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <Camera size={83} className="text-[#1D1B20]" />
              <p className="text-[16px] tracking-[0.75px]">Suba o añada una foto</p>
            </div>
          </div>

          <div className="pt-6">
            <Button type="submit">Registrar vehículo</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
