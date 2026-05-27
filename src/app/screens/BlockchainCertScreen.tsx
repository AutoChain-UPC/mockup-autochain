import MobileHeader from '../components/MobileHeader';
import { ShieldCheck, Copy, Clock, Database, Network, Lock } from 'lucide-react';
import { Maintenance } from '../types';
import { useToast } from '../components/Toast';

interface BlockchainCertScreenProps {
  onBack: () => void;
  maintenance: Maintenance | null;
}

export default function BlockchainCertScreen({ onBack, maintenance }: BlockchainCertScreenProps) {
  const isValidated = maintenance?.status === 'validado' && !!maintenance?.blockchainHash;
  const hash = maintenance?.blockchainHash || '';
  const { showToast } = useToast();

  const handleCopyHash = () => {
    navigator.clipboard.writeText(hash);
    showToast('Hash copiado al portapapeles', 'info');
  };

  if (!isValidated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 w-full max-w-[414px] mx-auto relative pb-20">
        <MobileHeader onBack={onBack} showMenu />

        <div className="relative z-10 px-6 pt-8 pb-20 flex flex-col items-center justify-center min-h-[70vh]">
          {/* Ícono bloqueado */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-slate-400 rounded-full blur-2xl opacity-20" />
            <div className="relative bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl p-6 shadow-xl">
              <Lock size={64} className="text-white opacity-80" strokeWidth={2} />
            </div>
          </div>

          <h1 className="text-slate-600 text-[26px] font-bold mb-3 text-center">
            Certificado No Disponible
          </h1>
          <p className="text-slate-500 text-[15px] text-center leading-relaxed mb-8 px-4">
            Este certificado blockchain estará disponible una vez que el taller valide y apruebe el mantenimiento.
          </p>

          {/* Estado actual */}
          <div className="w-full bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-amber-500" />
              </div>
              <div>
                <p className="text-slate-700 text-[15px] font-bold">
                  {maintenance?.status === 'rechazado' ? 'Mantenimiento Rechazado' : 'Pendiente de Aprobación'}
                </p>
                <p className="text-slate-500 text-[13px]">
                  {maintenance?.status === 'rechazado'
                    ? 'El taller rechazó este mantenimiento. No se generará certificado.'
                    : 'El taller aún no ha validado este mantenimiento.'}
                </p>
              </div>
            </div>
            {maintenance?.rejectionReason && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-slate-500 text-[13px]">Motivo de rechazo:</p>
                <p className="text-slate-700 text-[14px] mt-1">{maintenance.rejectionReason}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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
                  {hash.length > 20 ? `${hash.slice(0, 18)}...${hash.slice(-8)}` : hash}
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
                  <p className="text-slate-800 text-[15px] font-bold">
                    {maintenance?.validatedAt
                      ? new Date(maintenance.validatedAt).toLocaleString('es-ES', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }) + ' UTC'
                      : '—'}
                  </p>
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
