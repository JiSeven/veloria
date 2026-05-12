import Image from "next/image";

type Props = {
  image: string;
  className?: string;
};

export function VehiclePreview({ image, className = "" }: Props) {
  return (
    <Image
      src="/vehicle-preview.png"
      className={`${className} w-full`}
      width="320"
      height="180"
      alt="bmw"
      unoptimized
    />
  );
}
