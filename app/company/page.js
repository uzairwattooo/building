import PageHero from '../../components/PageHero';
import { Noto_Serif_Tamil } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
const companyRows = [
    ["会 社 名", "株式会社千代田"],
    ["代表者名", "代表取締役　池田　求"],
    ["設立年月日", "XXXX年XX月XX日"],
    ["資 本 金", "XXXX万"],
    ["事業内容", "建築資材販売及び施工内装仕上げ工事、防音断熱工事、スポーツ設備・施設施工"],
    ["所 在 地", "〒999-8422\n山形県酒田市千代田字外野16\n0234-28-2110\n0234-28-2111"],
];
const timelineData = [
    { year: "2026", text: "山形県酒田市にて千代田工務店として創業" },
    { year: "2026", text: "組織変更により「株式会社 千代田」を設立" },
    { year: "2026", text: "内装仕上工事事業の許可を取得" },
    { year: "2026", text: "新社屋完成、現在の所在地に移転" },
    { year: "2026", text: "防水工事・金物工事部門を新設" },
    { year: "2026", text: "資本金を2,000万円に増資" },
    { year: "2026", text: "創業38周年を迎える" },
];
const notoSerifTamil = Noto_Serif_Tamil({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-noto-serif',
});
export default function Company() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1230.png"
                    title="会 社 情 報"
                    breadcrumb="HOME > 会社情報"
                />

            </div>
            <section
                className="w-full max-w-490 mx-auto bg-no-repeat "
                style={{
                    backgroundImage: "url('/Assets/Group 1210.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top center",
                }}
            >
                <section className="w-full max-w-490 mx-auto px-4 py-10 md:py-16 xl:py-20 2xl:py-24">
                    <div className="relative mx-auto grid max-w-490 grid-cols-1 items-center gap-10 md:gap-14 xl:grid-cols-2 xl:gap-12 2xl:gap-15">

                      
                        <div className="relative mx-auto w-full max-w-[340px] md:max-w-[560px] xl:max-w-[720px] 2xl:max-w-248 aspect-[500/420]">
                            <Image
                                src="/Assets/Group 1118 (3).png"
                                alt="Worker"
                                fill
                                className="absolute z-30 object-contain"
                            />
                        </div>

                        
                        <div className="relative w-full max-w-[733px] mx-auto xl:left-0 2xl:left-0 text-center xl:text-left">
                            <h2 className="noto-serif-jp font-bold text-[#1A3263] text-[28px] md:text-[34px] xl:text-[38px] 2xl:text-[40px]">
                                ご挨拶
                            </h2>

                            <p className="mt-3 md:mt-4 2xl:mt-5 noto-jp font-normal tracking-[0.1em] text-[#FEC05D] text-[14px] md:text-[17px] 2xl:text-[20px]">
                                Greeting
                            </p>

                            <h3 className="mt-3 noto-serif-jp font-bold tracking-[-0.043em] text-[#1CA8CB] text-[24px] md:text-[34px] xl:text-[34px] 2xl:text-[40px] leading-[1.5] 2xl:leading-[60px]">
                                信頼を未来へつなぐために
                            </h3>

                            <div className="mt-4 md:mt-5 2xl:mt-6 mx-auto xl:mx-0 w-full max-w-[320px] md:max-w-[520px] 2xl:max-w-[638px] border-t-2 border-[#FEC05D]" />

                            <p className="mt-6 md:mt-7 2xl:mt-8 noto-jp font-normal tracking-[-0.041em] text-[#333333] text-[14px] leading-[28px] md:text-[18px] md:leading-[34px] xl:text-[18px] xl:leading-[38px] 2xl:text-[25px] 2xl:leading-[42px]">
                                株式会社千代田は、創業以来、公共事業を中心に多くの現場に携わり、
                                確かな技術と誠実な姿勢で社会に貢献してまいりました。
                                <br className="hidden 2xl:block" />
                                大切にしてきたのは、「安心して任せられる存在であること」。
                                その想いのもと、厳選した商材と確かな施工品質にこだわり、
                                一つひとつの現場に真摯に向き合ってきました。
                            </p>

                            <p className="mt-6 md:mt-7 2xl:mt-8 noto-jp font-normal tracking-[-0.04em] text-[#333333] text-[14px] leading-[28px] md:text-[18px] md:leading-[34px] xl:text-[18px] xl:leading-[38px] 2xl:text-[25px] 2xl:leading-[42px]">
                                近年、建築の分野でも環境に配慮した取り組みが広がりつつあります。
                                <br className="hidden 2xl:block" />
                                私たちは、セルローズファイバーによる断熱工事など、
                                人にも地球にもやさしい技術を積極的に取り入れ、
                                持続可能な未来づくりに貢献していきたいと考えています。
                            </p>

                            <p className="mt-6 md:mt-7 2xl:mt-8 noto-jp font-normal tracking-[-0.041em] text-[#333333] text-[14px] leading-[28px] md:text-[18px] md:leading-[34px] xl:text-[18px] xl:leading-[38px] 2xl:text-[25px] 2xl:leading-[42px]">
                                これまで築いてきた信頼を大切にしながら、
                                地域社会の発展に寄与できる企業であり続けるため、
                                これからも挑戦を重ねてまいります。
                                <br className="hidden 2xl:block" />
                                今後とも、株式会社千代田をどうぞよろしくお願い申し上げます。
                            </p>

                            <div className="mt-8 md:mt-10 2xl:mt-15 flex flex-wrap items-center justify-center xl:justify-start gap-3 md:gap-5 2xl:gap-6">
                                <div className="w-[48px] md:w-[64px] 2xl:w-[78.5px] border-t border-[#1A3263]" />

                                <span className="noto-jp font-normal tracking-[0.0469em] text-[#1A3263] text-[18px] md:text-[24px] 2xl:text-[32px] leading-[27px]">
                                    代表取締役
                                </span>

                                <span className="noto-jp font-normal tracking-[0.0625em] text-[#1A3263] text-[18px] md:text-[24px] 2xl:text-[32px] leading-[27px]">
                                    池田
                                </span>

                                <span className="noto-jp font-normal text-[#1A3263] text-[18px] md:text-[24px] 2xl:text-[32px] leading-[27px]">
                                    求
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="relative w-full max-w-490 mt-6 md:mt-8 xl:mt-10 mx-auto
    min-h-[1200px] md:min-h-[900px] xl:min-h-[760px] 2xl:h-[719px]
    bg-no-repeat bg-center bg-cover overflow-hidden"
                    style={{
                        backgroundImage: "url('/Assets/Group 1231 (1).png')",
                    }}
                >
                    <div className="relative z-10 mx-auto max-w-[1437px] px-4 md:px-8 xl:px-10 2xl:px-0 pt-12 md:pt-16 xl:pt-20 2xl:pt-[92px]">

                      
                        <div className="text-center">
                            <p className="
                noto-jp text-[#FEC05D]
                text-[14px]
                md:text-[16px]
                xl:text-[18px]
                2xl:text-[20px]
                tracking-[0.3em]
            ">
                                Philosophy
                            </p>

                            <h2 className="
                noto-jp text-[#1A3263]
                text-[14px]
                md:text-[16px]
                xl:text-[18px]
                2xl:text-[20px]
                tracking-[0.3em]
            ">
                                経営理念
                            </h2>

                            <div className="mx-auto mt-4 2xl:mt-[18px] w-[120px] md:w-[160px] 2xl:w-[197px] border-t-2 border-[#FEC05D]" />
                        </div>

                       
                        <div className="
            mt-12 md:mt-16 xl:mt-20 2xl:mt-[105px]

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-8
            md:gap-10
            xl:gap-12
            2xl:gap-[120px]
        ">

                       
                            <div className="w-full max-w-[399px] mx-auto">
                                <div className="w-[60px] 2xl:w-[74.5px] border-t-2 border-[#FEC05D]" />

                                <h3 className="
                    mt-5
                    noto-serif-jp font-bold text-[#1CA8CB]
                    text-[24px]
                    md:text-[26px]
                    xl:text-[28px]
                    2xl:text-[32px]
                    leading-[1.4]
                ">
                                    公共事業を支える確かな
                                    <br />
                                    技術と品質の追求
                                </h3>

                                <p className="
                    mt-5
                    noto-jp text-[#333333]
                    text-[15px]
                    md:text-[17px]
                    xl:text-[18px]
                    2xl:text-[20px]
                    leading-[28px]
                    xl:leading-[32px]
                    2xl:leading-[34px]
                ">
                                    創業以来培ってきた施工力と信頼を
                                    <br />
                                    基盤に、行政機関・公共施設へ安定
                                    <br />
                                    した品質と安心を提供し続けます。
                                </p>
                            </div>

                          
                            <div className="w-full max-w-[399px] mx-auto">
                                <div className="w-[60px] 2xl:w-[74.5px] border-t-2 border-[#FEC05D]" />

                                <h3 className="
                    mt-5
                    noto-serif-jp font-bold text-[#1CA8CB]
                    text-[24px]
                    md:text-[26px]
                    xl:text-[28px]
                    2xl:text-[32px]
                    leading-[1.4]
                ">
                                    環境に配慮した持続可能
                                    <br />
                                    な建築の推進
                                </h3>

                                <p className="
                    mt-5
                    noto-jp text-[#333333]
                    text-[15px]
                    md:text-[17px]
                    xl:text-[18px]
                    2xl:text-[20px]
                    leading-[28px]
                    xl:leading-[32px]
                    2xl:leading-[34px]
                ">
                                    セルローズファイバーをはじめとす
                                    <br />
                                    る環境負荷の少ない断熱工法を活用
                                    <br />
                                    し、人にも地球にもやさしい建築を
                                    <br />
                                    実現します。
                                </p>
                            </div>

                         
                            <div className="w-full max-w-[399px] mx-auto md:col-span-2 xl:col-span-1">
                                <div className="w-[60px] 2xl:w-[74.5px] border-t-2 border-[#FEC05D]" />

                                <h3 className="
                    mt-5
                    noto-serif-jp font-bold text-[#1CA8CB]
                    text-[24px]
                    md:text-[26px]
                    xl:text-[28px]
                    2xl:text-[32px]
                    leading-[1.4]
                ">
                                    社会との信頼関係を広げ、
                                    <br />
                                    新たな価値を創造する
                                </h3>

                                <p className="
                    mt-5
                    noto-jp text-[#333333]
                    text-[15px]
                    md:text-[17px]
                    xl:text-[18px]
                    2xl:text-[20px]
                    leading-[28px]
                    xl:leading-[32px]
                    2xl:leading-[34px]
                ">
                                    得意とする建築を活かし、地域や関
                                    <br />
                                    係団体とのつながりを深めながら、
                                    <br />
                                    未来につながる協働と価値を生み出
                                    <br />
                                    します。
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto py-16 md:py-24 2xl:py-32 px-4">
                    <div className="mx-auto flex flex-col xl:flex-row w-full max-w-[1690px] gap-12 xl:gap-[120px] 2xl:gap-[220px]">

                        <div className="w-full xl:w-[220px] text-center shrink-0">
                            <p className="noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] font-normal leading-[40px] tracking-[0.1em] text-[#FEC05D]">
                                Overview
                            </p>

                            <h2 className="mt-2 noto-serif-jp text-[30px] md:text-[36px] 2xl:text-[40px] font-bold leading-[45px] text-[#1A3263]">
                                会社概要
                            </h2>

                            <div className="mt-5 2xl:mt-6 w-[160px] md:w-[190px] 2xl:w-[217px] border-t-[2px] mx-auto border-[#FEC05D]" />

                            <p className="mt-6 xl:mt-8 2xl:mt-10 noto-jp text-[15px] md:text-[18px] 2xl:text-[20px] font-normal leading-[34px] md:leading-[40px] 2xl:leading-[45px] text-[#333333]">
                                確かな技術と信頼で、
                                <br />
                                地域の未来を創造する。
                            </p>
                        </div>

                        <div className="w-full xl:flex-1 2xl:w-[1224px]">
                            {companyRows.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] 2xl:grid-cols-[220px_1fr] border-b-[2px] border-dashed border-[#1A3263] py-5 md:py-7 2xl:py-8 gap-3 md:gap-0"
                                >
                                    <p className="noto-jp text-[18px] md:text-[24px] 2xl:text-[28px] font-medium leading-[27px] text-[#1CA8CB]">
                                        {label}
                                    </p>

                                    <p className="whitespace-pre-line noto-jp text-[16px] md:text-[23px] 2xl:text-[28px] font-normal leading-[28px] md:leading-[32px] 2xl:leading-[34px] tracking-[-0.0469em] text-[#333333]">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col mt-16 md:mt-24 2xl:mt-30 items-center text-center">
                        <p className="noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] font-normal leading-[40px] tracking-[0.1em] text-[#FEC05D]">
                            History
                        </p>

                        <h2 className="mt-2 noto-serif-jp text-[30px] md:text-[36px] 2xl:text-[40px] font-bold leading-[45px] text-[#1A3263]">
                            沿革
                        </h2>

                        <div className="mt-5 2xl:mt-6 w-[160px] md:w-[190px] 2xl:w-[217px] border-t-[2px] border-[#FEC05D]" />
                    </div>
                </section>
                <section className="w-full bg-[#FFF4D0] mb-20 md:mb-40 2xl:mb-100 py-16 md:py-24 2xl:py-20 px-4 select-none overflow-hidden">
                    <div className="mx-auto w-full max-w-[1300px] flex flex-col gap-8 md:gap-10 2xl:gap-12 relative">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={`${item.year}-${index}`}
                                    className={`flex items-center w-full min-h-[110px] md:min-h-[125px] 2xl:min-h-[140px] ${isEven ? "flex-row" : "flex-row-reverse"
                                        }`}
                                >
                                    <div
                                        className={`w-1/2 flex ${isEven
                                                ? "justify-end pr-3 md:pr-8 2xl:pr-16"
                                                : "justify-start pl-3 md:pl-8 2xl:pl-16"
                                            }`}
                                    >
                                        <p className="font-sans text-[11px] leading-[20px] md:text-[20px] md:leading-[32px] xl:text-[24px] xl:leading-[36px] 2xl:text-[28px] 2xl:leading-[40px] font-normal text-[#4EA1D3] tracking-[0.1em]">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div
                                        className={`w-1/2 flex flex-col justify-center ${isEven
                                                ? "items-start pl-3 md:pl-8 2xl:pl-16"
                                                : "items-end pr-3 md:pr-8 2xl:pr-16"
                                            }`}
                                    >
                                        <span
                                            className={`${notoSerifTamil.className} font-serif text-[34px] leading-[34px] md:text-[64px] md:leading-[48px] xl:text-[78px] xl:leading-[52px] 2xl:text-[96px] 2xl:leading-[40px] font-bold text-[#FFA310] tracking-[0.1em] h-[42px] md:h-[58px] 2xl:h-[70px] flex items-center`}
                                            style={{ fontFamily: "var(--font-noto-serif), serif" }}
                                        >
                                            {item.year}
                                        </span>

                                        <div
                                            className="w-[64px] md:w-[100px] 2xl:w-[136px] h-0 mt-2 md:mt-3 2xl:mt-4 border-t-2 opacity-100"
                                            style={{
                                                borderColor: "#1A3263",
                                                borderStyle: "dashed",
                                                borderDasharray: "4 4",
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </section>
        </>
    )
}
