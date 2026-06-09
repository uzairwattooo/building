import PageHero from '../../components/PageHero';
import Image from 'next/image'
import React from 'react'
const newsData = [
    { date: "2026.XX.XX", title: "7月休業日のお知らせ" },
    { date: "2026.XX.XX", title: "令和8年度　休日カレンダー" },
    { date: "2026.XX.XX", title: "公式ウェブサイトを公開しました" },
    { date: "2026.XX.XX", title: "7月休業日のお知らせ" },
    { date: "2026.XX.XX", title: "令和8年度　休日カレンダー" },
    { date: "2026.XX.XX", title: "公式ウェブサイトを公開しました" },
    { date: "2026.XX.XX", title: "7月休業日のお知らせ" },
    { date: "2026.XX.XX", title: "令和8年度　休日カレンダー" },
    { date: "2026.XX.XX", title: "公式ウェブサイトを公開しました" },
    { date: "2026.XX.XX", title: "公式ウェブサイトを公開しました" },
];

export default function News() {
    return (
        <>
            <PageHero
                image="/Assets/Group 1215.png"
                title="お 知 ら せ"
                breadcrumb="HOME > お知らせ > お知らせ⼀覧"
            />
            <div className="flex flex-col items-center px-4 py-10 md:py-14 xl:py-16 2xl:py-20">
                <h2 className="noto-serif-jp font-bold tracking-[0.0566em] text-[#1CA8CB] text-[28px] leading-[36px] md:text-[42px] md:leading-[50px] xl:text-[54px] xl:leading-[60px] 2xl:text-[64px] 2xl:leading-[25px]">
                    募集要項
                </h2>

                <div className="mt-4 md:mt-6 xl:mt-8 flex flex-col gap-2">
                    <div className="w-28 md:w-40 xl:w-50 2xl:w-58 border-t-2 border-[#FEC05D] 2xl:mt-10" />
                    <div className="w-28 md:w-40 xl:w-50 2xl:w-58 border-t-2 border-[#FEC05D]" />
                </div>
            </div>
            <section className="w-full max-w-355.75 mx-auto px-4 md:px-6 xl:px-0 xl:max-w-300 pt-10 md:pt-14 xl:pt-20 pb-20 md:pb-32 xl:pb-50">
                {newsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center border-b-[2px] border-[#A9EAF7]"
                    >
                        {/* Date */}
                        <div className="w-full md:w-[180px] xl:w-[220px] 2xl:w-[250px] h-[60px] md:h-[80px] 2xl:h-[98px] flex items-center justify-center md:border-b-[8px] 2xl:border-b-[10px] border-[#A9EAF7]">
                            <span className="noto-serif-jp font-bold leading-none text-[#1CA8CB] text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                                .XX.XX
                            </span>
                        </div>

                        {/* Title */}
                        <div className="flex-1 py-4 md:py-0 md:pl-10 xl:pl-24 2xl:pl-44 text-center md:text-left">
                            <h3 className="noto-serif-jp font-bold leading-[1.4] text-[#1CA8CB] text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}
