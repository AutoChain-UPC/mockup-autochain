import svgPaths from "./svg-twkvmr6n37";
import imgImage117 from "./10743cd899b44f70d92a66500ca0439166478a0f.png";

function Group() {
  return (
    <button className="absolute contents cursor-pointer inset-[2.46%_3.38%_92.52%_85.75%]">
      <div className="absolute bg-white inset-[4.28%_3.38%_94.35%_85.75%]" />
      <div className="absolute bg-white inset-[6.11%_3.38%_92.52%_85.75%]" />
      <div className="absolute inset-[2.46%_3.38%_96.17%_85.75%]">
        <div className="absolute bg-white inset-0" />
      </div>
    </button>
  );
}

function Group1() {
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

function LastName() {
  return (
    <div className="absolute contents left-[45px] top-[422px]" data-name="last-name">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[28px] left-[45px] not-italic text-[#545967] text-[16px] top-[422px] tracking-[0.75px] w-[281px]">Metadatos Criptográficos</p>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="absolute contents left-[45px] top-[422px]" data-name="personal-info">
      <LastName />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[45px] top-[422px]">
      <PersonalInfo />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[24px] top-[406px]">
      <div className="absolute h-[279px] left-[24px] top-[406px] w-[366px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366 279">
          <g id="Rectangle 21">
            <path d={svgPaths.p1ee6d980} fill="var(--fill-0, #D9D9D9)" />
            <path d={svgPaths.p1ee6d980} fill="var(--fill-0, #D9D9D9)" />
          </g>
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

export default function ListadoDeMantenimientos() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="listado de Mantenimientos">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute bg-[#141f6a] h-[83px] left-0 top-0 w-[414px]" />
      <Group1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-[206.5px] not-italic text-[#141f6a] text-[23px] text-center top-[111px] tracking-[1px] w-[397px]">
        <p className="leading-[34px]">Certificado digital de Integridad</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-[206.5px] not-italic text-[#141f6a] text-[23px] text-center top-[359px] tracking-[1px] w-[397px]">
        <p className="leading-[34px]">Verificado en BlockChain</p>
      </div>
      <div className="absolute h-[183px] left-[calc(25%+18.5px)] top-[148px] w-[173px]" data-name="image 117">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.78%] left-[-41.43%] max-w-none top-[-20.44%] w-[195.07%]" src={imgImage117} />
        </div>
      </div>
      <Group3 />
    </div>
  );
}