import { imageMeta } from "./image-meta";
import type { ContentImage } from "@/content/types";

/**
 * Превращает контентную картинку в пропсы для next/image:
 * реальные размеры (никаких сдвигов вёрстки) и blur-плейсхолдер,
 * благодаря которому фото проявляется плавно.
 * alt передаём явно на месте вызова — так он виден в разметке.
 */
export function imageProps(image: ContentImage) {
  const meta = imageMeta[image.src];

  return {
    src: image.src,
    width: meta.width,
    height: meta.height,
    ...("blurDataURL" in meta
      ? { placeholder: "blur" as const, blurDataURL: meta.blurDataURL }
      : {}),
  };
}

/**
 * То же самое для варианта с fill: next/image запрещает передавать
 * width/height вместе с fill, поэтому отдаём только src и blur.
 */
export function imagePropsFill(image: ContentImage) {
  const meta = imageMeta[image.src];

  return {
    src: image.src,
    ...("blurDataURL" in meta
      ? { placeholder: "blur" as const, blurDataURL: meta.blurDataURL }
      : {}),
  };
}

/** Оригинальное соотношение сторон — чтобы не кадрировать фото в карточках. */
export function aspectRatio(image: ContentImage): string {
  const meta = imageMeta[image.src];
  return `${meta.width} / ${meta.height}`;
}
