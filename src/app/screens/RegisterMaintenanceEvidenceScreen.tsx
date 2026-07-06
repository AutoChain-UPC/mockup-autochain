import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Image, FileText, Sparkles, ScanText, ShieldCheck, AlertTriangle, X } from 'lucide-react';
import imgPhoto from '../../imports/RegistrarEvidenciaMantenimiento/c2c5c2cf38273812076d76246d2531a9bb373a4f.png';
import imgDocument from '../../imports/RegistrarEvidenciaMantenimiento/14119e37a80e6012d48c11b841f9864d3ef68982.png';

interface RegisterMaintenanceEvidenceScreenProps {
  onBack: () => void;
  onFinish: (evidence: any) => void;
}

export default function RegisterMaintenanceEvidenceScreen({
  onBack,
  onFinish
}: RegisterMaintenanceEvidenceScreenProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [documents, setDocuments] = useState<string[]>([]);
  const [isAiAnalysisOpen, setIsAiAnalysisOpen] = useState(false);

  const analysisReady = documents.length > 0;

  const handleAddPhoto = () => {
    // Simular carga de foto
    setPhotos([...photos, imgPhoto]);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleAddDocument = () => {
    // Simular carga de documento
    setDocuments([...documents, 'Factura_REP_09.pdf']);
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleFinish = () => {
    onFinish({ photos, documents });
  };

  const fakeAnalysis = {
    documentType: 'Factura de servicio',
    supplier: 'AutoCare SAC',
    totalAmount: 'S/.390.00',
    issueDate: '15/04/2024',
    confidence: '96%',
    status: 'Documento consistente con el mantenimiento registrado',
    highlights: [
      'El monto total coincide con la suma de las acciones registradas.',
      'La fecha del comprobante es compatible con la orden de servicio.',
      'No se detectan campos faltantes en el mockup de extracción.'
    ],
    warnings: [
      'Este análisis es simulado y no reemplaza una validación real.'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative pb-20">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-4 pt-6">
        <h1 className="text-slate-700 text-[28px] font-bold text-center leading-[34px] mb-12">
          Adjuntar Evidencia
        </h1>

        {/* Fotos */}
        <div className="mb-8">
          <h2 className="text-slate-700 text-[20px] font-semibold mb-4">Fotografías</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Botón subir foto */}
            <button
              onClick={handleAddPhoto}
              className="bg-slate-100 rounded-2xl h-[130px] flex flex-col items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <Image size={60} className="text-[#1E1E1E] mb-2" strokeWidth={1.5} />
              <span className="text-slate-700 text-[16px]">Subir</span>
            </button>

            {/* Fotos cargadas */}
            {photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-[130px] object-cover rounded-2xl"
                />
                <button
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Documentos */}
        <div className="mb-8">
          <h2 className="text-slate-700 text-[20px] font-semibold mb-4">Documentos</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Botón subir documento */}
            <button
              onClick={handleAddDocument}
              className="bg-slate-100 rounded-2xl h-[130px] flex flex-col items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <FileText size={60} className="text-[#111928] mb-2" />
              <span className="text-slate-700 text-[16px]">Subir</span>
            </button>

            {/* Documentos cargados */}
            {documents.map((doc, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-100 rounded-2xl h-[130px] flex flex-col items-center justify-center p-2">
                  <FileText size={60} className="text-[#111928] mb-2" />
                  <p className="text-slate-700 text-[10px] text-center px-1 leading-[15px]">
                    {doc}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveDocument(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
                <p className="text-center text-slate-700 text-[16px] mt-2">Eliminar</p>
              </div>
            ))}
          </div>
        </div>

        {analysisReady && (
          <div className="mb-8">
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-500 rounded-3xl p-5 text-white shadow-xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide mb-3">
                    <Sparkles size={14} />
                    Análisis IA simulado
                  </div>
                  <h2 className="text-[22px] font-bold leading-tight max-w-[220px]">
                    Analiza el documento antes de finalizar
                  </h2>
                </div>

                <button
                  onClick={() => setIsAiAnalysisOpen(true)}
                  className="shrink-0 bg-white text-indigo-700 rounded-2xl px-4 py-3 text-[13px] font-bold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Ver análisis
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Tipo</p>
                  <p className="text-[13px] font-semibold">Factura</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Confianza</p>
                  <p className="text-[13px] font-semibold">96%</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/75 mb-1">Estado</p>
                  <p className="text-[13px] font-semibold">OK</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          <Button onClick={handleFinish}>Finalizar Registro</Button>
        </div>
      </div>

      {isAiAnalysisOpen && analysisReady && (
        <div className="absolute inset-0 z-30 bg-slate-950/55 backdrop-blur-sm flex items-end">
          <div className="w-full max-w-[414px] mx-auto bg-white rounded-t-[32px] shadow-2xl overflow-hidden animate-slideUp">
            <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[12px] font-semibold mb-3">
                  <ScanText size={14} />
                  Ventana de análisis IA
                </div>
                <h3 className="text-slate-900 text-[22px] font-bold leading-tight">
                  Lectura ficticia del documento
                </h3>
                <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">
                  Este panel simula extracción de datos, validación básica y alertas sobre la evidencia cargada.
                </p>
              </div>

              <button
                onClick={() => setIsAiAnalysisOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500 text-[12px] font-semibold uppercase tracking-wider">Resumen</span>
                  <span className="text-emerald-600 text-[12px] font-bold">Validado por IA</span>
                </div>
                <p className="text-slate-800 text-[15px] leading-relaxed">
                  {fakeAnalysis.status}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider mb-1">Tipo detectado</p>
                  <p className="text-slate-900 font-semibold">{fakeAnalysis.documentType}</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider mb-1">Confianza</p>
                  <p className="text-slate-900 font-semibold">{fakeAnalysis.confidence}</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider mb-1">Proveedor</p>
                  <p className="text-slate-900 font-semibold">{fakeAnalysis.supplier}</p>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <p className="text-slate-500 text-[12px] uppercase tracking-wider mb-1">Monto</p>
                  <p className="text-slate-900 font-semibold">{fakeAnalysis.totalAmount}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-emerald-600 font-semibold text-[14px]">
                  <ShieldCheck size={18} />
                  Campos consistentes
                </div>
                <ul className="space-y-2">
                  {fakeAnalysis.highlights.map((item) => (
                    <li key={item} className="text-slate-600 text-[14px] leading-relaxed flex gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>{item}</span>
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
                  {fakeAnalysis.warnings[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
