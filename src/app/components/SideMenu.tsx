import {
  X,
  Home,
  User,
  Car,
  Bell,
  LogOut,
  CheckCircle2,
  Eye,
} from "lucide-react";
import imgProfile from "../../imports/SideMenu/55d08274861b075383d46df9693c8aa916986e6a.png";
import imgLogout from "../../imports/SideMenu/50f2aa45bec14cc703960f5a5fa0c84102159ddc.png";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  onValidatorMode: () => void;
  isValidator?: boolean;
}

export default function SideMenu({
  isOpen,
  onClose,
  onNavigate,
  onLogout,
  onValidatorMode,
  isValidator = false,
}: SideMenuProps) {
  if (!isOpen) return null;

  const menuItems = isValidator
    ? [
        {
          icon: Home,
          label: "Inicio",
          action: () => onNavigate("validator-approvals"),
        },
        {
          icon: User,
          label: "Perfil",
          action: () => onNavigate("profile"),
        },
        {
          icon: Car,
          label: "Pendientes",
          action: () => onNavigate("validator-approvals"),
        },
        {
          icon: CheckCircle2,
          label: "Historial",
          action: () => onNavigate("validator-history"),
        },
      ]
    : [
        {
          icon: Home,
          label: "Comunidad AutoChain",
          action: () => onNavigate("public-vehicles"),
        },
        {
          icon: Car,
          label: "Mis Vehículos",
          action: () => onNavigate("vehicles"),
        },
        {
          icon: Eye,
          label: "Vehículos con Acceso",
          action: () => onNavigate("granted-vehicles"),
        },
        {
          icon: User,
          label: "Perfil",
          action: () => onNavigate("profile"),
        },
      ];

  return (
    <>
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        className={`absolute left-0 top-0 h-full w-[344px] max-w-[83%] bg-gradient-to-b from-slate-800 to-slate-900 z-50 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-6 relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mt-8 mb-6">
              <img
                src={imgProfile}
                alt="Profile"
                className={`object-cover shadow-lg ring-4 ring-white/10 ${
                  isValidator
                    ? "w-[119px] h-[119px] rounded-full"
                    : "w-[133px] h-[95px] rounded-xl"
                }`}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-3 px-6 mb-2">
              <p className="text-white text-[11px] font-bold tracking-wider">
                INICIO
              </p>
            </div>

            <div className="border-t border-slate-700" />

            <div className="space-y-0">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    className="w-full px-6 py-4 text-left text-slate-300 text-[11px] font-semibold tracking-wider hover:bg-indigo-500/20 transition-all duration-200 flex items-center gap-3 group"
                  >
                    <item.icon
                      size={18}
                      className="group-hover:text-indigo-400 transition-colors"
                    />
                    <span className="group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </button>
                  <div className="border-t border-slate-700" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="border-t border-slate-700 mb-4" />

            <button
              onClick={onLogout}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 rounded-xl py-3 px-6 text-white text-[14px] font-bold flex items-center justify-center gap-2 hover:from-red-500 hover:to-red-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              <img
                src={imgLogout}
                alt=""
                className="w-[20px] h-[20px]"
              />
              Cerrar sesión
            </button>

            <div className="border-t border-slate-700" />

            <button
              onClick={() => {
                onValidatorMode();
                onClose();
              }}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl py-3 px-6 text-white text-[14px] font-bold hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              {isValidator ? "Modo Propietario" : "Modo Taller"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}