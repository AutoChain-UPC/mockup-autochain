function LastName() {
  return (
    <div className="absolute contents left-[20.72px] top-[23.34px]" data-name="last-name">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[39.387px] leading-[28px] left-[20.72px] not-italic text-[#798094] text-[16px] top-[23.34px] tracking-[0.75px] w-[291.092px]">Descripción del servicio</p>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="absolute contents left-[20.72px] top-[23.34px]" data-name="personal-info">
      <LastName />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[20.72px] top-[62.66px]">
      <div className="absolute bg-[#fafafa] inset-[62.66px_5.96%_370.2px_5.97%] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[42.417px] justify-center leading-[0] left-[43.51px] not-italic text-[#aab3cb] text-[16px] top-[94.47px] tracking-[0.75px] w-[228.937px]">
        <p className="leading-[28px]">Cambio de aceite sintético</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[20.72px] top-[62.66px]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[20.72px] top-[23.34px]">
      <PersonalInfo />
      <Group1 />
    </div>
  );
}

function LastName1() {
  return (
    <div className="absolute contents left-[20.72px] top-[297.33px]" data-name="last-name">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[39.387px] leading-[28px] left-[20.72px] not-italic text-[#798094] text-[16px] top-[297.33px] tracking-[0.75px] w-[291.092px]">Precio (Soles)</p>
    </div>
  );
}

function PersonalInfo1() {
  return (
    <div className="absolute contents left-[20.72px] top-[297.33px]" data-name="personal-info">
      <LastName1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[20.72px] top-[336.72px]">
      <div className="absolute bg-[#fafafa] inset-[336.72px_5.96%_96.14px_5.97%] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[42.417px] justify-center leading-[0] left-[43.51px] not-italic text-[#aab3cb] text-[16px] top-[368.53px] tracking-[0.75px] w-[60.083px]">
        <p className="leading-[28px]">320.00</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[20.72px] top-[336.72px]">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[20.72px] top-[297.33px]">
      <PersonalInfo1 />
      <Group3 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[20.72px] top-[177.4px]">
      <div className="absolute bg-[#fafafa] inset-[177.4px_5.96%_210.01px_5.97%] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[110.588px] justify-center leading-[0] left-[27.97px] not-italic text-[#aab3cb] text-[16px] top-[232.7px] tracking-[0.75px] w-[289.02px]">
        <p className="leading-[28px]">Se utilizó filtro original de alto rendimiento. Revisión de niveles completada</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[20.72px] top-[177.4px]">
      <Group8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[20.72px] top-[177.4px]">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#d9d9d9] h-[498px] left-0 rounded-[20px] top-0 w-[347px]" />
      <Group2 />
      <Group4 />
      <Group6 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute inset-[85.34%_18.73%_6.02%_14.41%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[20.93%_6.47%_23.26%_6.9%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Ok</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group9 />
      <Button />
    </div>
  );
}