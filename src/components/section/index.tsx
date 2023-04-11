function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const classNames = ["max-w-[1100px] mx-auto w-full px-5", className]
    .join(" ")
    .trim();
  return <div className={classNames}>{children}</div>;
}

export default Section;
