import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Eye, Lock } from 'lucide-react';
import { Vehicle } from '../types';

interface PublicVehicleDetailScreenProps {
  vehicle: Vehicle;
  onBack: () => void;
  onRequestAccess: () => void;
  hasRequestedAccess: boolean;
  hasAccess: boolean;
  onViewMaintenances?: () => void;
}

export default function PublicVehicleDetailScreen({
  vehicle,
  onBack,
  onRequestAccess,
  hasRequestedAccess,
  hasAccess,
  onViewMaintenances
}: PublicVehicleDetailScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-24">
      <MobileHeader onBack={onBack} />

      <div className="relative z-10 px-6 pt-8 pb-24">
        {/* Imagen del vehículo */}
        <div className="w-full h-[200px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden mb-6 relative flex items-center justify-center">
          {vehicle.imagen ? (
            <img
              src={vehicle.imagen}
              alt={`${vehicle.marca} ${vehicle.modelo}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-slate-400 text-[20px] font-bold">
              {vehicle.marca} {vehicle.modelo}
            </div>
          )}
          {/* Badge de público */}
          <div className="absolute top-4 right-4 bg-indigo-500 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <Eye size={16} className="text-white" strokeWidth={2.5} />
            <span className="text-white text-[12px] font-bold">PÚBLICO</span>
          </div>
        </div>

        <h1 className="text-slate-800 text-[28px] font-bold mb-6">
          {vehicle.marca} {vehicle.modelo}
        </h1>

        {/* Información Básica */}
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 mb-6 shadow-sm">
          <h2 className="text-slate-800 text-[18px] font-bold mb-4">
            Información Básica
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600 text-[15px]">Placa</span>
              <span className="text-slate-900 text-[15px] font-semibold">{vehicle.placa}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600 text-[15px]">Año</span>
              <span className="text-slate-900 text-[15px] font-semibold">{vehicle.año}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 text-[15px]">Marca y Modelo</span>
              <span className="text-slate-900 text-[15px] font-semibold">{vehicle.marca} {vehicle.modelo}</span>
            </div>
          </div>
        </div>

        {/* Información Restringida */}
        <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 border-dashed p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              <Lock size={20} className="text-slate-500" />
            </div>
            <h2 className="text-slate-700 text-[18px] font-bold">
              Información Completa Restringida
            </h2>
          </div>
          <p className="text-slate-600 text-[14px] mb-4">
            Para acceder a la información completa del vehículo, incluyendo:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-slate-600 text-[14px] flex items-start gap-2">
              <span className="text-indigo-500">•</span>
              <span>Detalles técnicos (VIN, motor, cilindrada, etc.)</span>
            </li>
            <li className="text-slate-600 text-[14px] flex items-start gap-2">
              <span className="text-indigo-500">•</span>
              <span>Historial completo de mantenimientos</span>
            </li>
            <li className="text-slate-600 text-[14px] flex items-start gap-2">
              <span className="text-indigo-500">•</span>
              <span>Certificados blockchain</span>
            </li>
          </ul>
          <p className="text-slate-600 text-[14px]">
            Debes solicitar acceso al propietario del vehículo.
          </p>
        </div>

        {/* Botón de acción */}
        {hasAccess ? (
          <div className="space-y-3">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Eye size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-green-700 text-[14px] font-bold">Acceso Concedido</p>
                <p className="text-green-600 text-[12px]">Puedes ver la información completa</p>
              </div>
            </div>
            {onViewMaintenances && (
              <Button onClick={onViewMaintenances}>
                Ver Historial de Mantenimientos
              </Button>
            )}
          </div>
        ) : hasRequestedAccess ? (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Lock size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-amber-700 text-[14px] font-bold">Solicitud Enviada</p>
              <p className="text-amber-600 text-[12px]">Esperando aprobación del propietario</p>
            </div>
          </div>
        ) : (
          <Button onClick={onRequestAccess}>
            Solicitar Acceso Completo
          </Button>
        )}
      </div>
    </div>
  );
}
