import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Input from '../components/Input';
import Button from '../components/Button';
import { ChevronDown } from 'lucide-react';
import imgVehicle from '../../imports/RegistrarMantenimiento/49848e7144325e4e6748085f841db6887a6aebdf.png';

interface RegisterMaintenanceScreenProps {
  onBack: () => void;
  onNext: (data: any) => void;
  vehicleImage?: string;
}

export default function RegisterMaintenanceScreen({
  onBack,
  onNext,
  vehicleImage
}: RegisterMaintenanceScreenProps) {
  const [fecha, setFecha] = useState('');
  const [kilometraje, setKilometraje] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [taller, setTaller] = useState('');
  const [errors, setErrors] = useState<any>({});

  const tiposServicio = [
    { id: '1', name: 'Mantenimiento Menor' },
    { id: '2', name: 'Mantenimiento Mayor' },
    { id: '3', name: 'Mantenimiento Correctivo' }
  ];
  const talleres = ['AutoCare', 'MecaniCar', 'TallerPro', 'Speed Motors'];

  const validateForm = () => {
    const newErrors: any = {};
    if (!fecha) newErrors.fecha = 'La fecha es requerida';
    if (!kilometraje) newErrors.kilometraje = 'El kilometraje es requerido';
    if (!tipoServicio) newErrors.tipoServicio = 'Seleccione el tipo de servicio';
    if (!descripcion) newErrors.descripcion = 'La descripción es requerida';
    if (!taller) newErrors.taller = 'Seleccione el taller';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext({ fecha, kilometraje: parseInt(kilometraje), tipoServicio, descripcion, taller });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-20">
        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          Registro de Mantenimiento
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src={vehicleImage || imgVehicle}
            alt="Vehículo"
            className="w-[143px] h-[143px] object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="space-y-5">
          <Input
            type="date"
            placeholder="mm/dd/yyyy"
            value={fecha}
            onChange={setFecha}
            error={errors.fecha}
            label="Fecha del servicio"
          />

          <Input
            type="number"
            placeholder="26540"
            value={kilometraje}
            onChange={setKilometraje}
            error={errors.kilometraje}
            label="Kilometraje actual"
          />

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">
              Tipo de mantenimiento
            </p>
            <div className="relative">
              <select
                value={tipoServicio}
                onChange={(e) => setTipoServicio(e.target.value)}
                className="w-full bg-white rounded-xl border-2 border-slate-200 px-4 py-3.5 text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                <option value="">Seleccione tipo de mantenimiento</option>
                {tiposServicio.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
            {errors.tipoServicio && (
              <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.tipoServicio}</p>
            )}
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Descripción general</p>
            <div className="bg-white rounded-xl border-2 border-slate-200 px-4 py-3.5 hover:border-slate-300 transition-colors shadow-sm">
              <textarea
                placeholder="Ej: Servicio de mantenimiento preventivo programado..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={3}
                className="w-full bg-transparent text-slate-800 text-[16px] leading-[28px] focus:outline-none resize-none placeholder:text-slate-400"
              />
            </div>
            {errors.descripcion && (
              <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.descripcion}</p>
            )}
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">
              Taller Validador
            </p>
            <div className="relative">
              <select
                value={taller}
                onChange={(e) => setTaller(e.target.value)}
                className="w-full bg-white rounded-xl border-2 border-slate-200 px-4 py-3.5 text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                <option value="">Seleccione taller</option>
                {talleres.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
            {errors.taller && (
              <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.taller}</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Button onClick={handleNext}>Detalles de Acciones</Button>
        </div>
      </div>
    </div>
  );
}
