import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Maintenance } from '../types';
import { Check, Clock, ChevronRight } from 'lucide-react';

interface MaintenancesListScreenProps {
  maintenances: Maintenance[];
  onBack: () => void;
  onSelectMaintenance: (maintenance: Maintenance) => void;
  onRegisterMaintenance: () => void;
  onRegisterMaintenanceAi: () => void;
  isOwner?: boolean;
}

export default function MaintenancesListScreen({
  maintenances,
  onBack,
  onSelectMaintenance,
  onRegisterMaintenance,
  onRegisterMaintenanceAi,
  isOwner = true
}: MaintenancesListScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-6">
        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          Historial de Mantenimientos
        </h1>

        {isOwner && (
          <div className="mb-6 space-y-3">
            <Button onClick={onRegisterMaintenance}>
              Registrar Mantenimiento
            </Button>
            <Button variant="secondary" onClick={onRegisterMaintenanceAi}>
              Registrar con IA
            </Button>
          </div>
        )}

        <div className="space-y-4">
          {maintenances.map((maintenance) => (
            <button
              key={maintenance.id}
              onClick={() => onSelectMaintenance(maintenance)}
              className="w-full bg-white rounded-2xl border-2 border-slate-100 p-5 text-left hover:border-indigo-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${maintenance.status === 'validado' ? 'bg-green-500' : 'bg-amber-400'}`} />
                  <p className="text-slate-600 text-[14px] font-medium">
                    {new Date(maintenance.date).toLocaleDateString('es-ES', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-lg text-[12px] font-bold ${
                    maintenance.status === 'validado'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {maintenance.status === 'validado' ? 'VALIDADO' : 'PENDIENTE'}
                </span>
              </div>

              <h3 className="text-slate-900 text-[18px] font-bold mb-3">
                {maintenance.typeName || 'Mantenimiento Menor'}
              </h3>

              <div className="space-y-1.5 mb-4">
                {maintenance.details.slice(0, 2).map((detail, idx) => (
                  <div key={detail.id} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    <p className="text-slate-600 text-[14px]">
                      {detail.actionTypeName} {detail.componentName ? `- ${detail.componentName}` : ''}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                {maintenance.taller && (
                  <div className="flex items-center gap-2">
                    {maintenance.status === 'validado' ? (
                      <div className="bg-green-500 rounded-full p-1">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="bg-amber-400 rounded-full p-1">
                        <Clock size={14} className="text-white" strokeWidth={3} />
                      </div>
                    )}
                    <p className="text-slate-700 text-[14px] font-medium">
                      {maintenance.taller}
                    </p>
                  </div>
                )}
                <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-colors" size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
