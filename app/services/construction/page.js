import { Numans } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const serviceItems = [
    {
        id: "01",
        label: "Roofing, Exterior, Interior & Metalwork",
        title: "屋根・外壁・内装・⾦物⼯事",
        image: "/Assets/Group 111.png",
        reverse: false,
        description:
            "建物の外観や内部を仕上げる基本的な施⼯です。屋根や外壁は耐久性や防⽔性を⾼め、内装⼯事では快適な居住空間を整えます。さらに⾦物⼯事では補強や装飾を⾏い、安全性と美観を両⽴させます。",
    },
    {
        id: "02",
        label: "LGS Ceiling, Partition & Boardwork",
        title: "LGS天井・間仕切・ボード⼯事",
        image: "/Assets/Group 1118.png",
        reverse: true,
        description:
            "軽量鉄⾻（LGS）を⽤いた天井・間仕切施⼯で、⾃由な空間設計を実現。快適な室内環境を作るための柔軟な施⼯をご提案します。",
    },
    {
        id: "03",
        label: "Steel Floor Base & Flooring",
        title: "鋼製床下地・フローリング⼯事",
        image: "/Assets/Group 1120.png",
        reverse: false,
        description:
            "強度・耐久性に優れた鋼製床下地と美しさと機能性を兼ね備えたフローリング施⼯で、使いやすく⻑持ちする空間を提供します。",
    },
    {
        id: "04",
        label: "Custom Metal Panels & Fabrication",
        title: "ステンレスorアルミパネル他、製作⾦物設計施⼯",
        image: "/Assets/Group 1123.png",
        reverse: true,
        description:
            "耐⽕性と耐久性に優れた波型スレートやステンレス・アルミなどの⾦属パネルをオーダーメイドで設計・施⼯。デザイン性と機能性を追求し、⾼品質な仕上がりを保証します。",
    },
    {
        id: "05",
        label: "Coping, EXP & Handrails",
        title: "笠⽊・EXP・⼿摺(各種)⼯事",
        image: "/Assets/Group 1124.png",
        reverse: false,
        description:
            "安全性とデザイン性を兼ね備えた笠⽊・EXP・各種⼿摺の施⼯。使い勝⼿と耐久性を考慮した施⼯で、安⼼・快適な建築を実現します。",
    },
    {
        id: "06",
        label: "Cellulose Fiber Insulation",
        title: "セルローズファイバー断熱防⾳⼯事",
        image: "/Assets/Group 1127.png",
        reverse: true,
        description:
            "環境に優しく、⾼い断熱・防⾳性能を誇るセルローズファイバーを使⽤し、快適な居住空間を創造。省エネと静寂性を両⽴する施⼯をご提供します。",
    },
];
const numans = Numans({
    weight: "400",
    subsets: ["latin"],
});
export default function Construction() {
    return (
        <>
            <div className="relative w-full max-w-490 mx-auto overflow-hidden">
                <Image
                    src="/Assets/Group 1219.png"
                    alt=""
                    width={1920}
                    height={1220}
                    className="w-full h-auto min-h-[560px] md:min-h-[760px] xl:min-h-[1053px] 2xl:min-h-344 object-cover"
                />

                <div className="absolute inset-0 z-20 overflow-hidden">
                    <h1 className="absolute top-[70px] md:top-[115px] xl:top-[145px] 2xl:top-[180px] left-1/2 -translate-x-1/2 text-[#FFFF04] noto-jp font-bold text-[28px] md:text-[44px] xl:text-[56px] 2xl:text-[64px] tracking-[0.0566em] whitespace-nowrap">
                        事 業 内 容
                    </h1>

                    <p className="absolute top-[120px] md:top-[195px] xl:top-[240px] 2xl:top-[290px] left-1/2 -translate-x-1/2 text-white noto-serif-jp font-black text-[12px] md:text-[20px] xl:text-[28px] 2xl:text-[32px] tracking-[0.0557em] whitespace-nowrap">
                        HOME ＞ 事業内容 ＞ 建築現場施工
                    </p>

                    <div className="absolute left-[25px] md:left-[60px] xl:left-[100px] 2xl:left-[143px] top-[330px] md:top-[500px] xl:top-[560px] 2xl:top-[730px] rotate-90 origin-left">
                        <h2 className="text-[#FFE5BA] font-semibold text-[70px] md:text-[120px] xl:text-[150px] 2xl:text-[200px] leading-[40px] md:leading-[55px] 2xl:leading-[70px] tracking-[-0.0405em]">
                            CONST
                        </h2>
                    </div>

                    <div className="absolute left-1/2 top-[360px] md:top-[530px] xl:top-[700px] 2xl:top-[860px] -translate-x-1/2 text-center">
                        <h2 className="noto-serif-jp font-bold text-[30px] md:text-[44px] xl:text-[56px] 2xl:text-[64px] tracking-[0.0566em] text-[#1CA8CB] whitespace-nowrap">
                            建築現場施工
                        </h2>

                        <Image
                            src="/Assets/Asset 3 1.png"
                            alt=""
                            width={480}
                            height={90}
                            className="absolute left-1/2 top-[35px] md:top-[48px] xl:top-[58px] 2xl:top-15 -translate-x-1/2 -translate-y-1/2 -z-10 w-[260px] md:w-[430px] xl:w-[560px] 2xl:w-[658px]"
                        />

                        <div className="mt-4 md:mt-5 flex flex-col gap-2 items-center">
                            <div className="w-[220px] md:w-[360px] xl:w-[430px] 2xl:w-[480px] border-t-2 border-[#FEC05D]" />
                            <div className="w-[220px] md:w-[360px] xl:w-[430px] 2xl:w-[480px] border-t-2 border-[#FEC05D]" />
                        </div>

                        <p className="mt-6 md:mt-10 xl:mt-12 2xl:mt-15 w-[330px] md:w-[720px] xl:w-[1120px] 2xl:w-[1626px] mx-auto text-center text-[#333333] noto-jp font-medium text-[13px] leading-[24px] md:text-[20px] md:leading-[34px] xl:text-[27px] xl:leading-[44px] 2xl:text-[32px] 2xl:leading-[52px] tracking-[-0.0405em]">
                            建物の基本構造や内装を支える施工業務を担当。屋根、外壁、床、間仕切、
                            防水工事など建築工事を行い、耐火性(耐火被覆・ロークウール吹付)や
                            断熱性能(セルローズファイバー)を向上させるための施工を提供します。
                        </p>
                    </div>
                </div>
            </div>
            <section className="w-full max-w-490 mx-auto bg-white py-12 md:py-20 xl:py-30 2xl:py-40 overflow-hidden px-4">
                <div className="mx-auto max-w-[1540px] flex flex-col lg:grid lg:grid-cols-[260px_1fr] xl:grid-cols-[320px_1fr] 2xl:grid-cols-[420px_1fr] items-center gap-10 xl:gap-24 2xl:gap-[400px]">
                    <div className="flex justify-center gap-6 md:gap-10 xl:gap-[80px]">

                        <div className="writing-mode-vertical noto-serif-jp font-semibold text-[#1CA8CB]
        text-[28px] md:text-[42px] xl:text-[54px] 2xl:text-[64px]
        leading-[1.1] tracking-[-0.0405em]">
                            私たちの誇りです。
                        </div>

                        <div className="writing-mode-vertical noto-serif-jp font-semibold text-[#1CA8CB]
        text-[28px] md:text-[42px] xl:text-[54px] 2xl:text-[64px]
        leading-[1.1] tracking-[-0.0405em]">
                            「 誠実な施工 」が、
                        </div>

                    </div>

                    <div className="w-full max-w-[807px] text-center lg:text-left">

                        <p className="noto-jp font-normal text-[#333333]
        text-[14px] md:text-[18px] 2xl:text-[20px]
        leading-[28px] md:leading-[36px] 2xl:leading-[40px]">
                            President Message
                        </p>

                        <h2 className="mt-4 md:mt-6 noto-serif-jp font-bold text-[#1CA8CB]
        text-[32px] md:text-[48px] xl:text-[58px] 2xl:text-[64px]
        leading-[1.2] tracking-[0.0566em]">
                            代表挨拶
                        </h2>

                        <p className="mt-8 md:mt-12 xl:mt-16 noto-jp font-normal text-[#333333]
        text-[16px] md:text-[22px] xl:text-[26px] 2xl:text-[28px]
        leading-[32px] md:leading-[38px] xl:leading-[42px]
        tracking-[-0.0405em]">
                            創業以来、私たちは「お客様の期待を超える施工」を追求してまいりました。
                            建築業界を取り巻く環境は日々変化していますが、私たちの「誠実さ」と
                            「技術へのこだわり」は変わりません。これからも、地域の皆様に愛される
                            企業として、より良い空間づくりに貢献してまいります。
                        </p>

                        <div className="mt-10 md:mt-12 xl:mt-14 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">

                            <div className="relative flex h-[70px] w-[70px] md:h-[82px] md:w-[82px] 2xl:h-[96px] 2xl:w-[96px] items-center justify-center rounded-full border-[3px] border-[#1CA8CB]">
                                <div className="flex h-[54px] w-[54px] md:h-[64px] md:w-[64px] 2xl:h-[76px] 2xl:w-[76px] items-center justify-center rounded-full bg-[#BFEAF1]">
                                    <span className="noto-serif-jp text-[24px] md:text-[28px] 2xl:text-[32px] text-[#1CA8CB]">
                                        千
                                    </span>
                                </div>
                            </div>

                            <div>
                                <p className="noto-jp font-bold text-[#333333]
            text-[18px] md:text-[22px] 2xl:text-[24px]
            leading-[30px]">
                                    President & CEO
                                </p>

                                <h3 className="mt-2 md:mt-3 noto-serif-jp font-bold text-[#1CA8CB]
            text-[32px] md:text-[40px] xl:text-[44px] 2xl:text-[48px]
            leading-none">
                                    千代田 太郎
                                </h3>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section
                className="w-full max-w-490 mx-auto bg-no-repeat"
                style={{
                    backgroundImage: "url('/Assets/Group 1210.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top center",
                }}
            >
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
            </section>

        </>
    )
}
