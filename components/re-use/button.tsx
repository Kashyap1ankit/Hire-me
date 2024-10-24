"use client";

export default function ButtonComp({
  text,
  className,
  icon,
  btnClassName,
}: {
  text: string;
  className: string;
  icon?: string;
  btnClassName?: string;
}) {
  return (
    <div className={`flex gap-4 justify-center items-center + ${className}`}>
      <button className={btnClassName}>{text}</button>
      {icon ? <img src={`icons/${icon}`} /> : ""}
    </div>
  );
}
