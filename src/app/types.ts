export interface User {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  fechaNacimiento: string;
}

export interface Vehicle {
  id: string;
  marca: string;
  modelo: string;
  año: string;
  placa: string;
  vin: string;
  color?: string;
  version?: string;
  motor?: string;
  cilindrada?: string;
  imagen: string;
  visible: boolean;
  ownerId: string;
}

export interface VehicleAccess {
  id: string;
  vehicleId: string;
  requestedById: string;
  grantedById: string;
  status: 'pendiente' | 'concedido' | 'rechazado';
  requestedAt: string;
  grantedAt?: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'acceso_concedido' | 'acceso_rechazado' | 'mantenimiento_validado' | 'mantenimiento_rechazado' | 'solicitud_acceso';
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  relatedId?: string;
}

export interface MaintenanceType {
  id: string;
  name: string;
  description: string;
}

export interface ActionType {
  id: string;
  name: string;
}

export interface Component {
  id: string;
  name: string;
}

export interface MaintenanceDetail {
  id: string;
  actionTypeId: string;
  actionTypeName?: string;
  previousState: string;
  newState: string;
  cost: number;
  notes: string;
  componentId?: string;
  componentName?: string;
}

export interface Maintenance {
  id: string;
  vehicleId: string;
  userId: string;
  date: string;
  description: string;
  mileage: number;
  status: 'validado' | 'pendiente' | 'rechazado';
  typeId: string;
  typeName?: string;
  validatedAt?: string;
  validatedBy?: string;
  rejectedAt?: string;
  rejectedBy?: string;
  rejectionReason?: string;
  details: MaintenanceDetail[];
  taller?: string;
  imagen?: string;
  factura?: string;
  blockchainHash?: string;
}

export type Screen =
  | 'login'
  | 'register'
  | 'public-vehicles'
  | 'public-vehicle-detail'
  | 'vehicles'
  | 'vehicle-detail'
  | 'register-vehicle'
  | 'granted-vehicles'
  | 'granted-vehicle-detail'
  | 'maintenances'
  | 'maintenance-detail'
  | 'blockchain-cert'
  | 'profile'
  | 'notifications'
  | 'register-maintenance-ai'
  | 'register-maintenance'
  | 'register-maintenance-details'
  | 'register-maintenance-evidence'
  | 'become-validator'
  | 'register-validator'
  | 'validator-approvals'
  | 'approval-detail'
  | 'validator-history';
