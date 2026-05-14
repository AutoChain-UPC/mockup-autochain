import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Vehicle } from '../types';
import { ChevronRight } from 'lucide-react';
import imgPorsche from '../../imports/ListadoDeVehiculos-1/49848e7144325e4e6748085f841db6887a6aebdf.png';
import imgFerrari from '../../imports/ListadoDeVehiculos-1/44f1208e56e94e2a359ce248f3b97dc6746720f5.png';

interface VehiclesListScreenProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onRegisterVehicle: () => void;
  onOpenMenu: () => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export default function VehiclesListScreen({
  vehicles,
  onSelectVehicle,
  onRegisterVehicle,
  onOpenMenu,
  onOpenNotifications,
  unreadNotifications
}: VehiclesListScreenProps) {
  const getVehicleImage = (index: number) => {
    return index === 0 ? imgPorsche : imgFerrari;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <MobileHeader
        showMenu
        onMenu={onOpenMenu}
        onNotifications={onOpenNotifications}
        unreadNotifications={unreadNotifications}
      />

      <div className="relative z-10 px-6 pt-8 pb-6">
        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          Mis Vehículos
        </h1>

        <div className="mb-6">
          <Button onClick={onRegisterVehicle}>
            Registrar Vehículo
          </Button>
        </div>

        <div className="space-y-4">
          {vehicles.map((vehicle, index) => (
            <button
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle)}
              className="w-full bg-white rounded-2xl border-2 border-slate-100 p-5 flex gap-5 items-center hover:border-indigo-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                  src={getVehicleImage(index)}
                  alt={vehicle.modelo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-slate-900 font-bold text-[18px] mb-3">
                  {vehicle.marca} {vehicle.modelo}
                </h3>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[14px]">Año:</span>
                    <span className="text-slate-700 font-semibold text-[14px]">{vehicle.año}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[14px]">Placa:</span>
                    <span className="text-indigo-600 font-bold text-[14px]">{vehicle.placa}</span>
                  </div>
                </div>
              </div>

              <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-colors" size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
