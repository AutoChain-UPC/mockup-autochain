import MobileHeader from '../components/MobileHeader';
import { ChevronRight, Eye, CheckCircle2 } from 'lucide-react';
import { Vehicle } from '../types';

interface GrantedVehiclesScreenProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onBack: () => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export default function GrantedVehiclesScreen({
  vehicles,
  onSelectVehicle,
  onBack,
  onOpenNotifications,
  unreadNotifications
}: GrantedVehiclesScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <MobileHeader
        onBack={onBack}
        onNotifications={onOpenNotifications}
        unreadNotifications={unreadNotifications}
      />

      <div className="relative z-10 px-6 pt-8 pb-6">
        <h1 className="text-slate-800 text-[28px] font-bold mb-2">
          Vehículos con Acceso
        </h1>
        <p className="text-slate-500 text-[14px] mb-6">
          {vehicles.length} vehículos con acceso completo
        </p>

        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle)}
              className="w-full bg-white rounded-2xl border-2 border-slate-100 p-5 text-left hover:border-green-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex gap-4 items-center">
                <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 relative flex items-center justify-center">
                  {vehicle.imagen ? (
                    <img
                      src={vehicle.imagen}
                      alt={`${vehicle.marca} ${vehicle.modelo}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-slate-400 text-[14px] font-semibold text-center px-2">
                      {vehicle.marca}
                    </div>
                  )}
                  {/* Badge de acceso concedido */}
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1.5 shadow-lg">
                    <CheckCircle2 size={14} className="text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-slate-900 text-[18px] font-bold mb-2">
                    {vehicle.marca} {vehicle.modelo}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-green-600 text-[14px] font-bold">
                      {vehicle.placa}
                    </p>
                    <p className="text-slate-600 text-[14px]">
                      Año {vehicle.año}
                    </p>
                  </div>
                </div>

                <ChevronRight className="text-slate-300 group-hover:text-green-500 transition-colors" size={24} />
              </div>
            </button>
          ))}
        </div>

        {vehicles.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <Eye size={48} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-[15px]">
              No tienes acceso a ningún vehículo
            </p>
            <p className="text-slate-400 text-[13px] mt-1">
              Solicita acceso a vehículos públicos para verlos aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
