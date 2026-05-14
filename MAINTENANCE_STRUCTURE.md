# Estructura de Mantenimientos - AutoChain

## Modelos de Datos

### MaintenanceType
Tipos de mantenimiento disponibles en el sistema.

```typescript
interface MaintenanceType {
  id: string;
  name: string;        // "Mantenimiento Menor", "Mayor", "Correctivo"
  description: string;
}
```

### ActionType
Tipos de acciones que se pueden realizar en un mantenimiento.

```typescript
interface ActionType {
  id: string;
  name: string;  // "Cambio", "Reparación", "Inspección", "Limpieza", "Ajuste"
}
```

### Component
Componentes del vehículo que pueden ser afectados.

```typescript
interface Component {
  id: string;
  name: string;  // "Aceite de motor", "Filtro de aire", "Bujías", etc.
}
```

### Maintenance (Registro Principal)
El registro principal del mantenimiento.

```typescript
interface Maintenance {
  id: string;
  vehicleId: string;        // FK a Vehicle
  userId: string;           // FK a User (propietario)
  date: string;             // Fecha del mantenimiento
  description: string;      // Descripción general del mantenimiento
  mileage: number;          // Kilometraje en el momento del servicio
  status: 'validado' | 'pendiente';
  typeId: string;           // FK a MaintenanceType
  typeName?: string;        // Nombre del tipo (desnormalizado)
  validatedAt?: string;     // Timestamp de validación
  validatedBy?: string;     // FK a User (validador/taller)
  details: MaintenanceDetail[];  // Array de detalles/acciones
  taller?: string;          // Nombre del taller validador
  imagen?: string;          // Foto de evidencia
  factura?: string;         // Documento de factura
  blockchainHash?: string;  // Hash de blockchain (cuando está validado)
}
```

### MaintenanceDetail (Detalles de Acciones)
Cada acción específica realizada en el mantenimiento.

```typescript
interface MaintenanceDetail {
  id: string;
  actionTypeId: string;     // FK a ActionType
  actionTypeName?: string;  // Nombre del tipo de acción (desnormalizado)
  previousState: string;    // Estado previo del componente
  newState: string;         // Estado nuevo después de la acción
  cost: number;             // Costo de esta acción específica
  notes: string;            // Notas técnicas de la acción
  componentId?: string;     // FK a Component (opcional)
  componentName?: string;   // Nombre del componente (desnormalizado)
}
```

## Flujo de Registro de Mantenimiento

### 1. RegisterMaintenanceScreen
Captura la información general del mantenimiento:
- Fecha del servicio
- Kilometraje actual
- Tipo de mantenimiento (Menor/Mayor/Correctivo)
- Descripción general
- Taller validador

**Datos enviados a `onNext`:**
```javascript
{
  fecha: string,           // "2024-04-15"
  kilometraje: number,     // 26540
  tipoServicio: string,    // "1" (id del tipo)
  descripcion: string,     // "Mantenimiento preventivo programado..."
  taller: string          // "AutoCare"
}
```

### 2. RegisterMaintenanceDetailsScreen
Captura las acciones específicas realizadas:
- Cada acción con su tipo
- Componente afectado (opcional)
- Estado previo y nuevo
- Costo individual
- Notas técnicas

**Datos enviados a `onNext`:**
```javascript
[
  {
    id: string,
    actionTypeId: string,    // "1" (Cambio)
    actionTypeName: string,  // "Cambio"
    previousState: string,   // "15W-40, 5,000 km de uso"
    newState: string,        // "5W-30 sintético, nuevo"
    cost: string,            // "320.00"
    notes: string,           // "Se utilizó filtro original..."
    componentId: string,     // "1"
    componentName: string    // "Aceite de motor"
  },
  ...
]
```

### 3. RegisterMaintenanceEvidenceScreen
Captura la evidencia documental:
- Fotografías del trabajo realizado
- Documentos (facturas, órdenes de trabajo)

**Datos enviados a `onFinish`:**
```javascript
{
  photos: string[],      // Array de rutas de imágenes
  documents: string[]    // Array de rutas de documentos
}
```

## Visualización de Mantenimientos

### MaintenancesListScreen
Muestra un resumen de cada mantenimiento:
- Fecha
- Tipo de mantenimiento (typeName)
- Estado (VALIDADO/PENDIENTE)
- Primeras 2 acciones (details[0-1])
- Taller validador con icono de estado

### MaintenanceDetailScreen
Muestra el detalle completo:
1. **Información General**: fecha, kilometraje, tipo, descripción, taller, costo total
2. **Acciones Realizadas**: listado de cada MaintenanceDetail con:
   - Tipo de acción + componente
   - Estado previo → Estado nuevo
   - Costo individual
   - Notas técnicas
3. **Evidencia**: fotos y documentos
4. **Blockchain**: botón para ver información en blockchain (si está validado)

## Ejemplo Completo

```javascript
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
      notes: 'Se utilizó filtro original de alto rendimiento',
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
}
```

## Notas de Implementación

- Los tipos de acción y componentes actualmente están mockeados en los componentes
- En producción, estos deberían venir de la API
- La desnormalización (typeName, actionTypeName, componentName) mejora el rendimiento de lectura
- El costo total se calcula sumando todos los `details[].cost`
