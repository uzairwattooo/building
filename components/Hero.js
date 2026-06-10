import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-490 mx-auto bg-white overflow-hidden">
      <div className="relative w-full overflow-hidden bg-white aspect-[1959/1120] md:aspect-[16/10] sm:aspect-[16/11]">

        <Image
          src="/Assets/Group 1207.png"
          alt="Construction Worker"
          width={1959}
          height={1068}
          className="relative z-40 block h-full w-full select-none object-cover pointer-events-none"
          priority
        />

        <Image
          src="/Assets/Layer_2.png"
          alt=""
          width={1959}
          height={1068}
          className="absolute bottom-[4%] left-0 z-[60] block w-full h-auto select-none pointer-events-none"
          priority
        />

        <div className="absolute inset-0 z-[70] flex items-center justify-center pb-[10%] text-center px-4">
          <h1 className="noto-jp font-bold text-[#FEC05D] tracking-wider leading-relaxed drop-shadow text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[62px] 2xl:text-[96px]">
            今日も明日も、
            <br />
            変わらぬ信頼で守り続ける
          </h1>
        </div>
      </div>
    </section>
  );
}