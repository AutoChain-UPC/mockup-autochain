import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import RejectMaintenanceModal from '../components/RejectMaintenanceModal';
import { FileText, CheckCircle2, XCircle } from 'lucide-react';
import imgPhoto from '../../imports/BandejaDeAprobaciones-1/c2c5c2cf38273812076d76246d2531a9bb373a4f.png';

interface ApprovalDetailScreenProps {
  approval: any;
  onBack: () => void;
  onApprove: () => void;
  onReject: (reason: string) => void;
}

export default function ApprovalDetailScreen({
  approval,
  onBack,
  onApprove,
  onReject
}: ApprovalDetailScreenProps) {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const workItems = [
    {
      descripcion: 'Cambio de Aceite',
      precio: 320.00,
      notas: 'Componente original'
    },
    {
      descripcion: 'Cambio de Filtros',
      precio: 70.00,
      notas: 'Componente original'
    }
  ];

  const handleReject = (reason: string) => {
    setIsRejectModalOpen(false);
    onReject(reason);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-24">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-24">
        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          Mantenimiento Menor
        </h1>

        {/* Identidad técnica del vehículo */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-4 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Identidad técnica del vehículo
          </h2>
          <div className="grid grid-cols-2 gap-4 text-slate-600 text-[15px]">
            <p><span className="font-medium">Modelo:</span> Porsche 911</p>
            <p><span className="font-medium">Placa:</span> YLZ-001</p>
            <p><span className="font-medium">KM:</span> 26,300 km</p>
            <p><span className="font-medium">Estado:</span> <span className="text-amber-600 font-bold">Pendiente</span></p>
          </div>
        </div>

        {/* Ítems de Trabajo Realizado */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-4 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Ítems de Trabajo Realizado
          </h2>

          <div className="space-y-4">
            {workItems.map((item, index) => (
              <div key={index} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-slate-800 text-[16px] font-semibold flex-1">{item.descripcion}</p>
                  <p className="text-indigo-600 text-[16px] font-bold ml-4">S/.{item.precio.toFixed(2)}</p>
                </div>
                <p className="text-slate-500 text-[14px]">{item.notas}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 text-[16px] font-semibold">Total</span>
              <span className="text-indigo-600 text-[20px] font-bold">
                S/.{workItems.reduce((sum, item) => sum + item.precio, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Evidencia Documental */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-4 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Evidencia Documental
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-slate-100">
              <img src={imgPhoto} alt="Foto" className="w-full h-[130px] object-cover" />
            </div>

            <div className="bg-slate-100 rounded-xl flex flex-col items-center justify-center p-2">
              <FileText size={60} className="text-slate-600 mb-2" />
              <p className="text-slate-700 text-[10px] text-center">
                Factura_REP_09.pdf
              </p>
            </div>
          </div>
        </div>

        {/* Datos de registro */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-6 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Datos de registro
          </h2>

          <div className="space-y-3 text-slate-600 text-[15px]">
            <div className="flex justify-between">
              <span>Cargado por:</span>
              <span className="font-semibold text-slate-800">Hans Retes</span>
            </div>
            <div className="flex justify-between">
              <span>Fecha de Registro:</span>
              <span className="font-semibold text-slate-800">30/04/2024</span>
            </div>
          </div>
        </div>

        {/* Botones de Acción - Solo mostrar si está pendiente */}
        {approval.status === 'pendiente' && (
          <div className="space-y-3">
            <Button onClick={onApprove}>
              Aprobar Mantenimiento
            </Button>
            <Button variant="danger" onClick={() => setIsRejectModalOpen(true)}>
              Rechazar Mantenimiento
            </Button>
          </div>
        )}

        {/* Mostrar estado si ya fue procesado */}
        {approval.status === 'validado' && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 size={24} className="text-green-600" />
              <span className="text-green-700 text-[16px] font-bold">
                APROBADO Y REGISTRADO EN BLOCKCHAIN
              </span>
            </div>
          </div>
        )}

        {approval.status === 'rechazado' && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <XCircle size={24} className="text-red-600" />
              <span className="text-red-700 text-[16px] font-bold">
                MANTENIMIENTO RECHAZADO
              </span>
            </div>
            {approval.rejectionReason && (
              <p className="text-slate-700 text-[14px] text-center">
                <span className="font-semibold">Motivo:</span> {approval.rejectionReason}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Modal de Rechazo */}
      <RejectMaintenanceModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        onReject={handleReject}
      />
    </div>
  );
}
