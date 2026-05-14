import { ArrowLeft, Bell } from 'lucide-react';

interface MobileHeaderProps {
  onBack?: () => void;
  onMenu?: () => void;
  showMenu?: boolean;
  onNotifications?: () => void;
  unreadNotifications?: number;
}

export default function MobileHeader({
  onBack,
  onMenu,
  showMenu = false,
  onNotifications,
  unreadNotifications = 0
}: MobileHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 h-[83px] w-full flex items-center justify-between px-4 relative shadow-lg">
      {/* Lado izquierdo - Menú o Atrás */}
      <div className="flex items-center">
        {showMenu && onMenu ? (
          <button
            onClick={onMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            <div className="flex flex-col gap-[5px]">
              <div className="w-[26px] h-[2.5px] bg-white rounded-full" />
              <div className="w-[26px] h-[2.5px] bg-white rounded-full" />
              <div className="w-[26px] h-[2.5px] bg-white rounded-full" />
            </div>
          </button>
        ) : onBack ? (
          <button
            onClick={onBack}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            <ArrowLeft size={28} />
          </button>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Lado derecho - Notificaciones */}
      <div className="flex items-center">
        {onNotifications ? (
          <button
            onClick={onNotifications}
            className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors relative"
          >
            <Bell size={18} className="text-slate-700" />
            {unreadNotifications > 0 && (
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">{unreadNotifications}</span>
              </div>
            )}
          </button>
        ) : (
          <div className="w-12" />
        )}
      </div>
    </div>
  );
}
