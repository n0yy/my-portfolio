export default function Footer() {
  return (
    <footer className="px-10 lg:px-36">
      <div className="border-t border-white/20 py-3 text-center text-xs font-josefin text-slate-500 flex items-center justify-center space-x-1">
        <p>2022, Built by Syncr0nate with </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-secondary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}
