import imgImage3 from "./97c807db3f814f0c13aad01b1add8ca1e25a79f6.png";

function Group2() {
  return (
    <div className="absolute contents left-0 top-[83px]">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 mix-blend-darken top-[83px] w-[414px]" data-name="image 4" />
    </div>
  );
}

function Frame() {
  return <div className="absolute left-[calc(50%+48px)] size-[100px] top-[68px]" />;
}

function Button() {
  return (
    <div className="absolute inset-[61.94%_6.04%_32.03%_6.76%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[22.6%_33.15%_21.58%_32.56%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Ingresar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute inset-[83.82%_6.04%_10.16%_6.76%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[22.6%_33.15%_21.58%_32.56%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Registrar</p>
      </div>
    </div>
  );
}

function InputError() {
  return (
    <div className="absolute inset-[37.39%_6.04%_54.91%_6.76%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0.02px_0_15px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#aab3cb] text-[16px] top-[28.02px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Email</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[33.82%_6.04%_54.91%_6.76%]">
      <InputError />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[33.82%_78.26%_63.55%_9.66%] justify-center leading-[0] not-italic text-[#798094] text-[16px] text-center tracking-[0.75px]">
        <p className="leading-[28px]">Email</p>
      </div>
    </div>
  );
}

function InputError1() {
  return (
    <div className="absolute inset-[50.67%_6.04%_40.18%_6.76%]" data-name="input-error">
      <div className="absolute bg-[#fafafa] inset-[0_0_28px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#aab3cb] text-[16px] top-[27px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Contraseña</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[46.88%_6.04%_40.18%_6.76%]">
      <InputError1 />
      <div className="absolute bottom-1/2 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8.94%] not-italic right-[65.94%] text-[#798094] text-[16px] text-center top-[46.88%] tracking-[0.75px]">
        <p className="leading-[28px]">Contraseña</p>
      </div>
    </div>
  );
}

export default function LoginBase() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Login - Base">
      <Group2 />
      <Frame />
      <div className="absolute left-[calc(75%+57.5px)] size-[35px] top-[37px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[210px] not-italic text-[16px] text-[rgba(20,31,106,0.5)] text-center top-[728px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">¿Aún no forma parte de AutoChain?</p>
      </div>
      <div className="absolute bottom-[72.43%] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-171px)] not-italic text-[#798094] text-[64px] top-[16.41%] tracking-[0.75px] w-[342px]">
        <p className="leading-[50px]">AutoChain</p>
      </div>
      <Button />
      <Button1 />
      <Group1 />
      <Group />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[46.99%_5.56%_49.89%_51.69%] justify-center leading-[0] not-italic text-[#141f6a] text-[14px] text-center tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">¿Olvidó su contraseña?</p>
      </div>
      <div className="absolute bg-[#141f6a] h-[83px] left-0 top-0 w-[414px]" />
    </div>
  );
}