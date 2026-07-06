import { useMemo, useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Camera, FileUp, Sparkles, ScanText, ShieldCheck, AlertTriangle, Clock3, FileText, X } from 'lucide-react';
import imgPhoto from '../../imports/RegistrarEvidenciaMantenimiento/c2c5c2cf38273812076d76246d2531a9bb373a4f.png';
import imgDocument from '../../imports/RegistrarEvidenciaMantenimiento/14119e37a80e6012d48c11b841f9864d3ef68982.png';

interface RegisterMaintenanceAiScreenProps {
  onBack: () => void;
  onFinish: (draft: any) => void;
  vehicleImage?: string;
}

export default function RegisterMaintenanceAiScreen({
  onBack,
  onFinish,
  vehicleImage
}: RegisterMaintenanceAiScreenProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [documents, setDocuments] = useState<string[]>([]);

  const analysis = useMemo(() => {
    if (photos.length === 0 && documents.length === 0) {
      return null;
    }

    return {
      confidence: documents.length > 0 ? 96 : 91,
      sourceLabel: documents.length > 0 ? 'Factura detectada' : 'Imagen del comprobante',
      date: '2024-04-15',
      mileage: 26540,
      typeId: '1',
      typeName: 'Mantenimiento Menor',
      description: 'Mantenimiento preventivo identificado automáticamente desde la evidencia cargada.',
      taller: 'AutoCare',
      status: 'Coincide con una orden de servicio y con el historial del vehículo.',
      details: [
        {
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: '15W-40, 5,000 km de uso',
          newState: '5W-30 sintético, nuevo',
          cost: '320.00',
          notes: 'Extracción simulada desde factura y OCR del documento.',
          componentId: '1',
          componentName: 'Aceite de motor'
        },
        {
          actionTypeId: '1',
          actionTypeName: 'Cambio',
          previousState: 'Filtro sucio, 10,000 km',
          newState: 'Filtro original nuevo',
          cost: '70.00',
          notes: 'El modelo sugiere reemplazo de consumibles asociados.',
          componentId: '3',
          componentName: 'Filtro de aire'
        }
      ]
    };
  }, [documents.length, photos.length]);

  const handleTakePhoto = () => {
    setPhotos((current) => [...current, imgPhoto]);
  };

  const handleUploadDocument = () => {
    setDocuments((current) => [...current, 'Factura_REP_09.pdf']);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, currentIndex) => currentIndex !== index));
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments(documents.filter((_, currentIndex) => currentIndex !== index));
  };

  const handleFinish = () => {
    if (!analysis) return;

    onFinish({
      date: analysis.date,
      mileage: analysis.mileage,
      typeId: analysis.typeId,
      typeName: analysis.typeName,
      description: analysis.description,
      taller: analysis.taller,
      details: analysis.details,
      photos,
      documents
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-4 pt-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[12px] font-semibold mb-3">
            <Sparkles size={14} />
            Registro inteligente con IA
          </div>
          <h1 className="text-slate-800 text-[28px] font-bold leading-[34px] mb-2">
            Sube una foto o documento y la IA crea el mantenimiento
          </h1>
          <p className="text-slate-500 text-[14px] leading-relaxed">
            No necesitas llenar campos manualmente. La evidencia se analiza y se convierte en un registro ficticio listo para demo.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={vehicleImage || imgPhoto}
            alt="Vehículo"
            className="w-[143px] h-[143px] object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleTakePhoto}
            className="bg-white rounded-2xl border-2 border-slate-100 p-4 flex flex-col items-center justify-center hover:border-indigo-200 hover:shadow-md transition-all duration-200"
          >
            <Camera size={34} className="text-indigo-600 mb-2" strokeWidth={2} />
            <span className="text-slate-800 text-[14px] font-semibold">Tomar foto</span>
            <span className="text-slate-500 text-[12px] text-center mt-1">Comprobante o factura</span>
          </button>

          <button
            onClick={handleUploadDocument}
            className="bg-white rounded-2xl border-2 border-slate-100 p-4 flex flex-col items-center justify-center hover:border-indigo-200 hover:shadow-md transition-all duration-200"
          >
            <FileUp size={34} className="text-indigo-600 mb-2" strokeWidth={2} />
            <span className="text-slate-800 text-[14px] font-semibold">Subir archivo</span>
            <span className="text-slate-500 text-[12px] text-center mt-1">PDF, imagen o escaneo</span>
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-slate-700 text-[18px] font-semibold mb-3">Evidencia cargada</h2>
          <div className="grid grid-cols-2 gap-3">
            {photos.map((photo, index) => (
              <div key={`photo-${index}`} className="relative bg-white rounded-2xl border border-slate-200 p-2 shadow-sm">
                <img src={photo} alt={`Foto ${index + 1}`} className="w-full h-[130px] object-cover rounded-xl" />
                <button
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  <X size={14} />
                </button>
                <p className="text-slate-600 text-[12px] mt-2 text-center font-medium">Foto analizada</p>
              </div>
            ))}

            {documents.map((doc, index) => (
              <div key={`doc-${index}`} className="relative bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col items-center justify-center min-h-[176px] text-center">
                <img src={imgDocument} alt="Documento" className="w-[80px] h-[80px] object-cover rounded-xl mb-3" />
                <FileText size={26} className="text-slate-600 mb-2" />
                <p className="text-slate-700 text-[12px] font-medium leading-[16px] px-2">{doc}</p>
                <button
                  onClick={() => handleRemoveDocument(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  <X size={14} />
                </button>
              </div>
            ))}

            {photos.length === 0 && documents.length === 0 && (
              <div className="col-span-2 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center">
                <ScanText size={44} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 text-[14px] font-medium">La IA espera una foto o un documento para comenzar</p>
                <p className="text-slate-400 text-[12px] mt-1">El análisis y el registro se muestran como mockup</p>
              </div>
            )}
          </div>
        </div>

        {analysis && (
          <div className="mb-6">
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 rounded-3xl p-5 text-white shadow-xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide mb-3">
                    <Clock3 size={14} />
                    Analizando evidencia
                  </div>
                  <h2 className="text-[22px] font-bold leading-tight max-w-[220px]">
                    Datos extraídos automáticamente
                  </h2>
                </div>
                <div className="bg-white text-indigo-700 rounded-2xl px-3 py-2 text-center shadow-md min-w-[76px]">
                  <p className="text-[11px] uppercase tracking-wider text-indigo-400">Confianza</p>
                  <p className="text-[20px] font-bold">{analysis.confidence}%</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center mb-4">
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Fuente</p>
                  <p className="text-[13px] font-semibold">{analysis.sourceLabel}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Taller</p>
                  <p className="text-[13px] font-semibold">{analysis.taller}</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-3">
                <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Resultado</p>
                <p className="text-[14px] font-semibold leading-relaxed">{analysis.status}</p>
              </div>
            </div>
          </div>
        )}

        {analysis && (
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <h3 className="text-slate-800 text-[16px] font-bold mb-3">Mantenimiento detectado</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">Fecha</p>
                  <p className="text-slate-800 font-semibold">15/04/2024</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">Kilometraje</p>
                  <p className="text-slate-800 font-semibold">26,540 km</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 col-span-2">
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">Tipo</p>
                  <p className="text-slate-800 font-semibold">{analysis.typeName}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 col-span-2">
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-1">Descripción</p>
                  <p className="text-slate-800 font-semibold leading-relaxed">{analysis.description}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3 text-emerald-600 font-semibold text-[14px]">
                <ShieldCheck size={18} />
                Detalles validados por IA
              </div>
              <ul className="space-y-2">
                {analysis.details.map((item) => (
                  <li key={`${item.actionTypeId}-${item.componentId}`} className="flex gap-2 text-slate-600 text-[14px] leading-relaxed">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>{item.actionTypeName} sobre {item.componentName} por S/.{item.cost}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4">
              <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold text-[14px]">
                <AlertTriangle size={18} />
                Observación simulada
              </div>
              <p className="text-amber-800 text-[14px] leading-relaxed">
                El sistema ficticio no detectó inconsistencias y propone crear el mantenimiento automáticamente.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Button onClick={handleFinish} disabled={!analysis}>
            Registrar mantenimiento automáticamente
          </Button>
          <p className="text-center text-slate-400 text-[12px] leading-relaxed px-4">
            No se solicita completar campos manualmente. La IA toma la evidencia y genera el registro.
          </p>
        </div>
      </div>
    </div>
  );
}