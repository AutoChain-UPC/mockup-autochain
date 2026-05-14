import MobileHeader from '../components/MobileHeader';
import { Clock, ChevronRight } from 'lucide-react';
import { Maintenance, Vehicle } from '../types';

interface ValidatorApprovalsScreenProps {
  onOpenMenu: () => void;
  onSelectApproval: (approval: any) => void;
  maintenances: Maintenance[];
  vehicles: Vehicle[];
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export default function ValidatorApprovalsScreen({
  onOpenMenu,
  onSelectApproval,
  maintenances,
  vehicles,
  onOpenNotifications,
  unreadNotifications
}: ValidatorApprovalsScreenProps) {

  // Filtrar solo mantenimientos pendientes
  const pendingApprovals = maintenances
    .filter(m => m.status === 'pendiente')
    .map(m => {
      const vehicle = vehicles.find(v => v.id === m.vehicleId);
      const totalCost = m.details.reduce((sum, detail) => sum + detail.cost, 0);

      return {
        ...m,
        vehicleModel: vehicle ? `${vehicle.marca} ${vehicle.modelo}` : 'Vehículo desconocido',
        vehiclePlate: vehicle?.placa || 'N/A',
        maintenanceType: m.typeName || 'Mantenimiento',
        requestDate: new Date(m.date).toLocaleDateString('es-PE'),
        totalCost,
        image: vehicle?.imagen || ''
      };
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <MobileHeader
        showMenu
        onMenu={onOpenMenu}
        onNotifications={onOpenNotifications}
        unreadNotifications={unreadNotifications}
      />

      <div className="relative z-10 px-6 pt-8 pb-6">
        <h1 className="text-slate-800 text-[28px] font-bold mb-2">
          Bandeja de Validaciones
        </h1>
        <p className="text-slate-500 text-[14px] mb-6">
          {pendingApprovals.length} solicitudes pendientes
        </p>

        <div className="space-y-4">
          {pendingApprovals.map((approval) => (
            <button
              key={approval.id}
              onClick={() => onSelectApproval(approval)}
              className="w-full bg-white rounded-2xl border-2 border-slate-100 p-5 text-left hover:border-indigo-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex gap-4 items-center mb-4">
                <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 relative flex items-center justify-center">
                  {approval.image ? (
                    <img
                      src={approval.image}
                      alt={approval.vehicleModel}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-slate-400 text-[14px] font-semibold text-center px-2">
                      {approval.vehicleModel.split(' ')[0]}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-slate-900 text-[18px] font-bold mb-2">
                    {approval.vehicleModel}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-indigo-600 text-[14px] font-bold">
                      {approval.vehiclePlate}
                    </p>
                    <p className="text-slate-600 text-[14px]">
                      {approval.maintenanceType}
                    </p>
                  </div>
                </div>

                <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-colors" size={24} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-500" />
                  <p className="text-slate-600 text-[14px]">
                    {approval.requestDate}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[12px] font-bold">
                    PENDIENTE
                  </span>
                  <span className="text-indigo-600 text-[14px] font-bold">
                    S/.{approval.totalCost.toFixed(2)}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {pendingApprovals.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <Clock size={48} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-[15px]">
              No hay validaciones pendientes
            </p>
            <p className="text-slate-400 text-[13px] mt-1">
              Las solicitudes de mantenimiento aparecerán aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
