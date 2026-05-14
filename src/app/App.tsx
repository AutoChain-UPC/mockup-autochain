import { useState } from 'react';
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
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [menuOpen, setMenuOpen] = useState(false);

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
    }
  ]);

  const [selectedMaintenance, setSelectedMaintenance] = useState<Maintenance | null>(null);

  // New maintenance registration state
  const [newMaintenanceData, setNewMaintenanceData] = useState<any>({});
  const [newMaintenanceItems, setNewMaintenanceItems] = useState<any[]>([]);

  // Validator mode state
  const [isValidator, setIsValidator] = useState(false);
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

  const handleViewMaintenances = () => {
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
      alert(`Vehículo marcado como ${newStatus}`);
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
    if (screen === 'notifications') setCurrentScreen('notifications');
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

    setNotifications([notification, ...notifications]);
    alert('Solicitud de acceso enviada correctamente');
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

  const handleStartMaintenanceRegistration = () => {
    setNewMaintenanceData({});
    setNewMaintenanceItems([]);
    setCurrentScreen('register-maintenance');
  };

  const handleMaintenanceDataNext = (data: any) => {
    setNewMaintenanceData(data);
    setCurrentScreen('register-maintenance-details');
  };

  const handleMaintenanceDetailsNext = (items: any[]) => {
    setNewMaintenanceItems(items);
    setCurrentScreen('register-maintenance-evidence');
  };

  const handleMaintenanceFinish = (evidence: any) => {
    // Aquí se crearía el nuevo mantenimiento con todos los datos
    const newMaintenance: Maintenance = {
      id: String(Date.now()),
      vehicleId: selectedVehicle?.id || '1',
      userId: user.id,
      date: newMaintenanceData.fecha,
      description: newMaintenanceData.descripcion,
      mileage: newMaintenanceData.kilometraje,
      status: 'pendiente',
      typeId: newMaintenanceData.tipoServicio,
      typeName: ['Mantenimiento Menor', 'Mantenimiento Mayor', 'Mantenimiento Correctivo'][parseInt(newMaintenanceData.tipoServicio) - 1],
      details: newMaintenanceItems.map((item, index) => ({
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
      taller: newMaintenanceData.taller,
      imagen: evidence.photos.length > 0 ? evidence.photos[0] : undefined,
      factura: evidence.documents.length > 0 ? evidence.documents[0] : undefined
    };

    // Agregar al inicio del array (como cola)
    setMaintenances([newMaintenance, ...maintenances]);

    // En una app real, aquí se guardaría en la base de datos
    console.log('Nuevo mantenimiento:', newMaintenance);

    alert('¡Mantenimiento registrado exitosamente!');
    setCurrentScreen('maintenances');
  };

  const handleValidatorMode = () => {
    if (!isValidator) {
      // Primera vez - mostrar pantalla de bienvenida
      setCurrentScreen('become-validator');
    } else {
      // Ya es validador - alternar entre modo validador y propietario
      // Si está en pantalla de validador, ir a vehículos públicos (modo propietario)
      // Si está en pantalla de propietario, ir a aprobaciones (modo validador)
      if (currentScreen === 'validator-approvals' || currentScreen === 'approval-detail' || currentScreen === 'validator-history') {
        setCurrentScreen('public-vehicles');
      } else {
        setCurrentScreen('validator-approvals');
      }
    }
  };

  const handleBecomeValidator = () => {
    setCurrentScreen('register-validator');
  };

  const handleRegisterValidator = (data: any) => {
    console.log('Registro de taller:', data);
    setIsValidator(true);
    alert('¡Taller registrado exitosamente! Ahora eres un validador de AutoChain.');
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
      alert('¡Mantenimiento aprobado y registrado en blockchain!');
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
      alert('Mantenimiento rechazado correctamente');
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
          isValidator={isValidator}
        />

        <div className="h-full overflow-y-auto">

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
              onOpenNotifications={() => setCurrentScreen('notifications')}
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
              onOpenNotifications={() => setCurrentScreen('notifications')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'granted-vehicle-detail' && selectedVehicle && (
            <VehicleDetailScreen
              vehicle={selectedVehicle}
              onBack={() => setCurrentScreen('granted-vehicles')}
              onViewMaintenances={handleViewMaintenances}
              onRegisterMaintenance={handleStartMaintenanceRegistration}
              onDeleteVehicle={handleDeleteVehicle}
              isOwner={false}
            />
          )}

          {currentScreen === 'notifications' && (
            <NotificationsScreen
              notifications={notifications.filter(n => n.userId === user.id)}
              onBack={() => setCurrentScreen('public-vehicles')}
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
              onOpenNotifications={() => setCurrentScreen('notifications')}
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
              onViewMaintenances={handleViewMaintenances}
              onRegisterMaintenance={handleStartMaintenanceRegistration}
              onDeleteVehicle={handleDeleteVehicle}
              onToggleVisibility={handleToggleVisibility}
              isOwner={true}
            />
          )}

          {currentScreen === 'maintenances' && (
            <MaintenancesListScreen
              maintenances={maintenances.filter(m => m.vehicleId === selectedVehicle?.id)}
              onBack={() => setCurrentScreen('vehicle-detail')}
              onSelectMaintenance={handleSelectMaintenance}
              onRegisterMaintenance={handleStartMaintenanceRegistration}
            />
          )}

          {currentScreen === 'register-maintenance' && (
            <RegisterMaintenanceScreen
              onBack={() => setCurrentScreen('vehicle-detail')}
              onNext={handleMaintenanceDataNext}
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
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen
              user={user}
              onBack={() => setCurrentScreen('public-vehicles')}
              onViewVehicles={() => setCurrentScreen('vehicles')}
              onOpenNotifications={() => setCurrentScreen('notifications')}
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
              onOpenNotifications={() => setCurrentScreen('notifications')}
              unreadNotifications={notifications.filter(n => !n.read).length}
            />
          )}

          {currentScreen === 'validator-history' && (
            <ValidatorHistoryScreen
              onOpenMenu={() => setMenuOpen(true)}
              onSelectApproval={handleSelectApproval}
              maintenances={maintenances}
              vehicles={vehicles}
              onOpenNotifications={() => setCurrentScreen('notifications')}
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