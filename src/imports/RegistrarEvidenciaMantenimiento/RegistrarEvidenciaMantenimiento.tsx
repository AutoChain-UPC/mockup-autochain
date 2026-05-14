import svgPaths from "./svg-gzn4m6t9dk";
import imgImage115 from "./14119e37a80e6012d48c11b841f9864d3ef68982.png";
import imgImage114 from "./c2c5c2cf38273812076d76246d2531a9bb373a4f.png";

function Group1() {
  return (
    <div className="absolute contents left-[calc(75%+45.5px)] top-[19px]">
      <div className="absolute bg-white h-[12.273px] left-[calc(75%+45.5px)] top-[35.36px] w-[45px]" />
      <div className="absolute bg-white h-[12.273px] left-[calc(75%+45.5px)] top-[51.73px] w-[45px]" />
      <div className="absolute h-[12.273px] left-[calc(75%+45.5px)] top-[19px] w-[45px]">
        <div className="absolute bg-white inset-0" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute inset-[93.21%_21.98%_2%_21.98%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[20.93%_6.47%_23.26%_6.9%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Finalizar Registro</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[47px] top-[433px]">
      <div className="absolute left-[47px] rounded-[20px] size-[130px] top-[433px]" data-name="image 115">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage115} />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[47px] top-[433px]">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[47px] top-[433px]">
      <Group5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[47px] top-[277px]">
      <div className="absolute bg-[#d9d9d9] left-[47px] rounded-[20px] size-[130px] top-[277px]" />
      <div className="absolute left-[82px] overflow-clip size-[60px] top-[312px]" data-name="Image">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-3.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p17660700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[2.81%_12.46%_2.66%_12.62%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9538 56.7188">
        <g id="Group">
          <path d={svgPaths.p25843f60} fill="var(--fill-0, #111928)" id="Vector" />
          <path d={svgPaths.p3ad70000} fill="var(--fill-0, #111928)" id="Vector_2" />
          <path d={svgPaths.p37485000} fill="var(--fill-0, #111928)" id="Vector_3" />
          <path d={svgPaths.p1b5c2500} fill="var(--fill-0, #111928)" id="Vector_4" />
          <path d={svgPaths.p3f7dc1a0} fill="var(--fill-0, #111928)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Pdf({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[calc(50%+64px)] overflow-clip size-[60px] top-[450px]"} data-name="Pdf-1">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%+29px)] top-[433px]">
      <div className="absolute bg-[#d9d9d9] left-[calc(50%+29px)] rounded-[20px] size-[130px] top-[433px]" />
      <Pdf />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[28px] left-[calc(50%+94px)] not-italic text-[#798094] text-[16px] text-center top-[529px] tracking-[0.75px] w-[90px]">Eliminar</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[16px] leading-[15px] left-[calc(50%+39px)] not-italic text-[#798094] text-[10px] top-[513px] tracking-[0.75px] w-[110px]">Factura_REP_09.pdf</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[47px] top-[277px]">
      <div className="absolute left-[calc(50%+29px)] rounded-[20px] size-[130px] top-[277px]" data-name="image 114">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage114} />
      </div>
      <Group3 />
      <Group2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[28px] left-[90px] not-italic text-[#798094] text-[16px] top-[371px] tracking-[0.75px] w-[50px]">Subir</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[47px] top-[277px]">
      <Group9 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[47px] top-[277px]">
      <Group8 />
    </div>
  );
}

export default function RegistrarEvidenciaMantenimiento() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Registrar Evidencia Mantenimiento">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute bg-[#141f6a] h-[87px] left-0 top-0 w-[414px]" />
      <Group1 />
      <div className="absolute h-[67px] left-0 overflow-clip top-[8px] w-[66px]" data-name="keyboard_return">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 33.5">
            <path d={svgPaths.p1f649e00} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
      <Button />
      <div className="-translate-x-1/2 absolute bottom-[77.64%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 not-italic text-[#798094] text-[48px] text-center top-[11.23%] tracking-[0.75px] w-[364px]">
        <p className="leading-[50px]">Archivos y Evidencias</p>
      </div>
      <Group6 />
      <Group7 />
    </div>
  );
}