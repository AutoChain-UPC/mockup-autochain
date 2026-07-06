import { useState, useRef, useEffect } from 'react';
import { ToastProvider, useToast } from './components/Toast';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PublicVehiclesScreen from './screens/PublicVehiclesScreen';
import PublicVehicleDetailScreen from './screens/PublicVehicleDetailScreen';
import VehiclesListScreen from './screens/VehiclesListScreen';
import RegisterVehicleScreen from './screens/RegisterVehicleScreen';
import VehicleDetailScreen from './screens/VehicleDetailScreen';
import GrantedVehiclesScreen from './screens/GrantedVehiclesScreen';
import MaintenancesListScreen from './screens/MaintenancesListScreen';
import MaintenanceDetailScreen from './screens/MaintenanceDetailScreen';
import BlockchainCertScreen from './screens/BlockchainCertScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import RegisterMaintenanceScreen from './screens/RegisterMaintenanceScreen';
import RegisterMaintenanceDetailsScreen from './screens/RegisterMaintenanceDetailsScreen';
import RegisterMaintenanceEvidenceScreen from './screens/RegisterMaintenanceEvidenceScreen';
import RegisterMaintenanceAiScreen from './screens/RegisterMaintenanceAiScreen';
import BecomeValidatorScreen from './screens/BecomeValidatorScreen';
import RegisterValidatorScreen from './screens/RegisterValidatorScreen';
import ValidatorApprovalsScreen from './screens/ValidatorApprovalsScreen';
import ValidatorHistoryScreen from './screens/ValidatorHistoryScreen';
import ApprovalDetailScreen from './screens/ApprovalDetailScreen';
import SideMenu from './components/SideMenu';
import { Screen, User, Vehicle, Maintenance, VehicleAccess, Notification } from './types';
import imgPorsche from '../imports/ListadoDeVehiculos-1/49848e7144325e4e6748085f841db6887a6aebdf.png';
import imgFerrari from '../imports/ListadoDeVehiculos-1/44f1208e56e94e2a359ce248f3b97dc6746720f5.png';

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

