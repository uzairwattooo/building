import PageHero from '../../components/PageHero'
import Image from 'next/image'
import React from 'react'

export default function ContactUS() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1207 (2).png"
                    title="採 ⽤ 情 報"
                    breadcrumb="HOME > 会社情報"
                />

            </div>

            <div className="mx-auto flex max-w-[1920px] flex-col items-center px-4 text-center">

                <p
                    className="
            noto-jp font-normal text-[#FFA310]
            text-[14px]
            md:text-[16px]
            xl:text-[18px]
            2xl:text-[20px]
            leading-[28px]
            md:leading-[32px]
            2xl:leading-[40px]
            tracking-[0.4em]
        "
                >
                    Contact
                </p>

                <h2
                    className="
            mt-2 md:mt-3
            noto-serif-jp font-bold text-[#1A3263]
            text-[24px]
            md:text-[30px]
            xl:text-[36px]
            2xl:text-[40px]
            leading-[30px]
            md:leading-[36px]
            xl:leading-[40px]
            2xl:leading-[45px]
            tracking-[0.1em]
        "
                >
                    お問い合わせ
                </h2>

                <div
                    className="
            mt-4 md:mt-5 2xl:mt-6
            w-[140px]
            md:w-[180px]
            xl:w-[220px]
            2xl:w-[267px]
            border-t-[2px]
            border-[#FEC05D]
        "
                />
            </div>
            <section
                className="relative w-full max-w-490 mx-auto overflow-hidden h-[1700px] md:h-[1850px] xl:h-[1950px] 2xl:h-[2100px] px-4 xl:px-10 2xl:px-0"
                style={{
                    backgroundImage: "url('/Assets/Group 12081.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                }}
            >
                <div className="mx-auto flex max-w-[1920px] flex-col items-center">

                    <p className="mt-8 md:mt-10 2xl:mt-12 w-full max-w-[889px] text-center noto-jp font-normal text-[#333333] text-[15px] md:text-[21px] xl:text-[24px] 2xl:text-[28px] leading-[26px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px] tracking-[-0.042em]">
                        弊社へのご質問、ご相談、お見積もりのご依頼など、お気軽にお問い合わせください。
                        内容を確認後、担当者より折り返しご連絡させていただきます。
                    </p>


                    <div className="mt-12 md:mt-16 xl:mt-20 2xl:mt-[110px] flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 xl:gap-[160px] 2xl:gap-[260px]">

                        <div className="text-center">
                            <div className="mx-auto flex h-[78px] w-[78px] md:h-[100px] md:w-[100px] 2xl:h-[132px] 2xl:w-[132px] items-center justify-center rounded-full bg-[#1CA8CB]">
                                <span className="text-[34px] md:text-[46px] 2xl:text-[60px] text-white">
                                    ☎
                                </span>
                            </div>

                            <h3 className="mt-6 md:mt-8 2xl:mt-10 noto-jp font-normal tracking-[-0.0039em] text-[#1A3263] text-[18px] md:text-[23px] 2xl:text-[28px] leading-[27px]">
                                お電話でのお問い合わせ
                            </h3>

                            <p className="mt-4 md:mt-5 2xl:mt-6 noto-jp font-bold tracking-[-0.0039em] text-[#1A3263] text-[28px] md:text-[34px] 2xl:text-[40px] leading-[27px]">
                                0234-28-2110
                            </p>

                            <p className="mt-5 md:mt-6 2xl:mt-8 noto-jp font-light tracking-[-0.0039em] text-[#707070] text-[14px] md:text-[17px] 2xl:text-[20px] leading-[27px]">
                                受付時間：平日 9:00〜18:00
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mx-auto flex h-[78px] w-[78px] md:h-[100px] md:w-[100px] 2xl:h-[132px] 2xl:w-[132px] items-center justify-center rounded-full bg-[#1CA8CB]">
                                <span className="text-[34px] md:text-[46px] 2xl:text-[60px] text-white">
                                    ✉
                                </span>
                            </div>

                            <h3 className="mt-6 md:mt-8 2xl:mt-10 noto-jp font-normal tracking-[-0.0039em] text-[#1A3263] text-[18px] md:text-[23px] 2xl:text-[28px] leading-[27px]">
                                メールでのお問い合わせ
                            </h3>

                            <p className="mt-4 md:mt-5 2xl:mt-6 w-full max-w-[430px] noto-jp font-light tracking-[-0.0039em] text-[#707070] text-[14px] md:text-[17px] 2xl:text-[20px] leading-[26px] md:leading-[30px] 2xl:leading-[32px]">
                                フォームより24時間受け付けております。
                                <br />
                                通常2〜3営業日以内に返信いたします。
                            </p>
                        </div>
                    </div>


                    <div className="mt-16 md:mt-24 xl:mt-32 2xl:mt-[220px] w-full max-w-[1339px]">
                        {[
                            "お問い合わせ種別",
                            "お名前",
                            "フリガナ",
                            "メールアドレス",
                            "会社名",
                            "郵便番号",
                            "都道府県",
                            "住所",
                            "電話番号",
                            "ＦＡ",
                            "お問い合わせ内容",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex h-[58px] md:h-[72px] xl:h-[82px] 2xl:h-[90px] items-center border-b border-dotted border-[#FEC05D]"
                            >
                                <span className="noto-jp font-normal tracking-[-0.0469em] text-[#1CA8CB] text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-[27px]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
