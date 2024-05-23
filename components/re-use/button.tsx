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
    <div className={`flex justify-evenly + ${className}`}>
      {icon ? <img src={`icons/${icon}`} /> : ""}
      <button className={btnClassName}>{text}</button>
    </div>
  );
}
