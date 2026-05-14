import MobileHeader from '../components/MobileHeader';
import Button from '../components/Button';
import imgCheck from '../../imports/ConvierteteEnValidador/50bb550ea461f3433386a2d1577f1cf225a9b7d6.png';
import imgQuote from '../../imports/ConvierteteEnValidador/81aed02cdc839aaf9b58a9daf4bab62d06ac1132.png';

interface BecomeValidatorScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

export default function BecomeValidatorScreen({ onBack, onRegister }: BecomeValidatorScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-full max-w-[414px] mx-auto relative">
      <div className="absolute bg-gradient-to-b from-transparent to-indigo-50/30 h-[813px] left-0 top-[87px] w-full mix-blend-darken pointer-events-none" />

      <MobileHeader onBack={onBack} showMenu />

      <div className="relative z-10">
        <div className="bg-white mx-4 mt-6 mb-6 rounded-2xl shadow-[0px_32px_64px_0px_rgba(17,17,17,0.08)] p-6 pb-8">
          <h1 className="text-[#12348d] text-[28px] font-bold leading-[34px] tracking-[0.75px] mb-6">
            Forja el estándar de excelencia
          </h1>

          <p className="text-slate-700 text-[20px] font-bold leading-[20px] tracking-[0.75px] mb-8">
            Conviértase en un pilar de nuestra comunidad. Como Taller Validador, su juicio define la autenticidad y la calidad dentro del ecosistema de AutoChain
          </p>

          {/* Certificación */}
          <div className="bg-[#e4e4e4] rounded-lg border-2 border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all p-4 flex gap-4 items-center mb-8">
            <img src={imgCheck} alt="Check" className="w-[65px] h-[65px] flex-shrink-0" />
            <p className="text-[#111] text-[15px] font-bold leading-[20px] tracking-[0.75px]">
              Obtenga la certificación oficial que le otorga el derecho de auditar y validar registros históricos
            </p>
          </div>

          {/* Quote Image */}
          <div className="relative h-[135px] mb-8">
            <img
              src={imgQuote}
              alt="Quote"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-[20px] text-center leading-[20px] tracking-[0.5px] px-4">
                "La precisión no es un acto,<br />es un hábito."
              </p>
            </div>
          </div>

          <Button onClick={onRegister}>
            Registro de Taller
          </Button>
        </div>
      </div>
    </div>
  );
}
