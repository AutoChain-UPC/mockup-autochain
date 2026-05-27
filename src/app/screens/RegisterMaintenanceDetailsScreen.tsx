import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import MaintenanceItemModal from '../components/MaintenanceItemModal';
import { useToast } from '../components/Toast';
import { Plus, Wrench, AlertCircle } from 'lucide-react';

interface MaintenanceDetailItem {
  id: string;
  actionTypeId: string;
  actionTypeName?: string;
  previousState: string;
  newState: string;
  cost: string;
  notes: string;
  componentId?: string;
  componentName?: string;
}

interface RegisterMaintenanceDetailsScreenProps {
  onBack: () => void;
  onNext: (items: MaintenanceDetailItem[]) => void;
}

export default function RegisterMaintenanceDetailsScreen({
  onBack,
  onNext
}: RegisterMaintenanceDetailsScreenProps) {
  const [items, setItems] = useState<MaintenanceDetailItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MaintenanceDetailItem | null>(null);
  const [viewMode, setViewMode] = useState(false);
  const [nextError, setNextError] = useState('');
  const { showToast } = useToast();

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

  const handleAddItem = () => {
    setSelectedItem(null);
    setViewMode(false);
    setIsModalOpen(true);
  };

  const handleViewItem = (item: MaintenanceDetailItem) => {
    setSelectedItem(item);
    setViewMode(true);
    setIsModalOpen(true);
  };

  const handleSaveItem = (itemData: {
    actionTypeId: string;
    previousState: string;
    newState: string;
    cost: string;
    notes: string;
    componentId?: string;
  }) => {
    const actionType = actionTypes.find(t => t.id === itemData.actionTypeId);
    const component = components.find(c => c.id === itemData.componentId);

    if (selectedItem) {
      // Editar item existente
      setItems(items.map(item =>
        item.id === selectedItem.id ? {
          ...selectedItem,
          ...itemData,
          actionTypeName: actionType?.name,
          componentName: component?.name
        } : item
      ));
    } else {
      // Agregar nuevo item
      const newItem: MaintenanceDetailItem = {
        id: String(Date.now()),
        ...itemData,
        actionTypeName: actionType?.name,
        componentName: component?.name
      };
      setItems([...items, newItem]);
      showToast('Acción añadida correctamente');
    }
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleDeleteItem = () => {
    if (selectedItem) {
      setItems(items.filter(item => item.id !== selectedItem.id));
      setIsModalOpen(false);
      setSelectedItem(null);
    }
  };

  const handleNext = () => {
    if (items.length === 0) {
      setNextError('Debe agregar al menos una acción realizada');
      return;
    }
    setNextError('');
    onNext(items);
  };

  const getTotalCost = () => {
    return items.reduce((sum, item) => sum + parseFloat(item.cost || '0'), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-20">
        <h1 className="text-slate-800 text-[28px] font-bold mb-2">
          Detalles de Acciones
        </h1>
        <p className="text-slate-500 text-[14px] mb-6">
          Registra cada acción realizada durante el mantenimiento
        </p>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-slate-700 text-[18px] font-semibold">
            Acciones Realizadas
          </h2>

          <button
            onClick={handleAddItem}
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl px-4 py-2.5 flex items-center gap-2 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            <Plus size={18} className="text-white" strokeWidth={2.5} />
            <span className="text-white text-[14px] font-semibold">
              Añadir
            </span>
          </button>
        </div>

        {/* Lista de items agregados */}
        <div className="space-y-3 mb-6">
          {items.length === 0 ? (
            <div className="bg-white rounded-xl border-2 border-dashed border-slate-200 p-8 text-center">
              <Wrench size={48} className="text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 text-[15px]">
                No hay acciones registradas
              </p>
              <p className="text-slate-400 text-[13px] mt-1">
                Presiona "Añadir" para comenzar
              </p>
            </div>
          ) : (
            items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleViewItem(item)}
                className="w-full bg-white rounded-xl border-2 border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-200 p-4 text-left group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[12px] font-bold">
                        {item.actionTypeName || 'Acción'}
                      </span>
                      {item.componentName && (
                        <span className="text-slate-500 text-[13px]">
                          • {item.componentName}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-[14px]">
                      {item.newState}
                    </p>
                  </div>
                  <p className="text-indigo-600 text-[18px] font-bold ml-4">
                    S/.{parseFloat(item.cost).toFixed(2)}
                  </p>
                </div>
                {item.notes && (
                  <p className="text-slate-400 text-[13px] line-clamp-1 mt-2 pt-2 border-t border-slate-100">
                    {item.notes}
                  </p>
                )}
              </button>
            ))
          )}
        </div>

        {/* Total */}
        {items.length > 0 && (
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 text-[16px] font-semibold">
                Total del mantenimiento
              </span>
              <span className="text-indigo-600 text-[24px] font-bold">
                S/.{getTotalCost().toFixed(2)}
              </span>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3">
          {nextError && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <p className="text-red-600 text-[13px]">{nextError}</p>
            </div>
          )}
          <Button onClick={handleNext}>Adjuntar Evidencia</Button>
        </div>

        {/* Modal para agregar/editar/ver item */}
        <MaintenanceItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveItem}
          onDelete={viewMode ? handleDeleteItem : undefined}
          item={selectedItem}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
}
