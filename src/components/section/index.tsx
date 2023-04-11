import { cn } from "@/lib/utils/component.utils";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const classNames = cn("max-w-[1100px] mx-auto w-full px-5", className);

  return <div className={classNames}>{children}</div>;
}

export default Section;
