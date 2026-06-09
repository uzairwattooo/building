import { Numans } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const serviceItems = [
    {
        id: "01",
        label: "Sports Flooring Systems",
        title: "スポーツ⽤⻑尺弾性塩ビシート(タラフレックス) 他",
        image: "/Assets/Group 1118 (1).png",
        reverse: true,
        description:
            "建物の価値を守り、機能性と美観を両⽴する施⼯を提供。耐久性の⾼い素材と確かな技術で、⻑く安⼼して使える建築を実 現します。",
    },
    {
        id: "02",
        label: "Sports Equipment & Installation",
        title: "スポーツ設備機器販売施⼯",
        image: "/Assets/Group 1120 (1).png",
        reverse: false,
        description:
            "強軽量で⾼耐⽕・⾼断熱のALCや押出成形セメント板を採⽤し、建物の安全性と快適性を向上。施⼯の精度とスピードを兼ね備えた⼯事で、ご要望にお応えします。",
    },
    {
        id: "03",
        label: "Interior Partition Systems",
        title: "トイレブース (コマニー)・可動間仕切⼯事",
        image: "/Assets/Group 1123 (1).png",
        reverse: true,
        description:
            "耐⽕性と耐久性に優れた波型スレートや耐⽕被覆施⼯で、安⼼・安全な建築をサポート。⽕災対策の強化や劣化防⽌に貢献します。",
    }
];
const processItems = [
    {
        id: "01",
        title: "ヒアリング・調査",
        description: "お客様のご要望を詳しく伺い、現場の状況を詳細に調査いたします。",
    },
    {
        id: "02",
        title: "ご提案・お見積り",
        description: "調査結果に基づき、最適な施工プランとお見積りをご提示いたします。",
    },
    {
        id: "03",
        title: "施工・現場管理",
        description: "安全と品質を重視し、責任を持って施工・管理を行います。",
    },
];
const numans = Numans({
    weight: "400",
    subsets: ["latin"],
});
export default function SportsFacilities() {

    return (
        <>
            <div className="relative w-full max-w-490 mx-auto overflow-hidden">
                <Image
                    src="/Assets/Group 1221.png"
                    alt=""
                    width={1920}
                    height={1220}
                    className="w-full h-auto min-h-[700px] md:min-h-[800px] xl:min-h-[1050px] 2xl:min-h-0 object-cover"
                />

                <div className="absolute inset-0 z-20 overflow-hidden">

            
                    <h1 className="absolute left-1/2 top-[80px] md:top-[120px] xl:top-[150px] 2xl:top-[180px] -translate-x-1/2 text-[#FFFF04] noto-jp font-bold tracking-[0.0566em] whitespace-nowrap text-[28px] md:text-[42px] xl:text-[54px] 2xl:text-[64px]">
                        事 業 内 容
                    </h1>

                    <p className="absolute left-1/2 top-[130px] md:top-[210px] xl:top-[250px] 2xl:top-[290px] -translate-x-1/2 text-white noto-serif-jp font-black tracking-[0.0557em] whitespace-nowrap text-[11px] md:text-[18px] xl:text-[26px] 2xl:text-[32px]">
                        HOME ＞ 事業内容 ＞ スポーツ設備・施設施⼯
                    </p>

                   
                    <div
                        className="
        absolute left-1/2 -translate-x-1/2
        top-[420px]
        md:top-[380px]
        xl:top-[700px]
        2xl:top-[860px]

        w-[92%]
        md:w-[85%]
        xl:w-[90%]
        2xl:w-[1650px]

        grid
        grid-cols-1
        xl:grid-cols-[380px_1fr]
        2xl:grid-cols-[520px_942px]

        gap-8
        xl:gap-16
        2xl:gap-[120px]

        items-start
        text-center
        xl:text-left
      "
                    >
                       
                        <div>
                            <h2 className="noto-serif-jp font-bold text-[#1CA8CB]
          text-[28px]
          md:text-[42px]
          xl:text-[50px]
          2xl:text-[64px]
          leading-[1.2]
          2xl:leading-[80px]
          max-w-full
          2xl:max-w-[486px]
        ">
                                スポーツ施設の未来を創る
                            </h2>

                            <p className="mt-2 noto-serif-jp text-[#FFA310]
          text-[14px]
          md:text-[16px]
          xl:text-[18px]
          2xl:text-[20px]
          font-normal
          leading-[40px]
          tracking-[0.001em]
        ">
                                Our Mission
                            </p>
                        </div>

                        <div>
                            <p className="noto-jp font-medium text-[#333333]
          text-[14px]
          md:text-[20px]
          xl:text-[24px]
          2xl:text-[32px]

          leading-[28px]
          md:leading-[38px]
          xl:leading-[44px]
          2xl:leading-[52px]

          tracking-[-0.0405em]
        ">
                                スポーツ施設は、単なる競技の場ではありません。それは、感動が生まれ、
                                健康が育まれ、コミュニティが繋がる大切な空間です。
                                株式会社千代田は、長年培った建築技術と、
                                最新のスポーツ設備機器を融合させ、
                                機能性と安全性を極めた施設施工を提供します。
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <section className="w-full max-w-490 mx-auto py-12 md:py-16 xl:py-20 2xl:py-24 px-4 overflow-hidden">
                {serviceItems.map((item) => (
                    <div
                        key={item.id}
                        className={`
                   mx-auto
                   mt-16 md:mt-20 xl:mt-24 2xl:mt-15
                   flex flex-col items-center
                   gap-8 md:gap-10 xl:gap-12 2xl:gap-[140px]
                   max-w-[1700px]
                   xl:flex-row
                   ${item.reverse ? "xl:flex-row-reverse" : ""}
                 `}
                    >
                       
                        <div
                            className={`
                     relative shrink-0
                     w-full max-w-[330px]
                     md:max-w-[600px]
                     xl:w-[520px] xl:max-w-none
                     2xl:w-[727px] 2xl:h-[364px]
                     text-center xl:text-left
                     ${item.reverse ? "2xl:-left-18 xl:-left-23" : "2xl:left-8 xl:left-20"}
                   `}
                        >
                            <p
                                className={`
                       ${numans.className}
                       font-normal tracking-[0.1em] text-[#96959454]
                       text-[58px] leading-none
                       md:text-[86px]
                       xl:text-[76px]
                       2xl:text-[128px] 2xl:leading-[27px]
                       ${item.reverse ? "xl:text-right" : ""}
                     `}
                            >
                                {item.id}
                            </p>

                            <p className="mt-4 md:mt-6 2xl:mt-8 noto-jp text-[13px] md:text-[16px] xl:text-[17px] 2xl:text-[20px] font-normal leading-[24px] md:leading-[32px] xl:leading-[36px] 2xl:leading-[40px] tracking-[0.1em] text-[#FFA310]">
                                {item.label}
                            </p>

                            <h2 className="noto-serif-jp text-[24px] md:text-[34px] xl:text-[38px] 2xl:text-[48px] font-bold leading-[1.25] 2xl:leading-[42px] tracking-[-0.043em] text-[#1CA8CB]">
                                {item.title}
                            </h2>

                            <div className="mt-4 2xl:mt-5 mx-auto xl:mx-0 w-[260px] md:w-[420px] xl:w-[460px] 2xl:w-[519.51px] rotate-0 2xl:rotate-[-0.34deg] border-t-[2px] border-[#FEC05D]" />

                            <p className="mt-5 md:mt-6 2xl:mt-8 noto-jp text-[14px] md:text-[18px] xl:text-[19px] 2xl:text-[25px] font-normal leading-[26px] md:leading-[34px] xl:leading-[35px] 2xl:leading-[42px] tracking-[-0.04em] text-[#333333]">
                                {item.description}
                            </p>
                        </div>

                        
                        <div
                            className={`
                     relative shrink-0
                     w-full max-w-[320px]
                     md:max-w-[520px]
                     xl:w-[610px] xl:max-w-none
                     2xl:w-[957px] 2xl:h-[704px]
                     aspect-[957/704]
                     ${item.reverse ? "2xl:-left-6 xl:-left-41 " : "2xl:left-5 xl:left-39"}
                   `}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </section>
            <section className="w-full max-w-490 mx-auto py-10 md:py-14 xl:py-16 2xl:py-20 px-4 2xl:px-0">
                <div className="relative overflow-hidden min-h-[760px] md:min-h-[720px] xl:min-h-[820px] 2xl:min-h-0">

                   
                    <Image
                        src="/Assets/Group 1224.png"
                        alt=""
                        width={1920}
                        height={650}
                        className="absolute inset-0 2xl:static w-full h-full 2xl:h-auto object-cover"
                    />

                    <div className="relative 2xl:absolute inset-0 z-10 flex">
                        <div className="w-full 2xl:w-[50%] px-5 md:px-10 xl:px-16 2xl:pl-[112px] pt-12 md:pt-16 xl:pt-20 2xl:pt-[120px]">

                            <p className="noto-jp text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-[30px] md:leading-[36px] 2xl:leading-[40px] tracking-[0.1em] text-white/70">
                                Our Commitment
                            </p>

                            <h2 className="mt-3 2xl:mt-4 noto-serif-jp text-[30px] md:text-[38px] xl:text-[35px] 2xl:text-[48px] font-bold leading-[42px] md:leading-[50px] xl:leading-[56px] 2xl:leading-[60px] tracking-[-0.043em] text-[#FFE79B]">
                                競技者の情熱を
                                <br />
                                最高の舞台で
                            </h2>

                            <div className="mt-5 md:mt-6 2xl:mt-8 w-full max-w-[580px] border-t-[2px] border-[#FEC05D]" />

                            <p className="mt-6 md:mt-8 2xl:mt-10 w-full max-w-[727px] xl:max-w-[580px] noto-jp text-[15px] md:text-[18px] xl:text-[17px] 2xl:text-[25px] font-normal leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-white">
                                私たちは、単に床を張る、設備を置くという作業を超え、
                                その場所で繰り広げられるドラマを想像します。
                                一歩踏み出した時の感触、ボールが弾む音、
                                そして競技者の安全。
                                すべてのディテールにこだわり、
                                最高のパフォーマンスを約束する空間を創り上げます。
                            </p>

                            <div className="mt-8 md:mt-10 2xl:mt-12 flex gap-4 md:gap-5 2xl:gap-6">
                                <div className="w-[4px] 2xl:w-[5px] h-[65px] md:h-[75px] 2xl:h-[81px] bg-[#FFA310]" />

                                <div>
                                    <h3 className="noto-jp text-[18px] md:text-[22px] 2xl:text-[25px] font-medium leading-[32px] md:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-[#1CA8CB]">
                                        ミリ単位の精度
                                    </h3>

                                    <p className="noto-jp text-[14px] md:text-[17px] 2xl:text-[20px] font-[350] leading-[28px] md:leading-[34px] 2xl:leading-[42px] tracking-[-0.04em] text-white">
                                        床の水平度や設備の設置位置など、極限の精度を追求します。
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-7 2xl:mt-8 flex gap-4 md:gap-5 2xl:gap-6">
                                <div className="w-[4px] 2xl:w-[5px] h-[65px] md:h-[75px] 2xl:h-[81px] bg-[#FFA310]" />

                                <div>
                                    <h3 className="noto-jp text-[18px] md:text-[22px] 2xl:text-[25px] font-medium leading-[32px] md:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-[#1CA8CB]">
                                        環境への配慮
                                    </h3>

                                    <p className="noto-jp text-[14px] md:text-[17px] 2xl:text-[20px] font-[350] leading-[28px] md:leading-[34px] 2xl:leading-[42px] tracking-[-0.04em] text-white">
                                        持続可能な素材選定と、自然に配慮した設計を推進します。
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-490 mx-auto bg-white py-16 md:py-24 2xl:py-32 px-4">
                <div className="mx-auto w-full max-w-[1455px]">
                    <div className="text-center">
                        <p className="noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] font-normal leading-[40px] tracking-[0.001em] text-[#1CA8CB]">
                            Process
                        </p>

                        <p className="noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                            - - - ——
                        </p>

                        <h2 className="mt-5 md:mt-6 2xl:mt-8 noto-serif-jp text-[34px] md:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-[1.2] 2xl:leading-[25px] tracking-[0.0566em] text-[#1CA8CB]">
                            施工の流れ
                        </h2>
                    </div>

                    <div className="mt-14 md:mt-20 2xl:mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 2xl:gap-[54px] place-items-center">
                        {processItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative h-[300px] w-[300px] md:h-[360px] md:w-[360px] xl:h-[390px] xl:w-[390px] 2xl:h-[437px] 2xl:w-[437px] rounded-[24px] md:rounded-[28px] 2xl:rounded-[31px] border-[3px] border-[#FDBF58] bg-white p-[10px] md:p-[12px] 2xl:p-[14px]"
                            >
                                <div className="relative h-full w-full rounded-[22px] md:rounded-[26px] 2xl:rounded-[31px] bg-[#E3F7FF] px-[24px] md:px-[34px] 2xl:px-[45px] pt-[90px] md:pt-[110px] 2xl:pt-[135px]">
                                    <span className="absolute right-[22px] md:right-[28px] 2xl:right-[35px] top-[35px] md:top-[45px] 2xl:top-[55px] font-['Numans'] text-[42px] md:text-[54px] 2xl:text-[64px] font-normal leading-[27px] tracking-[0.1em] text-[#96959454]">
                                        {item.id}
                                    </span>

                                    <h3 className="noto-jp text-[18px] md:text-[22px] 2xl:text-[25px] font-medium leading-[32px] md:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-[#1CA8CB]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 md:mt-4 2xl:mt-5 noto-jp text-[14px] md:text-[17px] 2xl:text-[20px] font-[350] leading-[26px] md:leading-[34px] 2xl:leading-[42px] tracking-[-0.04em] text-[#333333]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
