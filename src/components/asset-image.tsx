import Image, { type ImageProps } from "next/image";
import { sitePath } from "@/lib/site-path";

export default function AssetImage({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      src={typeof src === "string" ? sitePath(src) : src}
    />
  );
}
