import { Numans } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const serviceItems = [
    {
        id: "01",
        label: "Exterior Solutions",
        title: "外構商品販売施⼯(各種フェンス・カーポート・物置・グレーチング他)",
        image: "/Assets/Group 1118 (2).png",
        reverse: true,
        description:
            "建物の価値を守り、機能性と美観を両⽴する施⼯を提供。耐久性の⾼い素材と確かな技術で、⻑く安⼼して使える建築を実現します。",
    },
    {
        id: "02",
        label: "Functional Coating",
        title: "機能塗装・断熱(SGハイコート)・防汚(SGコート)販売施⼯",
        image: "/Assets/Group 1120 (2).png",
        reverse: false,
        description:
            "軽量で⾼耐⽕・⾼断熱のALCや押出成形セメント板を採⽤し、建物の安全性と快適性を向上。施⼯の精度とスピードを兼ね 備えた⼯事で、ご要望にお応えします。",
    },
    {
        id: "03",
        label: "Waterproofing Expert",
        title: "防⽔⼯事・シーリング⼯事全般",
        image: "/Assets/Group 1123 (3).png",
        reverse: true,
        description:
            "耐⽕性と耐久性に優れた波型スレートや耐⽕被覆施⼯で、安⼼・安全な建築をサポート。⽕災対策の強化や劣化防⽌に貢献します。",
    }
];
const numans = Numans({
    weight: "400",
    subsets: ["latin"],
});
export default function BuildingMaterials() {

    return (
        <>
            <div className="relative w-full max-w-490 mx-auto min-h-[850px] md:min-h-[1050px] xl:min-h-0 overflow-hidden">

                <Image
                    src="/Assets/Group 1222.png"
                    alt=""
                    width={1920}
                    height={1220}
                    className="w-full h-[850px] md:h-[1050px] xl:h-auto object-cover"
                />

                <div className="absolute inset-0 z-20 overflow-hidden">

                
                    <h1
                        className="
                absolute left-1/2 -translate-x-1/2
                top-[70px] md:top-[120px] xl:top-[180px]
                text-[#FFFF04]
                noto-jp font-bold
                text-[28px] md:text-[42px] xl:text-[64px]
                tracking-[0.0566em]
                whitespace-nowrap
            "
                    >
                        事 業 内 容
                    </h1>

                    <p
                        className="
                absolute left-1/2 -translate-x-1/2
                top-[120px] md:top-[200px] xl:top-[290px]
                text-white
                noto-serif-jp font-black
                text-[12px] md:text-[18px] xl:text-[32px]
                tracking-[0.0557em]
                whitespace-nowrap
            "
                    >
                        HOME ＞ 事業内容 ＞ 建築資材の販売
                    </p>
                    <div
                        className="
                absolute left-1/2 -translate-x-1/2
                top-[540px] md:top-[720px] xl:top-[540px] 2xl:top-[840px]
                text-center
                w-[95%] xl:w-auto
            "
                    >
                        <h2
                            className="
                    noto-serif-jp font-bold text-[#1CA8CB]
                    text-[30px] md:text-[48px] xl:text-[50px] 2xl:text-[64px]
                    tracking-[0.0566em]
                "
                        >
                            建築資材の販売
                        </h2>

                        <Image
                            src="/Assets/Asset 3 1.png"
                            alt=""
                            width={480}
                            height={90}
                            className="
                    absolute  left-1/2 top-12
                    -translate-x-1/2 -translate-y-1/2
                    -z-10
                    w-[260px] md:w-[420px] xl:w-[408px] 2xl:w-[608px]
                "
                        />

                        <div className="mt-4 xl:mt-5 flex flex-col gap-2 items-center">
                            <div className="w-[220px] md:w-[320px] xl:w-[480px] border-t-2 border-[#FEC05D]" />
                            <div className="w-[220px] md:w-[320px] xl:w-[480px] border-t-2 border-[#FEC05D]" />
                        </div>

                       
                        <p
                            className="
                    mt-8 md:mt-10 xl:mt-15
                    w-full md:w-[90%] xl:w-[1126px] 2xl:w-[1626px]
                    mx-auto
                    text-center
                    text-[#333333]
                    noto-jp font-medium
                    text-[15px] md:text-[22px] xl:text-[22px] 2xl:text-[32px]
                    leading-[28px] md:leading-[40px] xl:leading-[52px]
                    tracking-[-0.0405em]
                "
                        >
                            建物の外装設備や防水対策を専門にした施工業務を担当。
                            フェンスやカーポートなどの外構設備、建物の防水工事、
                            機能的な塗装・断熱を行い、建物の耐久性を高めるとともに、
                            快適な環境を提供いたします。
                        </p>
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

        </>
    )
}
