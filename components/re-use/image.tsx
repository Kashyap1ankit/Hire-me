"use client";

export default function ImageComp({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return <img className={className} src={src} alt="" />;
}
