interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  icon?: React.ReactNode;
}

export default function Input({ type, placeholder, value, onChange, error, label, icon }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <p className="text-slate-700 text-[15px] font-medium mb-2">{label}</p>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white rounded-xl border-2 border-slate-200 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-slate-300"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}
