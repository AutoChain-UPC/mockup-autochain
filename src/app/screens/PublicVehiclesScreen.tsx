import MobileHeader from '../components/MobileHeader';
import { ChevronRight, Eye, Lock, CheckCircle2, Clock } from 'lucide-react';
import { Vehicle, VehicleAccess } from '../types';

interface PublicVehiclesScreenProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenMenu: () => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
  userId: string;
  vehicleAccesses: VehicleAccess[];
  onRequestAccess: (vehicleId: string) => void;
}

export default function PublicVehiclesScreen({
  vehicles,
  onSelectVehicle,
  onOpenMenu,
  onOpenNotifications,
  unreadNotifications,
  userId,
  vehicleAccesses,
  onRequestAccess
}: PublicVehiclesScreenProps) {
  const publicVehicles = vehicles.filter(v => v.visible);

  const getAccessStatus = (vehicle: Vehicle) => {
    if (vehicle.ownerId === userId) return 'owner';

    const access = vehicleAccesses.find(
      va => va.vehicleId === vehicle.id && va.requestedById === userId
    );

    if (!access) return 'none';
    return access.status; // 'pendiente' | 'concedido' | 'rechazado'
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
          Comunidad AutoChain
        </h1>

        <div className="space-y-4">
          {publicVehicles.map((vehicle) => {
            const accessStatus = getAccessStatus(vehicle);

            return (
              <div
                key={vehicle.id}
                className="w-full bg-white rounded-2xl border-2 border-slate-100 p-5 hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
              >
                <button
                  onClick={() => onSelectVehicle(vehicle)}
                  className="w-full text-left group"
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
                      {/* Badge según estado de acceso */}
                      {accessStatus === 'owner' ? (
                        <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1.5 shadow-lg">
                          <CheckCircle2 size={14} className="text-white" strokeWidth={2.5} />
                        </div>
                      ) : accessStatus === 'concedido' ? (
                        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1.5 shadow-lg">
                          <CheckCircle2 size={14} className="text-white" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className="absolute top-2 right-2 bg-indigo-500 rounded-full p-1.5 shadow-lg">
                          <Eye size={14} className="text-white" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-slate-900 text-[18px] font-bold mb-2">
                        {vehicle.marca} {vehicle.modelo}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-indigo-600 text-[14px] font-bold">
                          {vehicle.placa}
                        </p>
                        <p className="text-slate-600 text-[14px]">
                          Año {vehicle.año}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-colors" size={24} />
                  </div>
                </button>

                {/* Botón de acción según estado de acceso */}
                {accessStatus === 'owner' ? (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-purple-600">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">TU VEHÍCULO</span>
                  </div>
                ) : accessStatus === 'concedido' ? (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">ACCESO CONCEDIDO</span>
                  </div>
                ) : accessStatus === 'pendiente' ? (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-amber-600">
                    <Clock size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">SOLICITUD ENVIADA</span>
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestAccess(vehicle.id);
                    }}
                    className="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-2.5 rounded-xl hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <Lock size={16} strokeWidth={2.5} />
                    <span className="text-[13px] font-bold">SOLICITAR ACCESO</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {publicVehicles.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <Eye size={48} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-[15px]">
              No hay vehículos en la comunidad
            </p>
            <p className="text-slate-400 text-[13px] mt-1">
              Los vehículos marcados como visibles aparecerán aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
