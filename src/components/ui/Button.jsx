export default function Button({ children, className = "" }) {
    return (
      <button
        type="button"
        className={`shrink-0 rounded-full bg-black px-6 py-3 text-xs font-medium text-white transition-transform duration-200 ease-in-out hover:-translate-y-1 cursor-pointer focus:ring-1 focus:ring-gray-900 shadow-md ${className}`}
      >
        {children}
      </button>
    );
  }