import PageHero from '../../../components/PageHero'
import React from 'react'

export default function Confirm() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1210 (1).png"
                    title="お 問 い 合 わ せ"
                    breadcrumb="HOME > お問い合わせ"
                />
            </div>
            <div
                className="
    mx-auto mt-8
    w-full max-w-[1470px]

    min-h-[340px]
    md:min-h-[420px]
    xl:min-h-[480px]
    2xl:h-[531px]

    bg-[#FFA310]
    shadow-[0_4px_20px_rgba(0,0,0,0.15)]

    px-5
    md:px-10
    xl:px-16
    2xl:px-[99px]

    py-8
    md:py-12
    xl:py-16
    2xl:pt-[88px]
  "
            >

                <h2
                    className="
      text-center noto-serif-jp font-bold text-white
      text-[22px]
      md:text-[26px]
      xl:text-[30px]
      2xl:text-[32px]
      leading-[38px]
    "
                >
                    送信が完了しました。
                </h2>

                
                <div className="mt-8 md:mt-12 xl:mt-16 2xl:mt-[90px] w-full">
                    <p
                        className="
        noto-jp font-normal text-white
        text-[15px]
        md:text-[18px]
        xl:text-[21px]
        2xl:text-[24px]

        leading-[26px]
        md:leading-[32px]
        2xl:leading-[36px]

        tracking-[-0.043em]
      "
                    >
                        <span className="font-medium">
                            ご記入のEメールアドレスへ自動返信メールをお送りしました。
                        </span>
                        <br />
                        内容を確認でき次第、ご返答させていただきます。
                    </p>
                </div>

                
                <div className="mt-8 md:mt-12 xl:mt-16 2xl:mt-[90px] w-full">
                    <p
                        className="
        noto-jp font-normal text-white
        text-[15px]
        md:text-[18px]
        xl:text-[21px]
        2xl:text-[24px]

        leading-[26px]
        md:leading-[32px]
        2xl:leading-[36px]

        tracking-[-0.043em]
      "
                    >
                        <span className="font-medium">
                            数日経過してもメールが届かない場合は、
                        </span>
                        アドレスの入力不備や通信上のエラーが考えられますので、
                        お手数ですが再度送信いただくか、
                        ページ下部の連絡先までご連絡ください。
                    </p>
                </div>
            </div>

            <div className="flex justify-center pt-8 md:pt-12 xl:pt-14 2xl:pt-15 pb-16 md:pb-24 2xl:pb-36">
                <button
                    className="
      flex items-center justify-between

      w-[290px]
      md:w-[380px]
      xl:w-[450px]
      2xl:w-[513px]

      h-[72px]
      md:h-[90px]
      xl:h-[105px]
      2xl:h-[118px]

      rounded-full
      bg-[#1CA8CB]

      pl-8
      md:pl-12
      2xl:pl-[65px]

      pr-4
      md:pr-5
      2xl:pr-[27px]

      shadow-[0px_4px_4px_0px_#00000040]
    "
                >
                    <span
                        className="
        noto-jp font-medium tracking-[0.0781em] text-white
        text-[22px]
        md:text-[30px]
        xl:text-[36px]
        2xl:text-[40px]
      "
                    >
                        確認画⾯へ
                    </span>

                    <span
                        className="
        flex items-center justify-center rounded-full bg-white text-[#1CA8CB] font-bold

        h-[48px] w-[48px]
        md:h-[64px] md:w-[64px]
        xl:h-[75px] xl:w-[75px]
        2xl:h-[83px] 2xl:w-[83px]

        text-[28px]
        md:text-[38px]
        xl:text-[46px]
        2xl:text-[52px]
      "
                    >
                        →
                    </span>
                </button>
            </div>
        </>
    )
}
