import MobileHeader from "../components/MobileHeader";
import Button from "../components/Button";
import { Vehicle } from "../types";
import { Eye, EyeOff } from "lucide-react";
import imgVehicle from "../../imports/DatosDelVehiculo-1/49848e7144325e4e6748085f841db6887a6aebdf.png";

interface VehicleDetailScreenProps {
  vehicle: Vehicle;
  onBack: () => void;
  onViewMaintenances: () => void;
  onRegisterMaintenance: () => void;
  onDeleteVehicle: () => void;
  onToggleVisibility?: () => void;
  isOwner?: boolean;
}

export default function VehicleDetailScreen({
  vehicle,
  onBack,
  onViewMaintenances,
  onRegisterMaintenance,
  onDeleteVehicle,
  onToggleVisibility,
  isOwner = true,
}: VehicleDetailScreenProps) {
  const InfoField = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <div className="space-y-2">
      <p className="text-slate-700 text-[16px] tracking-[0.75px]">
        {label}
      </p>
      <div className="bg-white rounded-lg border-2 border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all px-4 py-3">
        <p className="text-slate-400 text-[16px] tracking-[0.75px]">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10">
        <div className="bg-white mx-4 mt-6 rounded-2xl shadow-[0px_32px_64px_0px_rgba(17,17,17,0.08)] p-6">
          <div className="flex justify-center mb-6">
            <img
              src={vehicle.imagen || imgVehicle}
              alt={vehicle.modelo}
              className="w-[181px] h-[181px] object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <InfoField label="Marca" value={vehicle.marca} />
            <InfoField label="Modelo" value={vehicle.modelo} />
            <InfoField
              label="Color"
              value={vehicle.color || "Plata metálico"}
            />
            <InfoField
              label="Año/Versión"
              value={`${vehicle.año} / ${vehicle.version || "Coupé"}`}
            />
            <InfoField label="Placa" value={vehicle.placa} />
            <InfoField
              label="N Serie(VIN)"
              value={vehicle.vin}
            />
            <InfoField
              label="Motor"
              value={vehicle.motor || "KPS123456789"}
            />
            <InfoField
              label="Cilindrada"
              value={vehicle.cilindrada || "2,981 cc"}
            />
          </div>

          <div className="mt-6 space-y-3">
            {isOwner && onToggleVisibility && (
              <button
                onClick={onToggleVisibility}
                className={`w-full rounded-xl py-3 px-6 text-[16px] font-bold shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                  vehicle.visible
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-400"
                    : "bg-gradient-to-r from-slate-600 to-slate-500 text-white hover:from-slate-500 hover:to-slate-400"
                }`}
              >
                {vehicle.visible ? (
                  <>
                    <Eye size={20} strokeWidth={2.5} />
                    <span>Visible Públicamente</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={20} strokeWidth={2.5} />
                    <span>No Visible (Solo Yo)</span>
                  </>
                )}
              </button>
            )}
            <Button onClick={onViewMaintenances}>
              Mantenimientos
            </Button>
            {isOwner && (
              <Button
                variant="danger"
                onClick={onDeleteVehicle}
              >
                Eliminar vehículo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}