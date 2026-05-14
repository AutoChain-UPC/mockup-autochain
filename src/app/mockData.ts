import { User, Vehicle, Maintenance } from './types';
import imgPorsche from '../imports/ListadoDeVehiculos-1/49848e7144325e4e6748085f841db6887a6aebdf.png';
import imgFerrari from '../imports/ListadoDeVehiculos-1/44f1208e56e94e2a359ce248f3b97dc6746720f5.png';

export const mockUser: User = {
  id: '1',
  nombre: 'Hans Eduardo',
  apellidos: 'Retes Rimac',
  email: 'hretes@mail.com',
  fechaNacimiento: '2000-01-28'
};

export const mockVehicles: Vehicle[] = [
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
    imagen: imgPorsche
  },
  {
    id: '2',
    marca: 'Ferrari',
    modelo: '250 GTO',
    año: '1962',
    placa: 'YLZ-002',
    vin: 'FER987654321',
    color: 'Rojo Ferrari',
    version: 'GT',
    motor: 'FER987654321',
    cilindrada: '2,953 cc',
    imagen: imgFerrari
  }
];

export const mockMaintenances: Maintenance[] = [
  {
    id: '1',
    vehicleId: '1',
    fecha: '2024-04-15',
    estado: 'pendiente',
    servicios: [
      {
        descripcion: 'Cambio de aceite sintético',
        precio: 320.00,
        notas: 'Se utilizó filtro original de alto rendimiento. Revisión de niveles completada'
      },
      {
        descripcion: 'Cambio de filtros de aire',
        precio: 70.00,
        notas: 'Se utilizó filtro de aire original. Se cambiaron los filtros primarios y secundarios'
      }
    ],
    imagen: 'photo.jpg',
    factura: 'Factura_REP_09.pdf'
  },
  {
    id: '2',
    vehicleId: '1',
    fecha: '2023-10-24',
    estado: 'validado',
    taller: 'AutoCare',
    servicios: [
      {
        descripcion: 'Cambio de aceite',
        precio: 280.00,
        notas: 'Aceite sintético 5W-30. Filtro original Porsche'
      },
      {
        descripcion: 'Cambio de filtros de aire',
        precio: 65.00,
        notas: 'Filtros originales instalados'
      }
    ],
    blockchainHash: '0x8a4d9c2f7b3e5a1c6d8f9e2b4a7c3d1e5f8a2b4c',
    imagen: 'photo.jpg',
    factura: 'Factura_REP_09.pdf'
  }
];
