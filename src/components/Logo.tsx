import logo from "@/assets/logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Parivartan Nutrition"
      className={className}
      width={400}
      height={400}
      loading="eager"
    />
  );
}
