import PageHero from '../../components/PageHero'
import Image from 'next/image'
import React from 'react'

export default function ProjectDetails() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1229 (1).png"
                    title="お お 知 ら"
                    breadcrumb="HOME > 施⼯実績  > 〇〇役場新庁舎建設⼯事"
                />
            </div>
            <section className="w-full max-w-[1700px] mx-auto px-4 md:px-8 xl:px-10 2xl:px-0 py-10 md:py-16 2xl:py-24">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 2xl:gap-[100px] mb-8 md:mb-10 2xl:mb-12">
                    <div className="w-[220px] h-[52px] md:w-[250px] md:h-[58px] 2xl:w-[284px] 2xl:h-[66px] rounded-full bg-white shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
                        <span className="noto-jp text-[15px] md:text-[17px] 2xl:text-[20px] font-normal leading-[27px] tracking-[-0.043em] text-[#FFA310]">
                            スポーツ設備・施設施⼯
                        </span>
                    </div>

                    <h1 className="noto-serif-jp text-[24px] md:text-[30px] xl:text-[34px] 2xl:text-[36px] font-bold leading-[1.3] tracking-[-0.043em] text-[#1CA8CB]">
                        〇〇役場新庁舎建設⼯事
                    </h1>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] 2xl:gap-[60px]">
                    <div className="w-full xl:w-[52%] 2xl:w-[833px]">
                        <Image
                            src="/Assets/Vector.png"
                            alt=""
                            width={920}
                            height={690}
                            className="w-full rounded-[24px] md:rounded-[32px] 2xl:rounded-[41px] object-cover"
                        />
                    </div>

                    <div className="w-full xl:w-[48%] 2xl:w-[760px] min-h-[360px] md:min-h-[460px] 2xl:h-[592px] rounded-[24px] md:rounded-[32px] 2xl:rounded-[41px] bg-[#8DD1E3] px-5 md:px-10 2xl:px-[80px] py-8 md:py-12 2xl:py-[70px]">
                        {[
                            ["所　在　地", "山形県酒田市"],
                            ["完　成", "2025年12月"],
                            ["施工内容", "外構工事・スポーツパーク他"],
                            ["工事種別", "ビル・土木・コンクリート"],
                        ].map(([label, value]) => (
                            <div key={label}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                    <span className="noto-jp text-[20px] md:text-[24px] 2xl:text-[28px] font-medium">
                                        {label}
                                    </span>

                                    <span className="noto-jp text-[18px] md:text-[21px] 2xl:text-[24px] font-normal tracking-[-0.0469em]">
                                        {value}
                                    </span>
                                </div>

                                <div className="mt-6 md:mt-7 2xl:mt-8 border-t border-white" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 2xl:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 2xl:flex 2xl:justify-between">
                    <Image
                        src="/Assets/Vector (1).png"
                        alt=""
                        width={260}
                        height={180}
                        className="rounded-[20px] md:rounded-[25px] w-full 2xl:w-129.75 object-cover"
                    />

                    <Image
                        src="/Assets/Vector (3).png"
                        alt=""
                        width={260}
                        height={180}
                        className="rounded-[20px] md:rounded-[25px] w-full 2xl:w-129.75 object-cover"
                    />

                    <Image
                        src="/Assets/Vector (2).png"
                        alt=""
                        width={260}
                        height={180}
                        className="rounded-[20px] md:rounded-[25px] w-full 2xl:w-129.75 object-cover"
                    />
                </div>
            </section>
        </>
    )
}
