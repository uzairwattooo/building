import Image from "next/image";

export default function PageHero({ image, title, breadcrumb }) {
  return (
    <div className="w-full max-w-490 mx-auto bg-white">
      <div className="relative w-full overflow-hidden aspect-[1959/780] bg-white">
        <Image
          src={image}
          alt={title}
          width={1959}
          height={714}
          className="relative z-40 block w-full h-full object-cover select-none pointer-events-none"
          priority
        />

        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 -mt-10 md:-mt-24 xl:-mt-70 2xl:-mt-110">
          <h1 className="noto-jp font-bold text-[#FFFF04] tracking-wider drop-shadow text-[22px] sm:text-[30px] md:text-[42px] xl:text-[54px] 2xl:text-[64px]">
            {title}
          </h1>

          <h2 className="mt-2 max-w-[340px] md:max-w-none noto-serif-jp font-bold text-white tracking-[0.0557em] text-[10px] leading-[16px] sm:text-[12px] sm:leading-[18px] md:text-[18px] md:leading-[24px] xl:text-[26px] xl:leading-[30px] 2xl:text-[32px] 2xl:leading-[33px]">
            {breadcrumb}
          </h2>
        </div>
      </div>
    </div>
  );
}