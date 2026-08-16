export default function Badge({ children, className = "" }) {
    return (
      <div
        className={`inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-gray-500 ${className}`}
      >
        {children}
      </div>
    );
  }