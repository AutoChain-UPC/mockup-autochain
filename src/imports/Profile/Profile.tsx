import svgPaths from "./svg-v3gsxthbe9";
import imgImage13 from "./55d08274861b075383d46df9693c8aa916986e6a.png";

function Input() {
  return (
    <div className="absolute h-[47.485px] left-[calc(25%+31.5px)] top-[321.63px] w-[253px]" data-name="input">
      <div className="absolute bg-[#fafafa] inset-[0_0_0.48px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Retes Rimac</p>
      </div>
    </div>
  );
}

function LastName() {
  return (
    <div className="absolute contents left-[24px] top-[321.63px]" data-name="last-name">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26.268px] leading-[28px] left-[24px] not-italic text-[#798094] text-[16px] top-[328.7px] tracking-[0.75px] w-[105px]">Apellidos</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute h-[53.838px] left-[calc(25%+13.55px)] top-[260px] w-[270.945px]" data-name="input">
      <div className="absolute bg-[#fafafa] inset-[7px_0_-0.16px_6.62%] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[35.95px] not-italic text-[#aab3cb] text-[16px] top-[30px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">Hans Eduardo</p>
      </div>
    </div>
  );
}

function FirstName() {
  return (
    <div className="absolute contents left-[24px] top-[260px]" data-name="first-name">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[31.32px] leading-[28px] left-[24px] not-italic text-[#798094] text-[16px] top-[276.16px] tracking-[0.75px] w-[111px]">Nombres</p>
      <Input1 />
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
    <div className="absolute overflow-clip right-[9.97px] size-[20px] top-[12px]" data-name="icon">
      <CalendarClearOutline />
    </div>
  );
}

function DatePicker() {
  return (
    <div className="absolute h-[43.804px] left-[calc(25%+31.5px)] top-[377px] w-[240.973px]" data-name="date-picker">
      <div className="absolute bg-[#fafafa] inset-[0_0_-0.2px_0] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <Icon />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">28/01/2000</p>
      </div>
    </div>
  );
}

function BirthDate() {
  return (
    <div className="absolute contents left-[22px] top-[377px]" data-name="birth-date">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26.282px] leading-[28px] left-[22px] not-italic text-[#798094] text-[16px] top-[385.76px] tracking-[0.75px] w-[103.274px]">Nacimiento</p>
      <DatePicker />
    </div>
  );
}

function DatePicker1() {
  return (
    <div className="absolute h-[43px] left-[calc(25%+30.5px)] top-[429px] w-[240.973px]" data-name="date-picker">
      <div className="absolute bg-[#fafafa] inset-0 rounded-[8px] shadow-[0px_8px_16px_0px_rgba(17,17,17,0.06)]" data-name="background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] not-italic text-[#aab3cb] text-[16px] top-[21px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[28px]">hretes@mail.com</p>
      </div>
    </div>
  );
}

function BirthDate1() {
  return (
    <div className="absolute contents left-[29px] top-[429px]" data-name="birth-date">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[25.8px] leading-[28px] left-[29px] not-italic text-[#798094] text-[16px] top-[437.6px] tracking-[0.75px] w-[103.274px]">Email</p>
      <DatePicker1 />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="absolute contents left-[22px] top-[260px]" data-name="personal-info">
      <LastName />
      <FirstName />
      <BirthDate />
      <BirthDate1 />
    </div>
  );
}

function Group() {
  return (
    <button className="absolute contents cursor-pointer left-[calc(75%+45.5px)] top-[19px]">
      <div className="absolute bg-white h-[12.273px] left-[calc(75%+45.5px)] top-[35.36px] w-[45px]" />
      <div className="absolute bg-white h-[12.273px] left-[calc(75%+45.5px)] top-[51.73px] w-[45px]" />
      <div className="absolute h-[12.273px] left-[calc(75%+45.5px)] top-[19px] w-[45px]">
        <div className="absolute bg-white inset-0" />
      </div>
    </button>
  );
}

function Button() {
  return (
    <div className="absolute h-[35px] left-[61px] top-[570px] w-[292px]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[9.574px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[11.55%_0_13.39%_0] justify-center leading-[0] not-italic text-[#fafafa] text-[13.403px] text-center tracking-[0.718px]">
        <p className="leading-[22.977px]">Editar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute inset-[75.22%_18.84%_19.64%_20.77%]" data-name="button">
      <div className="absolute bg-[#141f6a] inset-0 rounded-[10px]" data-name="background" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[22.08%_16.8%] justify-center leading-[0] not-italic text-[#fafafa] text-[14px] text-center tracking-[0.75px]">
        <p className="leading-[24px]">Vehículos Registrados</p>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-[#f4f0f8] relative size-full" data-name="Profile">
      <div className="absolute bg-[rgba(20,31,106,0.15)] h-[813px] left-0 top-[87px] w-[414px]" data-name="image 4" />
      <div className="absolute bg-[#fafafa] inset-[11.5%_3.14%_2.01%_3.38%] rounded-[24px] shadow-[0px_32px_64px_0px_rgba(17,17,17,0.08)]" data-name="background" />
      <div className="absolute bg-[#141f6a] h-[83px] left-0 top-0 w-[414px]" />
      <PersonalInfo />
      <Group />
      <div className="absolute h-[124px] left-[calc(25%+38.5px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[122px] w-[130px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage13} />
      </div>
      <Button />
      <Button1 />
      <div className="absolute h-[67px] left-0 overflow-clip top-[8px] w-[66px]" data-name="keyboard_return">
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 33.5">
            <path d={svgPaths.p1f649e00} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}