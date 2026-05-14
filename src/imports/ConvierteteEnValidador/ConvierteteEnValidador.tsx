import svgPaths from "./svg-xpftlz8bko";
import imgImage108 from "./50bb550ea461f3433386a2d1577f1cf225a9b7d6.png";
import imgImage109 from "./81aed02cdc839aaf9b58a9daf4bab62d06ac1132.png";

function Group() {
  return (
    <div className="absolute contents inset-[2.46%_3.38%_92.52%_85.75%]">
      <div className="absolute bg-white inset-[4.28%_3.38%_94.35%_85.75%]" />
      <div className="absolute bg-white inset-[6.11%_3.38%_92.52%_85.75%]" />
      <div className="absolute inset-[2.46%_3.38%_96.17%_85.75%]">
        <div className="absolute bg-white inset-0" />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[2px] top-[8px]">
      <div className="absolute h-[67px] left-[2px] overflow-clip top-[8px] w-[66px]" data-name="keyboard_return">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 33.5">
            <path d={svgPaths.p1f649e00} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[26px] top-[440px]">
      <div className="absolute bg-[#e4e4e4] inset-[440px_6.52%_354px_6.28%] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="absolute left-[42px] size-[65px] top-[458px]" data-name="image 108">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage108} />
      </div>
      <div className="absolute bottom-[41.29%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(62.5%-141.75px)] not-italic text-[#111] text-[15px] top-[51.12%] tracking-[0.75px] w-[236px]">
        <p className="leading-[20px]">Obtenga la certificación oficial que le otorga el derecho de auditar y validar registros históricos</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[35px] left-[39px] top-[776px] w-[337px]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[9.574px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[11.55%_0_13.39%_0] justify-center leading-[0] not-italic text-[#fafafa] text-[13.403px] text-center tracking-[0.718px]">
        <p className="leading-[22.977px]">Registro de Taller</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[54px] top-[590px]">
      <div className="absolute h-[135px] left-[54px] top-[590px] w-[306px]" data-name="image 109">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[227.56%] left-[-0.16%] max-w-none top-[-98.22%] w-[100.14%]" src={imgImage109} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[206.5px] not-italic text-[20px] text-center text-white top-[708px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`"La precisión no es un acto,`}</p>
        <p className="leading-[20px]">{`es un hábito."`}</p>
      </div>
    </div>
  );
}

export default function ConvierteteEnValidador() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Conviértete en validador">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute bg-[#fafafa] inset-[11.5%_3.14%_2.01%_3.38%] rounded-[24px] shadow-[0px_32px_64px_0px_rgba(17,17,17,0.08)]" data-name="background" />
      <div className="absolute bg-[#141f6a] h-[83px] left-0 top-0 w-[414px]" />
      <Group3 />
      <div className="absolute bottom-[68.97%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-171px)] not-italic text-[#12348d] text-[48px] top-[14.29%] tracking-[0.75px] w-[354px]">
        <p className="leading-[50px]">Forja el estándar de excelencia</p>
      </div>
      <div className="absolute bottom-[55.8%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-171px)] not-italic text-[#798094] text-[20px] top-[33.04%] tracking-[0.75px] w-[354px]">
        <p className="leading-[20px]">Conviértase en un pilar de nuestra comunidad. Como Taller Validador, su juicio define la autenticidad y la calidad dentro del ecosistema de AutoChain</p>
      </div>
      <Group1 />
      <Button />
      <Group2 />
    </div>
  );
}