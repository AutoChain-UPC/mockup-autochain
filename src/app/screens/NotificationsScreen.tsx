import MobileHeader from '../components/MobileHeader';
import { CheckCircle2, XCircle, Bell, User } from 'lucide-react';
import { Notification } from '../types';

interface NotificationsScreenProps {
  notifications: Notification[];
  onBack: () => void;
  onMarkAsRead: (notificationId: string) => void;
  onNotificationClick: (notification: Notification) => void;
}

export default function NotificationsScreen({
  notifications,
  onBack,
  onMarkAsRead,
  onNotificationClick
}: NotificationsScreenProps) {
  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'acceso_concedido':
        return <CheckCircle2 size={20} className="text-green-600" />;
      case 'acceso_rechazado':
        return <XCircle size={20} className="text-red-600" />;
      case 'mantenimiento_validado':
        return <CheckCircle2 size={20} className="text-green-600" />;
      case 'mantenimiento_rechazado':
        return <XCircle size={20} className="text-red-600" />;
      case 'solicitud_acceso':
        return <User size={20} className="text-indigo-600" />;
      default:
        return <Bell size={20} className="text-slate-600" />;
    }
  };

  const getNotificationBgColor = (type: Notification['type'], read: boolean) => {
    if (read) return 'bg-white';

    switch (type) {
      case 'acceso_concedido':
      case 'mantenimiento_validado':
        return 'bg-green-50';
      case 'acceso_rechazado':
      case 'mantenimiento_rechazado':
        return 'bg-red-50';
      case 'solicitud_acceso':
        return 'bg-indigo-50';
      default:
        return 'bg-slate-50';
    }
  };

  const getNotificationBorderColor = (type: Notification['type'], read: boolean) => {
    if (read) return 'border-slate-100';

    switch (type) {
      case 'acceso_concedido':
      case 'mantenimiento_validado':
        return 'border-green-200';
      case 'acceso_rechazado':
      case 'mantenimiento_rechazado':
        return 'border-red-200';
      case 'solicitud_acceso':
        return 'border-indigo-200';
      default:
        return 'border-slate-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Hace un momento';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    if (diffDays < 7) return `Hace ${diffDays}d`;
    return date.toLocaleDateString('es-PE');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <MobileHeader onBack={onBack} />

      <div className="relative z-10 px-6 pt-8 pb-6">
        <h1 className="text-slate-800 text-[28px] font-bold mb-2">
          Notificaciones
        </h1>
        <p className="text-slate-500 text-[14px] mb-6">
          {notifications.filter(n => !n.read).length} notificaciones sin leer
        </p>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              onClick={() => {
                if (!notification.read) {
                  onMarkAsRead(notification.id);
                }
                onNotificationClick(notification);
              }}
              className={`w-full ${getNotificationBgColor(notification.type, notification.read)} rounded-2xl border-2 ${getNotificationBorderColor(notification.type, notification.read)} p-4 text-left hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex gap-3 items-start">
                <div className={`w-10 h-10 ${notification.read ? 'bg-slate-100' : 'bg-white'} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  {getNotificationIcon(notification.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`text-[15px] font-bold ${notification.read ? 'text-slate-700' : 'text-slate-900'}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0 mt-1.5"></div>
                    )}
                  </div>
                  <p className={`text-[14px] ${notification.read ? 'text-slate-500' : 'text-slate-700'} mb-2`}>
                    {notification.message}
                  </p>
                  <p className="text-[12px] text-slate-400">
                    {formatDate(notification.createdAt)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
            <Bell size={48} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 text-[15px]">
              No tienes notificaciones
            </p>
            <p className="text-slate-400 text-[13px] mt-1">
              Las notificaciones aparecerán aquí
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
