import svgPaths from "./svg-v7c9e38osu";

function Button() {
  return (
    <div className="absolute inset-[84.98%_28.99%_10.22%_28.74%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[21.95%_21.14%_22.23%_21.71%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Crear cuenta</p>
      </div>
    </div>
  );
}

function InputError() {
  return (
    <div className="absolute inset-[28.13%_6.52%_64.32%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_27.8px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Nombre</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[24.58%_6.52%_64.32%_6.28%]">
      <InputError />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[24.58%_72.71%_72.86%_9.18%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Nombres</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[24.58%_6.52%_64.32%_6.28%]">
      <Group2 />
    </div>
  );
}

function InputError1() {
  return (
    <div className="absolute inset-[37.61%_6.52%_54.69%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28.25px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Apellidos</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[34.04%_6.52%_54.69%_6.28%]">
      <InputError1 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[34.04%_71.98%_63.29%_9.18%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Apellidos</p>
      </div>
    </div>
  );
}

function InputError2() {
  return (
    <div className="absolute inset-[56.29%_6.52%_36%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28.25px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Email</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[52.73%_6.52%_36%_6.28%]">
      <InputError2 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[52.73%_78.74%_44.64%_9.18%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Email</p>
      </div>
    </div>
  );
}

function CalendarClearOutline() {
  return (
    <div className="absolute inset-[-15%_0_15%_0]" data-name="calendar-clear-outline 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar-clear-outline 1">
          <path d={svgPaths.p2e61ce80} id="Vector" stroke="var(--stroke-0, #1CC8EE)" strokeLinejoin="round" />
          <path d={svgPaths.p18473280} id="Vector_2" stroke="var(--stroke-0, #1CC8EE)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute overflow-clip right-[8px] size-[20px] top-[14.91px]" data-name="icon">
      <CalendarClearOutline />
    </div>
  );
}

function InputError3() {
  return (
    <div className="absolute inset-[47.28%_6.52%_45.01%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28.25px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Fecha de nacimiento</p>
      </div>
      <Icon />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[43.72%_6.52%_45.01%_6.28%]">
      <InputError3 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[43.72%_57%_53.62%_9.18%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Fch. Nacimiento</p>
      </div>
    </div>
  );
}

function InputError4() {
  return (
    <div className="absolute inset-[66.43%_6.52%_24.42%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[-0.19px_0_41.46px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Contraseña</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[62.4%_6.52%_24.42%_6.28%]">
      <InputError4 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[62.4%_68.12%_34.48%_7.25%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Contraseña</p>
      </div>
    </div>
  );
}

function InputError5() {
  return (
    <div className="absolute inset-[76.88%_6.52%_13.96%_6.28%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[-0.19px_0_41.46px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Confirmar contraseña</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[72.64%_6.52%_13.96%_6.28%]">
      <InputError5 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[72.64%_47.1%_24.25%_7.49%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Confirmar contraseña</p>
      </div>
    </div>
  );
}

export default function RegisterBase() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Register - Base">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute bg-[#141f6a] h-[87px] left-0 top-0 w-[414px]" />
      <Button />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[207px] not-italic text-[#0080ff] text-[16px] text-center top-[850px] tracking-[0.75px] whitespace-nowrap">
        <p className="text-[#141f6a]">
          <span className="leading-[28px]">{`¿Ya tienes una cuenta? `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic underline">inicia sesión</span>
        </p>
      </div>
      <Group3 />
      <Group1 />
      <Group5 />
      <Group6 />
      <Group />
      <Group4 />
      <div className="-translate-x-1/2 absolute bottom-[77.75%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 not-italic text-[#798094] text-[64px] text-center top-[16.69%] tracking-[0.75px] w-[342px]">
        <p className="leading-[50px]">Registro</p>
      </div>
    </div>
  );
}