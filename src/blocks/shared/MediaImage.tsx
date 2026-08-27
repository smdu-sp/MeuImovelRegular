import Image from "next/image";
import type { Media } from "../../payload-types";

export function MediaImage({
  className,
  media,
  priority = false,
}: {
  className?: string;
  media?: Media | number | null;
  priority?: boolean;
}) {
  if (!media || typeof media !== "object" || !media.url) return null;

  return (
    <Image
      alt={media.alt}
      className={className}
      height={media.height || 900}
      priority={priority}
      src={media.url}
      width={media.width || 1200}
    />
  );
}

