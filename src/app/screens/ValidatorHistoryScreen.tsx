import MobileHeader from '../components/MobileHeader';
import { CheckCircle2, Calendar, ChevronRight, XCircle } from 'lucide-react';
import { Maintenance, Vehicle } from '../types';

interface ValidatorHistoryScreenProps {
  onOpenMenu: () => void;
  onSelectApproval: (approval: any) => void;
  maintenances: Maintenance[];
  vehicles: Vehicle[];
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export default function ValidatorHistoryScreen({
  onOpenMenu,
  onSelectApproval,
  maintenances,
  vehicles,
  onOpenNotifications,
  unreadNotifications
}: ValidatorHistoryScreenProps) {
  // Filtrar solo mantenimientos validados o rechazados
  const completedMaintenances = maintenances
    .filter(m => m.status === 'validado' || m.status === 'rechazado')
    .map(m => {
      const vehicle = vehicles.find(v => v.id === m.vehicleId);
      const totalCost = m.details.reduce((sum, detail) => sum + detail.cost, 0);

      return {
        ...m,
        vehicleModel: vehicle ? `${vehicle.marca} ${vehicle.modelo}` : 'Vehículo desconocido',
        vehiclePlate: vehicle?.placa || 'N/A',
        maintenanceType: m.typeName || 'Mantenimiento',
        requestDate: new Date(m.date).toLocaleDateString('es-PE'),
        completedDate: m.status === 'validado'
          ? (m.validatedAt ? new Date(m.validatedAt).toLocaleDateString('es-PE') : 'N/A')
          : (m.rejectedAt ? new Date(m.rejectedAt).toLocaleDateString('es-PE') : 'N/A'),
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
          Historial de Validaciones
        </h1>
        <p className="text-slate-500 text-[14px] mb-6">
          {completedMaintenances.length} mantenimientos procesados
        </p>

        <div className="space-y-4">
          {completedMaintenances.map((approval) => (
            <button
              key={approval.id}
              onClick={() => onSelectApproval(approval)}
              className={`w-full bg-white rounded-2xl border-2 border-slate-100 p-5 text-left hover:shadow-lg transition-all duration-200 group ${
                approval.status === 'validado' ? 'hover:border-green-200' : 'hover:border-red-200'
              }`}
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
                  {/* Badge sobre la imagen */}
                  <div className={`absolute top-2 right-2 rounded-full p-1.5 shadow-lg ${
                    approval.status === 'validado' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {approval.status === 'validado' ? (
                      <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                    ) : (
                      <XCircle size={16} className="text-white" strokeWidth={3} />
                    )}
                  </div>
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

                <ChevronRight className={`text-slate-300 transition-colors ${
                  approval.status === 'validado' ? 'group-hover:text-green-500' : 'group-hover:text-red-500'
                }`} size={24} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className={approval.status === 'validado' ? 'text-green-500' : 'text-red-500'} />
                  <div>
                    <p className="text-slate-500 text-[12px]">
                      {approval.status === 'validado' ? 'Aprobado' : 'Rechazado'}
                    </p>
                    <p className="text-slate-700 text-[14px] font-semibold">
                      {approval.completedDate}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-slate-500 text-[12px]">Total</p>
                  <p className={`text-[16px] font-bold ${
                    approval.status === 'validado' ? 'text-green-600' : 'text-slate-600'
                  }`}>
                    S/.{approval.totalCost.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Badge de estado */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                {approval.status === 'validado' ? (
                  <div className="flex items-center justify-center gap-2 bg-green-50 rounded-lg py-2">
                    <CheckCircle2 size={18} className="text-green-600" />
                    <span className="text-green-700 text-[13px] font-bold">
                      APROBADO Y REGISTRADO EN BLOCKCHAIN
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-center gap-2 bg-red-50 rounded-lg py-2 mb-2">
                      <XCircle size={18} className="text-red-600" />
                      <span className="text-red-700 text-[13px] font-bold">
                        RECHAZADO
                      </span>
                    </div>
                    {approval.rejectionReason && (
                      <p className="text-slate-600 text-[13px] text-center px-2">
                        {approval.rejectionReason}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {completedMaintenances.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <CheckCircle2 size={48} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-[15px]">
              No hay aprobaciones registradas
            </p>
            <p className="text-slate-400 text-[13px] mt-1">
              Los mantenimientos aprobados aparecerán aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
