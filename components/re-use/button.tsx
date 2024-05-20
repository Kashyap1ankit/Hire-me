import { Button } from "../ui/moving-border";

export default function ButtonComp({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick?: () => void;
}) {
  return (
    <div className="mx-auto w-fit mt-12" onClick={onClick}>
      <Button borderRadius="1rem" className={className}>
        {text}
      </Button>
    </div>
  );
}
