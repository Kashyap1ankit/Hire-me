"use client";

export default function StichtedButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={
        `group relative rounded-lg border-2 px-5 py-1 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-red-500/50` +
        `${className}`
      }
    >
      <span className="absolute left-0 top-0 size-full rounded-md border border-dashed border-red-50 shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
      <span className="absolute left-0 top-0 size-full rotate-180 rounded-md border-red-50 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
      {text}
    </button>
  );
}
