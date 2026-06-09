import PageHero from '../../components/PageHero'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1216.png"
                    title="お お 知 ら"
                    breadcrumb="HOME > お知らせ > 公式ウェブサイトを公開しました"
                />

            </div>
            <section className="w-full bg-white py-10 md:py-16 xl:py-20 2xl:pb-65 px-4">
                <div className="relative mx-auto w-full max-w-[1295px] overflow-hidden bg-[#E6F7FA] rounded-[10px]">

                    <Image
                        src="/Assets/Group 1217.png"
                        alt=""
                        width={1295}
                        height={1390}
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />

                    <div className="relative z-10 px-5 md:px-10 xl:px-[50px] 2xl:px-[70px] pt-8 md:pt-12 xl:pt-[60px] pb-10">

                        
                        <div className="flex flex-wrap items-center gap-3 md:gap-5">
                            <span className="bg-[#1CA8CB] px-3 py-1 md:px-5 md:py-2 noto-serif-jp text-[18px] md:text-[24px] 2xl:text-[32px] font-bold leading-none text-white">
                                Info
                            </span>

                            <span className="noto-serif-jp text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-normal tracking-[0.05em] text-[#555555]">
                                2026.XX.XX
                            </span>
                        </div>

                       
                        <h1 className="mt-6 md:mt-8 xl:mt-10 noto-serif-jp font-bold tracking-[0.055em] text-[#1CA8CB] text-[26px] leading-[40px] md:text-[42px] md:leading-[58px] xl:text-[54px] xl:leading-[72px] 2xl:text-[64px] 2xl:leading-[90px]">
                            公式ウェブサイトを公開いたしました
                        </h1>

                       
                        <div className="mt-8 md:mt-10 xl:mt-12 flex flex-col gap-2">
                            <div className="h-px w-full bg-[#FEC05D]" />
                            <div className="h-px w-full bg-[#FEC05D]" />
                        </div>

                        
                        <div className="mt-8 md:mt-12 xl:mt-15 flex justify-center">
                            <Image
                                src="/Assets/Group 100.png"
                                alt="Map"
                                width={685}
                                height={685}
                                className="w-[220px] md:w-[420px] xl:w-[560px] 2xl:w-[685px] h-auto object-cover"
                            />
                        </div>

                     
                        <p className="mx-auto mt-8 md:mt-12 xl:mt-15 mb-5 md:mb-8 xl:mb-10 w-full max-w-[1105px] text-center noto-jp font-normal text-[#333333] tracking-[-0.04em] text-[14px] leading-[28px] md:text-[18px] md:leading-[38px] xl:text-[22px] xl:leading-[44px] 2xl:text-[24px] 2xl:leading-[48px]">
                            このたび、当社の公式ウェブサイトを公開いたしました。
                            <br />
                            建材施工・工事、スポーツ施設設備の施工、正規代理店としての製品販売から工事まで一括対応で
                            <br className="hidden xl:block" />
                            きる当社の強みを、より分かりやすくお伝えできる内容となっております。
                            <br />
                            最新情報や施工事例も随時更新してまいりますので、ぜひご覧ください。
                            <br />
                            今後ともよろしくお願いいたします。
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}
