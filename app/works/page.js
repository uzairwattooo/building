import Image from 'next/image'
import React from 'react'
const items = [
    "建築現場施⼯",
    "スポーツ設備・施設施⼯",
    "建築資材の販売",
];
const works = [
    {
        id: 1,
        image: "/Assets/Rectangle 89.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: true,
    },
    {
        id: 2,
        image: "/Assets/Rectangle 90.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: false,
    },
    {
        id: 3,
        image: "/Assets/Rectangle 93.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: false,
    },
    {
        id: 4,
        image: "/Assets/Rectangle 95.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: true,
    },
    {
        id: 5,
        image: "/Assets/Rectangle 97.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: true,
    },
    {
        id: 6,
        image: "/Assets/Rectangle 98.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: false,
    },
    {
        id: 7,
        image: "/Assets/Rectangle 102.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: false,
    },
    {
        id: 8,
        image: "/Assets/Rectangle 101.png",
        category: "建築現場施工",
        year: "2024",
        type: "Architecture",
        title: "〇〇屋根工事",
        description:
            "長年の経験と確かな技術で、お客様の理想を形にします。細部までこだわり抜いた施工で、安心と信頼をお届けします。",
        large: true,
    },
];
export default function Works() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <div className="relative w-full overflow-hidden h-[320px] md:h-[500px] xl:h-[650px] 2xl:h-[820px] bg-white">

                    <Image
                        src="/Assets/Group 1225.png"
                        alt="Construction Worker"
                        width={1959}
                        height={714}
                        className="absolute inset-0 z-0 w-full h-full object-cover select-none pointer-events-none"
                        priority
                    />

                    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4">

                        <h1
                            className="
                    noto-jp font-bold text-[#FFFF04] tracking-wider drop-shadow

                    text-[24px]
                    md:text-[36px]
                    xl:text-[48px]
                    2xl:text-[64px]
                "
                        >
                            お お 知 ら
                        </h1>

                        <h2
                            className="
                    mt-2 md:mt-3 xl:mt-4 2xl:mt-5

                    noto-serif-jp font-bold text-white

                    text-[10px]
                    md:text-[16px]
                    xl:text-[22px]
                    2xl:text-[32px]

                    leading-[16px]
                    md:leading-[22px]
                    xl:leading-[28px]
                    2xl:leading-[33px]

                    tracking-[0.0557em]
                "
                        >
                            HOME &gt; お知らせ &gt; 公式ウェブサイトを公開しました
                        </h2>

                    </div>
                </div>
            </div>
            <div className="max-w-373.5 mx-auto gap-10 xl:gap-50 flex items-center justify-between mt-10 md:mt-14 xl:mt-16 2xl:mt-15">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col">

                            <p className="
                    noto-serif-jp
                    font-bold
                    tracking-[-0.0469em]
                    text-[#1CA8CB]

                    text-[12px]
                    md:text-[20px]
                    xl:text-[28px]
                    2xl:text-[36px]

                    leading-[1.2]
                    text-center
                ">
                                {item}
                            </p>

                            {index !== items.length && (
                                <div className="
                        w-3 h-3
                        md:w-4 md:h-4
                        xl:w-5 xl:h-5
                        2xl:w-6 2xl:h-6

                        mt-3 md:mt-4 xl:mt-5 2xl:mt-6
                        bg-[#FEC05D]
                        mx-auto
                        rounded-full
                    " />
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <section className="w-full max-w-490 mx-auto bg-white py-16 md:py-24 xl:py-28 2xl:py-32 px-4">
                <div className="mx-auto max-w-[1640px] grid grid-cols-1 md:grid-cols-2 gap-x-8 xl:gap-x-10 2xl:gap-x-16 gap-y-14 xl:gap-y-18 2xl:gap-y-24">

                    {works.map((item) => (
                        <article key={item.id} className="w-full">

                            <div
                                className={`
                        relative w-full overflow-hidden

                        ${item.large
                                        ? "h-[260px] md:h-[380px] xl:h-[520px] 2xl:h-[700px]"
                                        : "h-[220px] md:h-[340px] xl:h-[460px] 2xl:h-[617px] mt-8 xl:mt-12 2xl:mt-20"
                                    }
                    `}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />

                                <div className="
                        absolute right-3 top-3
                        md:right-5 md:top-5
                        xl:right-6 xl:top-6
                        2xl:right-8 2xl:top-8

                        flex items-center justify-center

                        w-[110px]
                        md:w-[150px]
                        xl:w-[180px]
                        2xl:w-[209px]

                        h-[30px]
                        md:h-[36px]
                        xl:h-[40px]
                        2xl:h-[45px]

                        bg-[#FEC05D]
                    ">
                                    <span className="
                            noto-serif-jp font-bold text-[#1CA8CB]

                            text-[11px]
                            md:text-[14px]
                            xl:text-[17px]
                            2xl:text-[20px]

                            leading-none
                            tracking-[-0.0469em]
                        ">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-6 2xl:mt-8">

                                <div className="flex items-center gap-2 md:gap-3 xl:gap-4 2xl:gap-5">

                                    <span className="
                            noto-serif-jp font-bold text-[#FFA310]

                            text-[14px]
                            md:text-[18px]
                            xl:text-[21px]
                            2xl:text-[24px]
                        ">
                                        {item.year}
                                    </span>

                                    <span className="
                            h-px bg-black

                            w-[50px]
                            md:w-[80px]
                            xl:w-[100px]
                            2xl:w-[130px]
                        " />

                                    <span className="
                            noto-jp font-bold text-[#FFA310]

                            text-[12px]
                            md:text-[15px]
                            xl:text-[17px]
                            2xl:text-[20px]

                            tracking-[0.1em]
                        ">
                                        {item.type}
                                    </span>

                                </div>

                                <h3 className="
                        mt-3 md:mt-4 2xl:mt-5

                        noto-serif-jp
                        font-bold
                        text-[#1CA8CB]

                        text-[22px]
                        md:text-[30px]
                        xl:text-[38px]
                        2xl:text-[48px]

                        leading-[1.2]
                        2xl:leading-[52px]

                        tracking-[-0.0469em]
                    ">
                                    {item.title}
                                </h3>

                                <p className="
                        mt-4 md:mt-5 2xl:mt-7
                        w-full max-w-[579px]

                        noto-jp
                        font-normal
                        text-[#333333]

                        text-[13px]
                        md:text-[14px]
                        xl:text-[15px]
                        2xl:text-[16px]

                        leading-[20px]
                        md:leading-[22px]
                        xl:leading-[24px]
                        2xl:leading-[21px]

                        tracking-[-0.0469em]
                    ">
                                    {item.description}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>
            </section>
        </>
    )
}
