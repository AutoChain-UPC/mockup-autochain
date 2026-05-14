import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Maintenance } from '../types';
import { FileText, Calendar, Gauge, Wrench } from 'lucide-react';
import imgPhoto from '../../imports/ListadoDeMantenimientos-2/c2c5c2cf38273812076d76246d2531a9bb373a4f.png';

interface MaintenanceDetailScreenProps {
  maintenance: Maintenance;
  onBack: () => void;
  onViewBlockchain: () => void;
}

export default function MaintenanceDetailScreen({
  maintenance,
  onBack,
  onViewBlockchain
}: MaintenanceDetailScreenProps) {
  const getTotalCost = () => {
    return maintenance.details.reduce((sum, detail) => sum + detail.cost, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-20">
        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          Detalle de Mantenimiento
        </h1>

        {/* Información General */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-5 mb-4 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Información General
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-indigo-500" />
              <div>
                <p className="text-slate-500 text-[13px]">Fecha</p>
                <p className="text-slate-800 text-[15px] font-semibold">
                  {new Date(maintenance.date).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Gauge size={20} className="text-indigo-500" />
              <div>
                <p className="text-slate-500 text-[13px]">Kilometraje</p>
                <p className="text-slate-800 text-[15px] font-semibold">
                  {maintenance.mileage.toLocaleString()} km
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wrench size={20} className="text-indigo-500" />
              <div>
                <p className="text-slate-500 text-[13px]">Tipo de Mantenimiento</p>
                <p className="text-slate-800 text-[15px] font-semibold">
                  {maintenance.typeName || 'Mantenimiento Menor'}
                </p>
              </div>
            </div>

            {maintenance.taller && (
              <div className="pt-3 border-t border-slate-100">
                <p className="text-slate-500 text-[13px] mb-1">Taller Validador</p>
                <p className="text-slate-800 text-[15px] font-semibold">
                  {maintenance.taller}
                </p>
              </div>
            )}

            {maintenance.description && (
              <div className="pt-3 border-t border-slate-100">
                <p className="text-slate-500 text-[13px] mb-1">Descripción</p>
                <p className="text-slate-600 text-[14px] leading-relaxed">
                  {maintenance.description}
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 text-[15px] font-semibold">
                Costo Total
              </span>
              <span className="text-indigo-600 text-[24px] font-bold">
                S/.{getTotalCost().toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Acciones Realizadas */}
        <div className="mb-4">
          <h2 className="text-slate-800 text-[18px] font-bold mb-3">
            Acciones Realizadas
          </h2>

          <div className="space-y-3">
            {maintenance.details.map((detail, index) => (
              <div
                key={detail.id}
                className="bg-white rounded-xl border-2 border-slate-100 p-4 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[12px] font-bold">
                        {detail.actionTypeName || 'Acción'}
                      </span>
                      {detail.componentName && (
                        <span className="text-slate-500 text-[13px]">
                          • {detail.componentName}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-indigo-600 text-[16px] font-bold ml-3">
                    S/.{detail.cost.toFixed(2)}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    {detail.newState}
                  </p>
                </div>

                {detail.notes && (
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-slate-500 text-[13px] mb-1">Notas técnicas:</p>
                    <p className="text-slate-600 text-[14px] leading-relaxed">
                      {detail.notes}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Evidencia */}
        {(maintenance.imagen || maintenance.factura) && (
          <div className="mb-6">
            <h2 className="text-slate-800 text-[18px] font-bold mb-3">
              Evidencia
            </h2>
            <div className="flex gap-4">
              {maintenance.imagen && (
                <div className="bg-slate-100 rounded-xl w-[130px] h-[130px] overflow-hidden">
                  <img src={imgPhoto} alt="Foto" className="w-full h-full object-cover" />
                </div>
              )}

              {maintenance.factura && (
                <div className="bg-slate-100 rounded-xl w-[130px] h-[130px] flex flex-col items-center justify-center">
                  <FileText size={60} className="text-slate-600 mb-2" />
                  <p className="text-slate-700 text-[10px] text-center px-2">
                    {maintenance.factura}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button onClick={onViewBlockchain}>
            Ver Información en Blockchain
          </Button>
        </div>
      </div>
    </div>
  );
}
