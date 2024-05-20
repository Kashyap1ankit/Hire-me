import { Button } from "../ui/moving-border";

export default function ButtonComp({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <div className="mx-auto w-fit mt-12">
      <Button borderRadius="1rem" className={className}>
        {text}
      </Button>
    </div>
  );
}