function AppContent() {
  const { showToast } = useToast();
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
  }, [currentScreen]);

  // User state
  const [user, setUser] = useState<User>({
    id: '1',
    nombre: 'Hans Eduardo',
    apellidos: 'Retes Rimac',
    email: 'hretes@mail.com',
    fechaNacimiento: '2000-01-28'
  });

  // Vehicles state
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: '1',
      marca: 'Porsche',
      modelo: '911',
      año: '2015',
      placa: 'YLZ-001',
      vin: 'KPS123456789',
      color: 'Plata metálico',
      version: 'Coupé',
      motor: 'KPS123456789',
      cilindrada: '2,981 cc',
      imagen: imgPorsche,
      visible: true,
      ownerId: '1'
    },
    {
      id: '2',
      marca: 'Ferrari',
      modelo: '250 GTO',
      año: '1962',
      placa: 'YLZ-002',
      vin: 'FER987654321',
      imagen: imgFerrari,
      visible: true,
      ownerId: '1'
    },
    {
      id: '3',
      marca: 'Tesla',
      modelo: 'Model S',
      año: '2023',
      placa: 'ABC-123',
      vin: 'TES123456789',
      color: 'Rojo',
      imagen: imgPorsche,
      visible: true,
      ownerId: '2'
    },
    {
      id: '4',
      marca: 'BMW',
      modelo: 'M3 Competition',
      año: '2022',
      placa: 'XKR-874',
      vin: 'BMW874XKR20220M3',
      color: 'Azul Portimao',
      version: 'Competition',
      motor: 'BMW874XKR20220M3',
      cilindrada: '2,993 cc',
      imagen: imgFerrari,
      visible: true,
      ownerId: '3'
    }
  ]);

  // Vehicle Access state
  const [vehicleAccesses, setVehicleAccesses] = useState<VehicleAccess[]>([
    {
      id: '1',
      vehicleId: '3', // Tesla de otro usuario
      requestedById: '1', // El usuario actual
      grantedById: '2',
      status: 'concedido',
      requestedAt: '2024-04-01T10:00:00Z',
      grantedAt: '2024-04-01T15:00:00Z'
    }
  ]);

  // Notifications state
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      userId: '1',
      type: 'acceso_concedido',
      title: 'Acceso Concedido',
      message: 'Se te ha concedido acceso completo al Tesla Model S',
      createdAt: '2024-04-01T15:00:00Z',
      read: false,
      relatedId: '3'
    }
  ]);

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Maintenances state
  const [maintenances, setMaintenances] = useState<Maintenance[]>([
    {
      id: '1',
      vehicleId: '1',
      userId: '1',
      date: '2024-04-15',
      description: 'Mantenimiento preventivo programado a los 26,540 km',
      mileage: 26540,
      status: 'pendiente',
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      details: [
        {
          id: '1',
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: '15W-40, 5,000 km de uso',
          newState: '5W-30 sintético, nuevo',
          cost: 320.00,
          notes: 'Se utilizó filtro original de alto rendimiento. Revisión de niveles completada',
          componentId: '1',
          componentName: 'Aceite de motor'
        },
        {
          id: '2',
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: 'Filtro sucio, 10,000 km',
          newState: 'Filtro original nuevo',
          cost: 70.00,
          notes: 'Se cambiaron los filtros primarios y secundarios',
          componentId: '3',
          componentName: 'Filtro de aire'
        }
      ],
      taller: 'AutoCare',
      imagen: 'maintenance1.jpg',
      factura: 'Factura_REP_09.pdf'
    },
    {
      id: '2',
      vehicleId: '1',
      userId: '1',
      date: '2023-10-24',
      description: 'Mantenimiento preventivo regular',
      mileage: 21500,
      status: 'validado',
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      details: [
        {
          id: '3',
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: '10W-40, 5,000 km',
          newState: '5W-30 sintético premium',
          cost: 250.00,
          notes: 'Aceite sintético premium. Filtro original instalado',
          componentId: '1',
          componentName: 'Aceite de motor'
        },
        {
          id: '4',
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: 'Filtro sucio',
          newState: 'Filtro original de fábrica',
          cost: 60.00,
          notes: 'Filtros originales de fábrica',
          componentId: '3',
          componentName: 'Filtro de aire'
        }
      ],
      taller: 'AutoCare',
      blockchainHash: '0x8a4d9c2f7b3e5a1c6d8f9e2b4a7c3d1e5f8a2b4c',
      validatedAt: '2023-10-25',
      validatedBy: '1'
    },
    {
      id: '3',
      vehicleId: '3',
      userId: '2',
      date: '2025-11-10',
      description: 'Actualización de software y revisión del sistema de baterías a los 42,000 km',
      mileage: 42000,
      status: 'validado',
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      details: [
        {
          id: '5',
          actionTypeId: '2',
          actionTypeName: 'Actualización',
          previousState: 'Firmware v11.2.1',
          newState: 'Firmware v12.0.4',
          cost: 0.00,
          notes: 'Actualización OTA completada en taller. Se incluye mejora en eficiencia de carga y nuevas funciones de conducción autónoma.',
          componentId: '5',
          componentName: 'Sistema de software'
        },
        {
          id: '6',
          actionTypeId: '3',
          actionTypeName: 'Revisión',
          previousState: 'Capacidad al 94%',
          newState: 'Capacidad al 94% — sin degradación anormal',
          cost: 180.00,
          notes: 'Se realizó diagnóstico completo del pack de baterías. Estado dentro de parámetros normales para el kilometraje.',
          componentId: '6',
          componentName: 'Pack de baterías'
        }
      ],
      taller: 'Tesla Service Center',
      blockchainHash: '0x3f1e7a2c9b4d6e8f0a2c4e6b8d0f2a4c6e8b0d2f',
      validatedAt: '2025-11-11T09:15:00Z',
      validatedBy: '2',
      imagen: 'tesla_maint1.jpg',
      factura: 'Factura_TSC_112.pdf'
    },
    {
      id: '4',
      vehicleId: '3',
      userId: '2',
      date: '2026-02-20',
      description: 'Revisión de frenos y cambio de líquido de frenos a los 48,500 km',
      mileage: 48500,
      status: 'rechazado',
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      details: [
        {
          id: '7',
          actionTypeId: '3',
          actionTypeName: 'Revisión',
          previousState: 'Pastillas al 40%, disco con marcas leves',
          newState: 'Pastillas al 40% — se recomienda cambio próximo',
          cost: 90.00,
          notes: 'Se revisaron frenos delanteros y traseros. Las pastillas aún tienen vida útil pero se acercan al límite.',
          componentId: '7',
          componentName: 'Sistema de frenos'
        },
        {
          id: '8',
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: 'Líquido DOT 3, 2 años de uso',
          newState: 'Líquido DOT 4 nuevo',
          cost: 55.00,
          notes: 'Cambio de líquido de frenos realizado correctamente.',
          componentId: '8',
          componentName: 'Líquido de frenos'
        }
      ],
      taller: 'SpeedTech Motors',
      rejectedAt: '2026-02-22T14:30:00Z',
      rejectedBy: '2',
      rejectionReason: 'La factura presentada no corresponde al servicio registrado. Se detectaron inconsistencias en los montos cobrados.',
      imagen: 'tesla_maint2.jpg',
      factura: 'Factura_STM_045.pdf'
    },
    {
      id: '5',
      vehicleId: '3',
      userId: '2',
      date: '2026-04-30',
      description: 'Rotación de neumáticos y alineación a los 52,200 km',
      mileage: 52200,
      status: 'pendiente',
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      details: [
        {
          id: '9',
          actionTypeId: '4',
          actionTypeName: 'Rotación',
          previousState: 'Neumáticos delanteros con mayor desgaste',
          newState: 'Neumáticos rotados correctamente',
          cost: 60.00,
          notes: 'Rotación cruzada realizada. Desgaste uniforme esperado tras la rotación.',
          componentId: '9',
          componentName: 'Neumáticos'
        },
        {
          id: '10',
          actionTypeId: '5',
          actionTypeName: 'Calibración',
          previousState: 'Alineación desviada 0.3° al frente derecho',
          newState: 'Alineación dentro de especificaciones de fábrica',
          cost: 80.00,
          notes: 'Alineación de cuatro ruedas completada. Se recomienda revisión cada 10,000 km.',
          componentId: '10',
          componentName: 'Dirección y alineación'
        }
      ],
      taller: 'AutoCare',
      imagen: 'tesla_maint3.jpg',
      factura: 'Factura_AC_287.pdf'
    }
  ]);

  const [selectedMaintenance, setSelectedMaintenance] = useState<Maintenance | null>(null);

  // Track where the maintenances list was opened from (for back navigation)
  const [maintenancesOrigin, setMaintenancesOrigin] = useState<Screen>('vehicle-detail');

  // Track where notifications was opened from (for back navigation)
  const [notificationsOrigin, setNotificationsOrigin] = useState<Screen>('public-vehicles');

  // Track where register-maintenance was started from (for back navigation)
  const [registerMaintenanceOrigin, setRegisterMaintenanceOrigin] = useState<Screen>('vehicle-detail');

  // New maintenance registration state
  const [newMaintenanceData, setNewMaintenanceData] = useState<any>({});
  const [newMaintenanceItems, setNewMaintenanceItems] = useState<any[]>([]);

  // Validator mode state
  const [isValidator, setIsValidator] = useState(false);
  const [isValidatorMode, setIsValidatorMode] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState<any>(null);

  // Navigation handlers
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
    setUser({ ...user, email });
    setCurrentScreen('public-vehicles');
  };

  const handleRegister = (nombre: string, apellidos: string, email: string, fechaNacimiento: string, password: string) => {
    console.log('Register:', { nombre, apellidos, email, fechaNacimiento, password });
    setUser({ id: '1', nombre, apellidos, email, fechaNacimiento });
    setCurrentScreen('public-vehicles');
  };

  const handleRegisterVehicle = (vehicleData: any) => {
    const newVehicle: Vehicle = {
      id: String(vehicles.length + 1),
      ...vehicleData,
      visible: false,
      ownerId: user.id
    };
    setVehicles([...vehicles, newVehicle]);
    setCurrentScreen('vehicles');
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentScreen('vehicle-detail');
  };

  const handleViewMaintenances = (origin: Screen = 'vehicle-detail') => {
    setMaintenancesOrigin(origin);
    setCurrentScreen('maintenances');
  };

  const handleSelectMaintenance = (maintenance: Maintenance) => {
    setSelectedMaintenance(maintenance);
    setCurrentScreen('maintenance-detail');
  };

  const handleDeleteVehicle = () => {
    if (selectedVehicle) {
      setVehicles(vehicles.filter(v => v.id !== selectedVehicle.id));
      setSelectedVehicle(null);
      setCurrentScreen('vehicles');
    }
  };

  const handleToggleVisibility = () => {
    if (selectedVehicle) {
      const updatedVehicles = vehicles.map(v =>
        v.id === selectedVehicle.id ? { ...v, visible: !v.visible } : v
      );
      setVehicles(updatedVehicles);
      setSelectedVehicle({ ...selectedVehicle, visible: !selectedVehicle.visible });

      const newStatus = !selectedVehicle.visible ? 'visible públicamente' : 'privado';
      showToast(`Vehículo marcado como ${newStatus}`);
    }
  };

  const handleLogout = () => {
    setCurrentScreen('login');
    setMenuOpen(false);
  };

  const handleNavigate = (screen: string) => {
    if (screen === 'public-vehicles') setCurrentScreen('public-vehicles');
    if (screen === 'vehicles') setCurrentScreen('vehicles');
    if (screen === 'granted-vehicles') setCurrentScreen('granted-vehicles');
    if (screen === 'profile') setCurrentScreen('profile');
    if (screen === 'notifications') handleOpenNotifications('public-vehicles');
    if (screen === 'validator-approvals') setCurrentScreen('validator-approvals');
    if (screen === 'validator-history') setCurrentScreen('validator-history');
    setMenuOpen(false);
  };

  const handleRequestAccess = (vehicleId: string) => {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;

    // Crear solicitud de acceso
    const newAccess: VehicleAccess = {
      id: String(Date.now()),
      vehicleId,
      requestedById: user.id,
      grantedById: vehicle.ownerId,
      status: 'pendiente',
      requestedAt: new Date().toISOString()
    };

    setVehicleAccesses([...vehicleAccesses, newAccess]);

    // Crear notificación para el propietario
    const notification: Notification = {
      id: String(Date.now()),
      userId: vehicle.ownerId,
      type: 'solicitud_acceso',
      title: 'Nueva solicitud de acceso',
      message: `${user.nombre} ${user.apellidos} solicita acceso a tu ${vehicle.marca} ${vehicle.modelo}`,
      createdAt: new Date().toISOString(),
      read: false,
      relatedId: vehicleId
    };

    setNotifications([...notifications, notification]);
    showToast('Solicitud de acceso enviada correctamente');
    setCurrentScreen('public-vehicles');
  };

  const handleMarkNotificationAsRead = (notificationId: string) => {
    setNotifications(notifications.map(n =>
      n.id === notificationId ? { ...n, read: true } : n
    ));
  };

  const handleNotificationClick = (notification: Notification) => {
    // Navegar según el tipo de notificación
    if (notification.type === 'acceso_concedido') {
      setCurrentScreen('granted-vehicles');
    } else if (notification.type === 'mantenimiento_validado' || notification.type === 'mantenimiento_rechazado') {
      if (notification.relatedId) {
        const maintenance = maintenances.find(m => m.id === notification.relatedId);
        if (maintenance) {
          setSelectedMaintenance(maintenance);
          const vehicle = vehicles.find(v => v.id === maintenance.vehicleId);
          if (vehicle) {
            setSelectedVehicle(vehicle);
            setCurrentScreen('maintenance-detail');
          }
        }
      }
    }
  };

  const handleStartMaintenanceRegistration = (origin: Screen = 'vehicle-detail') => {
    setRegisterMaintenanceOrigin(origin);
    setNewMaintenanceData({});
    setNewMaintenanceItems([]);
    setCurrentScreen('register-maintenance');
  };

  const handleStartMaintenanceRegistrationAi = (origin: Screen = 'vehicle-detail') => {
    setRegisterMaintenanceOrigin(origin);
    setNewMaintenanceData({});
    setNewMaintenanceItems([]);
    setCurrentScreen('register-maintenance-ai');
  };

  const handleOpenNotifications = (origin: Screen) => {
    setNotificationsOrigin(origin);
    setCurrentScreen('notifications');
  };

  const handleMaintenanceDataNext = (data: any) => {
    setNewMaintenanceData(data);
    setCurrentScreen('register-maintenance-details');
  };

  const handleMaintenanceDetailsNext = (items: any[]) => {
    setNewMaintenanceItems(items);
    setCurrentScreen('register-maintenance-evidence');
  };

  const handleMaintenanceFinish = (draft: any) => {
    const newMaintenance: Maintenance = {
      id: String(Date.now()),
      vehicleId: selectedVehicle?.id || '1',
      userId: user.id,
      date: draft.date,
      description: draft.description,
      mileage: draft.mileage,
      status: 'pendiente',
      typeId: draft.typeId,
      typeName: draft.typeName,
      details: draft.details.map((item: any, index: number) => ({
        id: String(index + 1),
        actionTypeId: item.actionTypeId,
        actionTypeName: item.actionTypeName,
        previousState: item.previousState || '',
        newState: item.newState,
        cost: parseFloat(item.cost),
        notes: item.notes,
        componentId: item.componentId,
        componentName: item.componentName
      })),
      taller: draft.taller,
      imagen: draft.photos?.length > 0 ? draft.photos[0] : undefined,
      factura: draft.documents?.length > 0 ? draft.documents[0] : undefined
    };

    // Agregar al inicio del array (como cola)
    setMaintenances([newMaintenance, ...maintenances]);

    // En una app real, aquí se guardaría en la base de datos
    console.log('Nuevo mantenimiento:', newMaintenance);

    showToast('¡Mantenimiento registrado exitosamente!');
    setCurrentScreen('maintenances');
  };

  const handleValidatorMode = () => {
    if (!isValidator) {
      // Primera vez - mostrar pantalla de bienvenida
      setCurrentScreen('become-validator');
    } else if (isValidatorMode) {
      // Ya está en modo validador → cambiar a modo propietario
      setIsValidatorMode(false);
      setCurrentScreen('public-vehicles');
    } else {
      // Está en modo propietario → cambiar a modo validador
      setIsValidatorMode(true);
      setCurrentScreen('validator-approvals');
    }
  };

  const handleBecomeValidator = () => {
    setCurrentScreen('register-validator');
  };

  const handleRegisterValidator = (data: any) => {
    console.log('Registro de taller:', data);
    setIsValidator(true);
    setIsValidatorMode(true);
    showToast('¡Taller registrado exitosamente! Ahora eres un validador de AutoChain.');
    setCurrentScreen('validator-approvals');
  };

  const handleSelectApproval = (approval: any) => {
    setSelectedApproval(approval);
    setCurrentScreen('approval-detail');
  };

  const handleApproveMaintenance = (maintenanceId?: string) => {
    const idToApprove = maintenanceId || selectedApproval?.id;
    if (idToApprove) {
      const maintenance = maintenances.find(m => m.id === idToApprove);
      if (!maintenance) return;

      const vehicle = vehicles.find(v => v.id === maintenance.vehicleId);

      // Actualizar el mantenimiento correspondiente a aprobado
      setMaintenances(maintenances.map(m =>
        m.id === idToApprove
          ? {
              ...m,
              status: 'validado' as const,
              validatedAt: new Date().toISOString(),
              validatedBy: user.id,
              blockchainHash: '0x' + Math.random().toString(16).substring(2, 42)
            }
          : m
      ));

      // Crear notificación para el propietario
      const notification: Notification = {
        id: String(Date.now()),
        userId: maintenance.userId,
        type: 'mantenimiento_validado',
        title: 'Mantenimiento Aprobado',
        message: `Tu ${maintenance.typeName} del ${vehicle?.marca} ${vehicle?.modelo} ha sido validado y registrado en blockchain`,
        createdAt: new Date().toISOString(),
        read: false,
        relatedId: idToApprove
      };

      setNotifications([notification, ...notifications]);
      showToast('¡Mantenimiento aprobado y registrado en blockchain!');
    }
  };

  const handleRejectMaintenance = (maintenanceIdOrReason: string, reason?: string) => {
    // Si se pasa un segundo parámetro, el primero es el ID
    const idToReject = reason ? maintenanceIdOrReason : selectedApproval?.id;
    const rejectionReason = reason || maintenanceIdOrReason;

    if (idToReject) {
      const maintenance = maintenances.find(m => m.id === idToReject);
      if (!maintenance) return;

      const vehicle = vehicles.find(v => v.id === maintenance.vehicleId);

      // Actualizar el mantenimiento correspondiente a rechazado
      setMaintenances(maintenances.map(m =>
        m.id === idToReject
          ? {
              ...m,
              status: 'rechazado' as const,
              rejectedAt: new Date().toISOString(),
              rejectedBy: user.id,
              rejectionReason: rejectionReason
            }
          : m
      ));

      // Crear notificación para el propietario
      const notification: Notification = {
        id: String(Date.now()) + '1',
        userId: maintenance.userId,
        type: 'mantenimiento_rechazado',
        title: 'Mantenimiento Rechazado',
        message: `Tu ${maintenance.typeName} del ${vehicle?.marca} ${vehicle?.modelo} fue rechazado. Motivo: ${rejectionReason}`,
        createdAt: new Date().toISOString(),
        read: false,
        relatedId: idToReject
      };

      setNotifications([notification, ...notifications]);
      showToast('Mantenimiento rechazado correctamente', 'error');
    }
  };

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="w-full max-w-[414px] h-full relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <SideMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          onValidatorMode={handleValidatorMode}
          isValidator={isValidatorMode}
        />

        <div className="h-full overflow-y-auto" ref={scrollContainerRef}>

          {currentScreen === 'login' && (
            <LoginScreen
              onLogin={handleLogin}
              onSwitchToRegister={() => setCurrentScreen('register')}
            />
          )}

          {currentScreen === 'register' && (
            <RegisterScreen
              onRegister={handleRegister}
              onSwitchToLogin={() => setCurrentScreen('login')}
            />
          )}

          {currentScreen === 'public-vehicles' && (
            <PublicVehiclesScreen
              vehicles={vehicles}
              onSelectVehicle={(vehicle) => {
                setSelectedVehicle(vehicle);
                setCurrentScreen('public-vehicle-detail');
              }}
              onOpenMenu={() => setMenuOpen(true)}
              onOpenNotifications={() => handleOpenNotifications('public-vehicles')}
              unreadNotifications={notifications.filter(n => !n.read).length}
              userId={user.id}
              vehicleAccesses={vehicleAccesses}
              onRequestAccess={handleRequestAccess}
            />
          )}

          {currentScreen === 'public-vehicle-detail' && selectedVehicle && (
            <PublicVehicleDetailScreen
              vehicle={selectedVehicle}
              onBack={() => setCurrentScreen('public-vehicles')}
              onRequestAccess={() => handleRequestAccess(selectedVehicle.id)}
              hasRequestedAccess={vehicleAccesses.some(
                va => va.vehicleId === selectedVehicle.id && va.requestedById === user.id && va.status === 'pendiente'
              )}
              hasAccess={
                selectedVehicle.ownerId === user.id ||
                vehicleAccesses.some(
                  va => va.vehicleId === selectedVehicle.id && va.requestedById === user.id && va.status === 'concedido'
                )
              }
              onViewMaintenances={() => handleViewMaintenances('public-vehicle-detail')}
            />
          )}

          {currentScreen === 'granted-vehicles' && (
            <GrantedVehiclesScreen
              vehicles={vehicles.filter(v =>
                vehicleAccesses.some(
                  va => va.vehicleId === v.id && va.requestedById === user.id && va.status === 'concedido'
                )
              )}
              onSelectVehicle={(vehicle) => {
                setSelectedVehicle(vehicle);
                setCurrentScreen('granted-vehicle-detail');
              }}
              onBack={() => setCurrentScreen('public-vehicles')}
              onOpenNotifications={() => handleOpenNotifications('granted-vehicles')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'granted-vehicle-detail' && selectedVehicle && (
            <VehicleDetailScreen
              vehicle={selectedVehicle}
              onBack={() => setCurrentScreen('granted-vehicles')}
              onViewMaintenances={() => handleViewMaintenances('granted-vehicle-detail')}
              onRegisterMaintenance={handleStartMaintenanceRegistration}
              onDeleteVehicle={handleDeleteVehicle}
              isOwner={false}
            />
          )}

          {currentScreen === 'notifications' && (
            <NotificationsScreen
              notifications={notifications.filter(n => n.userId === user.id)}
              onBack={() => setCurrentScreen(notificationsOrigin)}
              onMarkAsRead={handleMarkNotificationAsRead}
              onNotificationClick={handleNotificationClick}
            />
          )}

          {currentScreen === 'vehicles' && (
            <VehiclesListScreen
              vehicles={vehicles.filter(v => v.ownerId === user.id)}
              onSelectVehicle={handleSelectVehicle}
              onRegisterVehicle={() => setCurrentScreen('register-vehicle')}
              onOpenMenu={() => setMenuOpen(true)}
              onOpenNotifications={() => handleOpenNotifications('vehicles')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'register-vehicle' && (
            <RegisterVehicleScreen
              onBack={() => setCurrentScreen('vehicles')}
              onRegister={handleRegisterVehicle}
            />
          )}

          {currentScreen === 'vehicle-detail' && selectedVehicle && (
            <VehicleDetailScreen
              vehicle={selectedVehicle}
              onBack={() => setCurrentScreen('vehicles')}
              onViewMaintenances={() => handleViewMaintenances('vehicle-detail')}
              onRegisterMaintenance={() => handleStartMaintenanceRegistration('vehicle-detail')}
              onDeleteVehicle={handleDeleteVehicle}
              onToggleVisibility={handleToggleVisibility}
              isOwner={true}
            />
          )}

          {currentScreen === 'maintenances' && (
            <MaintenancesListScreen
              maintenances={maintenances.filter(m => m.vehicleId === selectedVehicle?.id)}
              onBack={() => setCurrentScreen(maintenancesOrigin)}
              onSelectMaintenance={handleSelectMaintenance}
              onRegisterMaintenance={() => handleStartMaintenanceRegistration('maintenances')}
              onRegisterMaintenanceAi={() => handleStartMaintenanceRegistrationAi('maintenances')}
              isOwner={selectedVehicle?.ownerId === user.id}
            />
          )}

          {currentScreen === 'register-maintenance' && (
            <RegisterMaintenanceScreen
              onBack={() => setCurrentScreen(registerMaintenanceOrigin)}
              onNext={handleMaintenanceDataNext}
              vehicleImage={selectedVehicle?.imagen}
            />
          )}

          {currentScreen === 'register-maintenance-ai' && (
            <RegisterMaintenanceAiScreen
              onBack={() => setCurrentScreen(registerMaintenanceOrigin)}
              onFinish={handleMaintenanceFinish}
              vehicleImage={selectedVehicle?.imagen}
            />
          )}

          {currentScreen === 'register-maintenance-details' && (
            <RegisterMaintenanceDetailsScreen
              onBack={() => setCurrentScreen('register-maintenance')}
              onNext={handleMaintenanceDetailsNext}
            />
          )}

          {currentScreen === 'register-maintenance-evidence' && (
            <RegisterMaintenanceEvidenceScreen
              onBack={() => setCurrentScreen('register-maintenance-details')}
              onFinish={handleMaintenanceFinish}
            />
          )}

          {currentScreen === 'maintenance-detail' && selectedMaintenance && (
            <MaintenanceDetailScreen
              maintenance={selectedMaintenance}
              onBack={() => setCurrentScreen('maintenances')}
              onViewBlockchain={() => setCurrentScreen('blockchain-cert')}
            />
          )}

          {currentScreen === 'blockchain-cert' && (
            <BlockchainCertScreen
              onBack={() => setCurrentScreen('maintenance-detail')}
              maintenance={selectedMaintenance}
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen
              user={user}
              onBack={() => setCurrentScreen('public-vehicles')}
              onViewVehicles={() => setCurrentScreen('vehicles')}
              onOpenNotifications={() => handleOpenNotifications('profile')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'become-validator' && (
            <BecomeValidatorScreen
              onBack={() => setCurrentScreen('public-vehicles')}
              onRegister={handleBecomeValidator}
            />
          )}

          {currentScreen === 'register-validator' && (
            <RegisterValidatorScreen
              onBack={() => setCurrentScreen('become-validator')}
              onRegister={handleRegisterValidator}
            />
          )}

          {currentScreen === 'validator-approvals' && (
            <ValidatorApprovalsScreen
              onOpenMenu={() => setMenuOpen(true)}
              onSelectApproval={handleSelectApproval}
              maintenances={maintenances}
              vehicles={vehicles}
              onOpenNotifications={() => handleOpenNotifications('validator-approvals')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'validator-history' && (
            <ValidatorHistoryScreen
              onOpenMenu={() => setMenuOpen(true)}
              onSelectApproval={handleSelectApproval}
              maintenances={maintenances}
              vehicles={vehicles}
              onOpenNotifications={() => handleOpenNotifications('validator-history')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'approval-detail' && selectedApproval && (
            <ApprovalDetailScreen
              approval={selectedApproval}
              onBack={() => setCurrentScreen('validator-approvals')}
              onApprove={() => {
                handleApproveMaintenance();
                setCurrentScreen('validator-approvals');
              }}
              onReject={(reason) => {
                handleRejectMaintenance(reason);
                setCurrentScreen('validator-approvals');
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}