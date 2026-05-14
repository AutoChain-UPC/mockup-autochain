interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  fullWidth = true,
  disabled = false
}: ButtonProps) {
  const baseClasses = "rounded-xl py-3.5 px-6 font-semibold transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] text-[15px] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md";
  const variantClasses =
    variant === 'primary' ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:from-indigo-500 hover:to-indigo-400" :
    variant === 'danger' ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400" :
    "bg-white text-indigo-600 border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${widthClass}`}
    >
      {children}
    </button>
  );
}
