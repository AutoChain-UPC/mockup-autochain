import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import Input from '../components/Input';
import { User } from '../types';
import imgProfile from '../../imports/Profile/55d08274861b075383d46df9693c8aa916986e6a.png';

interface ProfileScreenProps {
  user: User;
  onBack: () => void;
  onViewVehicles: () => void;
  onOpenNotifications: () => void;
  unreadNotifications: number;
}

export default function ProfileScreen({
  user,
  onBack,
  onViewVehicles,
  onOpenNotifications,
  unreadNotifications
}: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader
        onBack={onBack}
        showMenu
        onNotifications={onOpenNotifications}
        unreadNotifications={unreadNotifications}
      />

      <div className="relative z-10">
        <div className="bg-white mx-4 mt-6 rounded-2xl shadow-[0px_32px_64px_0px_rgba(17,17,17,0.08)] p-6">
          <div className="flex justify-center mb-6">
            <img
              src={imgProfile}
              alt="Profile"
              className="w-[124px] h-[124px] rounded-full object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            />
          </div>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder={user.nombre}
              value={user.nombre}
              onChange={() => {}}
              label="Nombres"
            />

            <Input
              type="text"
              placeholder={user.apellidos}
              value={user.apellidos}
              onChange={() => {}}
              label="Apellidos"
            />

            <Input
              type="date"
              placeholder={user.fechaNacimiento}
              value={user.fechaNacimiento}
              onChange={() => {}}
              label="Nacimiento"
            />

            <Input
              type="email"
              placeholder={user.email}
              value={user.email}
              onChange={() => {}}
              label="Email"
            />
          </div>

          <div className="mt-6 space-y-3">
            <Button>Editar</Button>
            <Button onClick={onViewVehicles}>
              Vehículos Registrados
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
