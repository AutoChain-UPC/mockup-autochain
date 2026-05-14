import MobileHeader from '../components/MobileHeader';
import { ShieldCheck, Copy, Clock, Database, Network } from 'lucide-react';

interface BlockchainCertScreenProps {
  onBack: () => void;
}

export default function BlockchainCertScreen({ onBack }: BlockchainCertScreenProps) {
  const handleCopyHash = () => {
    navigator.clipboard.writeText('0x8a4d9c2f7b3e5a1c6d8f9e2b4a7c3d1e5f8a2b4c');
    alert('Hash copiado al portapapeles');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 w-full max-w-[414px] mx-auto relative pb-20">
      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10 px-6 pt-8 pb-20">
        {/* Header con Shield animado */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            {/* Círculos de fondo animados */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Shield principal */}
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl">
              <ShieldCheck size={64} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-slate-800 text-[28px] font-bold mb-2">
            Certificado de Integridad
          </h1>
          <p className="text-slate-500 text-[15px]">
            Verificado en Blockchain
          </p>
        </div>


        {/* Metadatos Criptográficos */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border-2 border-slate-100">
          <div className="flex items-center gap-2 mb-5">
            <Database size={20} className="text-indigo-500" />
            <h2 className="text-slate-800 text-[18px] font-bold">
              Metadatos Blockchain
            </h2>
          </div>

          <div className="space-y-4">
            {/* Hash de Transacción */}
            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl p-4">
              <p className="text-slate-600 text-[13px] font-semibold mb-2">
                Hash de Transacción
              </p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-slate-800 text-[12px] font-mono break-all flex-1">
                  0x8a4d9c2f7b3e...5f8a2b4c
                </p>
                <button
                  onClick={handleCopyHash}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                  title="Copiar hash completo"
                >
                  <Copy size={16} className="text-indigo-500" />
                </button>
              </div>
            </div>

            {/* Bloque */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Database size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-[13px]">Bloque</p>
                  <p className="text-slate-800 text-[15px] font-bold">#18,234,567</p>
                </div>
              </div>
            </div>

            {/* Red */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Network size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-[13px]">Red Blockchain</p>
                  <p className="text-slate-800 text-[15px] font-bold">Ethereum Mainnet</p>
                </div>
              </div>
            </div>

            {/* Timestamp */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-[13px]">Fecha de Registro</p>
                  <p className="text-slate-800 text-[15px] font-bold">24 Oct 2024, 14:32 UTC</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Info footer */}
        <div className="bg-slate-100 rounded-2xl p-5 border-2 border-slate-200">
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <ShieldCheck size={18} className="text-indigo-600" />
              </div>
            </div>
            <div>
              <p className="text-slate-700 text-[14px] font-semibold mb-1">
                Garantía de Autenticidad
              </p>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                Este registro ha sido almacenado de forma permanente e inmutable en la blockchain de Ethereum,
                garantizando su autenticidad y trazabilidad completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
