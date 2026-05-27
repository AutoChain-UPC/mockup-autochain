import { useState, useEffect } from 'react';
import Button from './Button';
import { X, ChevronDown, AlertCircle } from 'lucide-react';

interface MaintenanceItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: {
    actionTypeId: string;
    previousState: string;
    newState: string;
    cost: string;
    notes: string;
    componentId?: string;
  }) => void;
  onDelete?: () => void;
  item?: {
    actionTypeId: string;
    previousState: string;
    newState: string;
    cost: string;
    notes: string;
    componentId?: string;
  } | null;
  viewMode?: boolean;
}

export default function MaintenanceItemModal({
  isOpen,
  onClose,
  onSave,
  onDelete,
  item,
  viewMode = false
}: MaintenanceItemModalProps) {
  const [actionTypeId, setActionTypeId] = useState('');
  const [newState, setNewState] = useState('');
  const [cost, setCost] = useState('');
  const [notes, setNotes] = useState('');
  const [componentId, setComponentId] = useState('');
  const [formError, setFormError] = useState('');

  // Mock data - en producción vendría de la API
  const actionTypes = [
    { id: '1', name: 'Cambio' },
    { id: '2', name: 'Reparación' },
    { id: '3', name: 'Inspección' },
    { id: '4', name: 'Limpieza' },
    { id: '5', name: 'Ajuste' }
  ];

  const components = [
    { id: '1', name: 'Aceite de motor' },
    { id: '2', name: 'Filtro de aceite' },
    { id: '3', name: 'Filtro de aire' },
    { id: '4', name: 'Bujías' },
    { id: '5', name: 'Batería' },
    { id: '6', name: 'Pastillas de freno' },
    { id: '7', name: 'Neumáticos' },
    { id: '8', name: 'Líquido de frenos' },
    { id: '9', name: 'Amortiguadores' },
    { id: '10', name: 'Correa de distribución' }
  ];

  useEffect(() => {
    if (item) {
      setActionTypeId(item.actionTypeId);
      setNewState(item.newState);
      setCost(item.cost);
      setNotes(item.notes);
      setComponentId(item.componentId || '');
    } else {
      setActionTypeId('');
      setNewState('');
      setCost('');
      setNotes('');
      setComponentId('');
    }
  }, [item, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!actionTypeId || !newState || !cost || !notes) {
      setFormError('Por favor complete todos los campos obligatorios');
      return;
    }
    setFormError('');
    onSave({
      actionTypeId,
      previousState: '',
      newState,
      cost,
      notes,
      componentId: componentId || undefined
    });
    setActionTypeId('');
    setNewState('');
    setCost('');
    setNotes('');
    setComponentId('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-[380px] p-6 max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scaleIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-slate-800 text-[20px] font-bold">
            {viewMode ? 'Detalle de Acción' : item ? 'Editar Acción' : 'Agregar Acción'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Tipo de acción *</p>
            <div className="relative">
              <select
                value={actionTypeId}
                onChange={(e) => setActionTypeId(e.target.value)}
                disabled={viewMode}
                className="w-full bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-70"
              >
                <option value="">Seleccione tipo de acción</option>
                {actionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Componente (opcional)</p>
            <div className="relative">
              <select
                value={componentId}
                onChange={(e) => setComponentId(e.target.value)}
                disabled={viewMode}
                className="w-full bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 disabled:opacity-70"
              >
                <option value="">Sin componente específico</option>
                {components.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Descripción del trabajo *</p>
            <div className="bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 hover:border-slate-300 transition-colors">
              <input
                type="text"
                placeholder="Ej: 5W-30 sintético, nuevo"
                value={newState}
                onChange={(e) => setNewState(e.target.value)}
                disabled={viewMode}
                className="w-full bg-transparent text-slate-800 text-[16px] focus:outline-none disabled:opacity-70 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Costo (S/) *</p>
            <div className="bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 hover:border-slate-300 transition-colors">
              <input
                type="number"
                step="0.01"
                placeholder="320.00"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                disabled={viewMode}
                className="w-full bg-transparent text-slate-800 text-[16px] focus:outline-none disabled:opacity-70 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <p className="text-slate-700 text-[15px] font-medium mb-2">Notas técnicas *</p>
            <div className="bg-slate-50 rounded-xl border-2 border-slate-200 px-4 py-3.5 hover:border-slate-300 transition-colors">
              <textarea
                placeholder="Detalles adicionales sobre la acción realizada..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={viewMode}
                rows={3}
                className="w-full bg-transparent text-slate-800 text-[16px] leading-[28px] focus:outline-none resize-none disabled:opacity-70 placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {formError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <p className="text-red-600 text-[13px]">{formError}</p>
            </div>
          )}
          {!viewMode && (
            <Button onClick={handleSave}>Guardar</Button>
          )}

          {viewMode && onDelete && (
            <Button variant="danger" onClick={onDelete}>
              Eliminar Acción
            </Button>
          )}

          <Button variant="secondary" onClick={onClose}>
            {viewMode ? 'Cerrar' : 'Cancelar'}
          </Button>
        </div>
      </div>
    </div>
  );
}
