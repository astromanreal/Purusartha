export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SanatanSphere Logo"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2V6M12 18V22M2 12H6M18 12H22M4.92969 4.92969L7.75781 7.75781M16.2422 16.2422L19.0703 19.0703M4.92969 19.0703L7.75781 16.2422M16.2422 7.75781L19.0703 4.92969"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
