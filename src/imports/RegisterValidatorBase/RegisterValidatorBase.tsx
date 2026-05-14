import svgPaths from "./svg-6yv1iwqe3y";

function Checkbox() {
  return (
    <div className="bg-[#2c2c2c] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-10.91%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2667 8.93333">
              <path d={svgPaths.p2ea7ce0} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxAndLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-w-[120px] relative shrink-0" data-name="Checkbox and Label">
      <Checkbox />
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#1e1e1e] text-[16px]">
        <p className="leading-[1.4] mb-0">Declaro que la información proporcionada</p>
        <p className="leading-[1.4] mb-0">es verídica y acepto sostenerme al</p>
        <p className="leading-[1.4] mb-0">proceso de auditoría presencial según el</p>
        <p className="leading-[1.4]">protocolo de AutoChain</p>
      </div>
    </div>
  );
}

function Space() {
  return <div className="relative shrink-0 size-[16px]" data-name="Space" />;
}

function DescriptionRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-w-[120px] relative shrink-0" data-name="Description Row">
      <Space />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[2.45%_3.38%_92.55%_85.75%]">
      <div className="absolute bg-white inset-[4.27%_3.38%_94.37%_85.75%]" />
      <div className="absolute bg-white inset-[6.09%_3.38%_92.55%_85.75%]" />
      <div className="absolute inset-[2.45%_3.38%_96.19%_85.75%]">
        <div className="absolute bg-white inset-0" />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[2px] top-[8px]">
      <div className="absolute h-[67px] left-[2px] overflow-clip top-[8px] w-[66px]" data-name="keyboard_return">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 33.5">
            <path d={svgPaths.p1f649e00} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
      <Group3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute inset-[86.32%_19.81%_8.9%_19.81%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[23.26%_8.4%_20.93%_8.4%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Registrar Taller</p>
      </div>
    </div>
  );
}

function InputError() {
  return (
    <div className="absolute inset-[31.47%_7%_60.99%_5.8%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_27.8px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">nombre del taller</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[27.92%_7%_60.99%_5.8%]">
      <InputError />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[27.92%_55.8%_69.52%_8.7%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Nombre del Taller</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[27.92%_7%_60.99%_5.8%]">
      <Group1 />
    </div>
  );
}

function InputError1() {
  return (
    <div className="absolute inset-[42.61%_7%_49.68%_5.8%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28.25px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">ruc / id fiscal</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[39.04%_7%_49.68%_5.8%]">
      <InputError1 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[39.04%_61.11%_58.29%_8.7%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">RUC / Id Fiscal</p>
      </div>
    </div>
  );
}

function InputError2() {
  return (
    <div className="absolute inset-[53.85%_7%_38.45%_5.8%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28.25px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">dirección</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[50.28%_7%_38.45%_5.8%]">
      <InputError2 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[50.28%_39.86%_47.05%_8.7%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Dirección de Operaciones</p>
      </div>
    </div>
  );
}

export default function RegisterValidatorBase() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Register Validator - Base">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute content-stretch flex flex-col items-start left-[33px] top-[579px]" data-name="Checkbox Field">
        <CheckboxAndLabel />
        <DescriptionRow />
      </div>
      <div className="absolute bg-[#141f6a] h-[87px] left-0 top-0 w-[414px]" />
      <Group5 />
      <Button />
      <Group2 />
      <Group />
      <Group4 />
      <div className="-translate-x-1/2 absolute bottom-[76.75%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#798094] text-[64px] text-center top-[11.01%] tracking-[0.75px] w-[387px]">
        <p className="leading-[55px]">Registro de taller</p>
      </div>
    </div>
  );
}