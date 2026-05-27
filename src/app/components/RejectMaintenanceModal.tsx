import { useState } from 'react';
import Button from './Button';
import { X, AlertCircle } from 'lucide-react';

interface RejectMaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReject: (reason: string) => void;
}

export default function RejectMaintenanceModal({
  isOpen,
  onClose,
  onReject
}: RejectMaintenanceModalProps) {
  const [reason, setReason] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleReject = () => {
    if (!reason.trim()) {
      setFormError('Por favor ingrese el motivo del rechazo');
      return;
    }
    setFormError('');
    onReject(reason);
    setReason('');
  };

  const handleClose = () => {
    setReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-[380px] p-6 shadow-2xl transform animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle size={24} className="text-red-600" />
            </div>
            <h2 className="text-slate-800 text-[20px] font-bold">
              Rechazar Mantenimiento
            </h2>
          </div>
          <button onClick={handleClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-slate-600 text-[14px] mb-4">
            Por favor, indique el motivo por el cual está rechazando este registro de mantenimiento:
          </p>

          <div className="bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 hover:border-red-300 transition-colors">
            <textarea
              placeholder="Ej: Documentación incompleta, información inconsistente..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full bg-transparent text-slate-800 text-[16px] leading-[28px] focus:outline-none resize-none placeholder:text-slate-400"
              autoFocus
            />
          </div>
        </div>

        <div className="space-y-3">
          {formError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <p className="text-red-600 text-[13px]">{formError}</p>
            </div>
          )}
          <Button variant="danger" onClick={handleReject}>
            Confirmar Rechazo
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
