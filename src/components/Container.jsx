import { cn } from "@/lib/utils";

export default function Container({ as: Tag = "section", className, children, id }) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-5xl px-6", className)}>
      {children}
    </Tag>
  );
}
