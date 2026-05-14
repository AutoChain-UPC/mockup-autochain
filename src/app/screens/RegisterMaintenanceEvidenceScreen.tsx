import { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import { Image, FileText } from 'lucide-react';
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

        <div className="mt-12">
          <Button onClick={handleFinish}>Finalizar Registro</Button>
        </div>
      </div>
    </div>
  );
}
