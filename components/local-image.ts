export const getLocalImageSrc = (src: string): string => {
  const imageId = src.match(/photo-[\w-]+/)?.[0];
  return imageId ? `/listings/${imageId}.jpg` : src;
};