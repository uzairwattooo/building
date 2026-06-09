import Image from 'next/image'
import React from 'react'

export default function Feature() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <div className="relative w-full overflow-hidden aspect-1959/820 bg-white">
                    <Image
                        src="/Assets/Group 1206 (1).png"
                        alt="Construction Worker"
                        width={1959}
                        height={714}
                        className="relative z-40 w-full block select-none pointer-events-none"
                        priority
                    />

                    <div
                        className="
      absolute inset-0 z-40
      flex flex-col items-center justify-center text-center
      -mt-10
      sm:-mt-16
      md:-mt-24
      lg:-mt-40
      xl:-mt-70
      2xl:-mt-110
      px-4
      "
                    >
                        <h1
                            className="
        noto-jp font-bold text-[#FFFF04] tracking-wider drop-shadow
        text-[18px]
        sm:text-[24px]
        md:text-[34px]
        lg:text-[42px]
        xl:text-[52px]
        2xl:text-[64px]
        "
                        >
                            セルローズファイバー断熱・防⾳⼯事
                        </h1>

                        <h2
                            className="
        noto-serif-jp font-bold text-white
        text-[10px]
        sm:text-[14px]
        md:text-[18px]
        lg:text-[22px]
        xl:text-[26px]
        2xl:text-[32px]
        leading-[1.4]
        tracking-[0.0557em]
        "
                        >
                            ⾃然のやさしさで、毎⽇をもっと快適に。
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-4 text-center">
                <h2
                    className="
      noto-serif-jp font-bold text-[#1CA8CB]
      text-[24px]
      sm:text-[32px]
      md:text-[42px]
      lg:text-[52px]
      xl:text-[58px]
      2xl:text-[64px]
      leading-[1.2]
      tracking-[0.0566em]
    "
                >
                    断熱・防音工事
                </h2>

                <div className="mt-4 md:mt-6 xl:mt-8 flex flex-col gap-2">
                    <div className="w-28 md:w-40 xl:w-50 2xl:w-58 border-t-2 border-[#FEC05D]" />
                    <div className="w-28 md:w-40 xl:w-50 2xl:w-58 border-t-2 border-[#FEC05D]" />
                </div>
            </div>
            <section
                className="w-full max-w-490 mx-auto bg-no-repeat"
                style={{
                    backgroundImage: "url('/Assets/Group 1210.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "top center",
                }}
            >
                <section className="w-full max-w-490 mx-auto mt-10 md:mt-14 xl:mt-20 px-4">
                    <div className="relative mx-auto grid max-w-490 grid-cols-1 items-center gap-8 md:gap-12 xl:gap-15 lg:grid-cols-2">

                        
                        <div className="relative w-full max-w-[320px] md:max-w-[450px] xl:max-w-248 aspect-[500/420] mx-auto">
                            <Image
                                src="/Assets/Group 1209 (1).png"
                                alt="Worker"
                                fill
                                className="absolute z-30 object-contain mt-8 md:mt-16 xl:mt-40"
                            />
                        </div>

                        <div className="relative max-w-[838px] mt-4 md:mt-8 xl:mt-10 text-center lg:text-left">

                            <p
                                className="
          noto-serif-jp font-bold leading-none text-[#BFEAF1]
          text-[48px]
          md:text-[72px]
          xl:text-[84px]
          2xl:text-[96px]
        "
                            >
                                01
                            </p>

                            <h2
                                className="
          relative
          -mt-3 md:-mt-5 xl:-mt-8
          noto-serif-jp
          font-bold
          tracking-[0.0557em]
          text-[#1CA8CB]
          text-[22px]
          md:text-[34px]
          xl:text-[42px]
          2xl:text-[48px]
          leading-[1.2]
        "
                            >
                                セルローズファイバーとは
                            </h2>

                            <div className="mt-6 md:mt-10 xl:mt-15">
                                <p
                                    className="
            noto-jp
            font-normal
            text-[#333333]
            text-[14px]
            leading-[26px]
            md:text-[18px]
            md:leading-[34px]
            xl:text-[22px]
            xl:leading-[38px]
            2xl:text-[25px]
            2xl:leading-[42px]
            tracking-[-0.04em]
          "
                                >
                                    セルローズファイバーは、新聞紙などの再⽣紙を主原料とした⾃然素材の断熱材です。
                                    <br />
                                    <br />
                                    紙と聞くと「燃えやすいのでは︖」と思われがちですが、実はとても安全で、
                                    <br className="hidden xl:block" />
                                    断熱・防⾳・調湿・防⽕の4つの性能を兼ね備えています。
                                    <br className="hidden xl:block" />
                                    住宅等に幅広く採⽤されている、環境にも⼈にもやさしい断熱材です。
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="relative w-full max-w-490 mx-auto overflow-hidden mt-10">
                    <Image
                        src="/Assets/Group 1212.png"
                        alt=""
                        width={1960}
                        height={1065}
                        className="block w-full h-auto min-h-[690px] md:min-h-[760px] xl:min-h-[900px] 2xl:min-h-0 object-cover"
                    />

                    <div className="absolute inset-0 z-10">
                        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center">
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/Assets/Asset 3 1 (1).png"
                                    alt=""
                                    width={887}
                                    height={243}
                                    className="w-[250px] md:w-[380px] xl:w-[460px] 2xl:w-[520px] h-auto"
                                />

                                <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap noto-serif-jp font-bold tracking-[0.0557em] text-[#1CA8CB] text-[22px] md:text-[38px] xl:text-[52px] 2xl:text-[64px]">
                                    セルローズファイバーの特長
                                </h2>
                            </div>
                        </div>

                        <div className="absolute left-[6%] md:left-[7%] xl:left-[8%] 2xl:left-[8.5%] top-[22%] md:top-[25%] 2xl:top-[28%] grid grid-cols-1 md:grid-cols-2 gap-x-6 xl:gap-x-10 gap-y-3 md:gap-y-5 xl:gap-y-8 text-white w-[88%]">
                            <div>
                                <h3 className="noto-jp font-bold mt-3 md:mt-5 2xl:mt-8 mb-2 md:mb-3 2xl:mb-5 text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[30px]">
                                    1. 夏はひんやり、冬はぽかぽか
                                </h3>
                                <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px]">
                                    外の暑さ・寒さをやさしくブロック。
                                </p>
                            </div>

                            <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px] mt-0 md:mt-8 2xl:mt-20">
                                （イラスト例：太陽と雪のマーク、家の中が快適な様子）
                            </p>

                            <div>
                                <h3 className="noto-jp font-bold mt-3 md:mt-5 2xl:mt-8 mb-2 md:mb-3 2xl:mb-5 text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[30px]">
                                    2. 音をふんわり吸収
                                </h3>
                                <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px]">
                                    足音や話し声が伝わりにくく、静かに過ごせる。
                                </p>
                            </div>

                            <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px] mt-0 md:mt-8 2xl:mt-20">
                                （イラスト例：音符が小さくなる、壁が音を止めるイメージ）
                            </p>

                            <div>
                                <h3 className="noto-jp font-bold mt-3 md:mt-5 2xl:mt-8 mb-2 md:mb-3 2xl:mb-5 text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[30px]">
                                    3. 湿気をほどよく調整
                                </h3>
                                <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px]">
                                    結露やカビを防いで、家が長持ち。
                                </p>
                            </div>

                            <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px] mt-0 md:mt-8 2xl:mt-20">
                                （イラスト例：水滴が吸われたり吐き出されたりするイメージ）
                            </p>

                            <div>
                                <h3 className="noto-jp font-bold mt-3 md:mt-5 2xl:mt-8 mb-2 md:mb-3 2xl:mb-5 text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[30px]">
                                    4. 紙なのに燃えにくい安心素材
                                </h3>
                                <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px]">
                                    ホウ酸の力で、火が広がりにくい。
                                </p>
                            </div>

                            <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px] mt-0 md:mt-8 2xl:mt-20">
                                （イラスト例：火が当たっても黒くなるだけで広がらない様子）
                            </p>

                            <div>
                                <h3 className="noto-jp font-bold mt-3 md:mt-5 2xl:mt-8 mb-2 md:mb-3 2xl:mb-5 text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[30px]">
                                    5. 地球にやさしいエコ素材
                                </h3>
                                <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px]">
                                    新聞紙を再利用した、人にも環境にもやさしい断熱材。
                                </p>
                            </div>

                            <p className="noto-jp text-[12px] leading-[18px] md:text-[18px] md:leading-[26px] xl:text-[24px] xl:leading-[32px] 2xl:text-[29px] mt-0 md:mt-8 2xl:mt-20">
                                （イラスト例：葉っぱ・地球・リサイクルマーク）
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto py-10 md:py-14 xl:py-20 px-4">
                    <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-16">

                        <div className="w-full lg:w-[48%] xl:w-[838px] xl:pl-20 2xl:pl-40">

                            <p
                                className="
        noto-serif-jp font-bold leading-none text-[#BEE3EC]
        text-[48px]
        md:text-[72px]
        xl:text-[84px]
        2xl:text-[96px]
      "
                            >
                                02
                            </p>

                            <h2
                                className="
        -mt-3 md:-mt-5 xl:-mt-6
        noto-serif-jp font-bold text-[#1CA8CB]
        tracking-[0.0557em]
        text-[24px]
        md:text-[36px]
        xl:text-[42px]
        2xl:text-[48px]
        leading-[1.2]
      "
                            >
                                施工方法と流れ
                            </h2>

                            <div className="mt-6 md:mt-8">

                                <p
                                    className="
          noto-jp font-bold text-[#333333]
          text-[16px]
          md:text-[20px]
          xl:text-[22px]
          2xl:text-[24px]
          leading-[1.6]
        "
                                >
                                    【吹き込み工法（ブローイング工法）】
                                </p>

                                <p
                                    className="
          mt-4 md:mt-6
          noto-jp font-normal text-[#333333]
          text-[14px]
          leading-[26px]
          md:text-[18px]
          md:leading-[32px]
          xl:text-[22px]
          xl:leading-[36px]
          2xl:text-[24px]
          2xl:leading-[38px]
        "
                                >
                                    専用の機械を使って、壁や天井の中にセルロースファイバーを
                                    ふわっと吹き込み、隙間なくしっかり詰めていく工法です。
                                    リフォームでも施工でき、複雑な形状の空間にも均一に充填できます。
                                </p>

                                <p
                                    className="
          mt-6 md:mt-8 xl:mt-10
          noto-jp font-bold text-[#333333]
          text-[15px]
          md:text-[18px]
          xl:text-[20px]
          2xl:text-[22px]
          leading-[1.6]
        "
                                >
                                    【施工の流れ】
                                </p>

                                <p
                                    className="
          mt-3 md:mt-4
          noto-jp text-[#333333]
          text-[13px]
          leading-[24px]
          md:text-[16px]
          md:leading-[30px]
          xl:text-[18px]
          xl:leading-[34px]
          2xl:text-[20px]
          2xl:leading-[38px]
        "
                                >
                                    現地調査 → 断熱箇所・施工箇所のご提案 →
                                    <br className="hidden md:block" />
                                    仕上がり確認 → アフターフォロー
                                </p>

                            </div>
                        </div>

                        
                        <div className="relative w-full max-w-[350px] md:max-w-[560px] xl:max-w-[750px] 2xl:w-[953px] aspect-[953/697] shrink-0">
                            <Image
                                src="/Assets/Group 1212 (1).png"
                                alt="一般住宅での導入メリット"
                                fill
                                className="object-contain object-center xl:object-left"
                            />
                        </div>

                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto py-10 md:py-14 xl:py-20 px-4">
                    <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-16">

                      
                        <div className="relative w-full max-w-[350px] md:max-w-[550px] xl:max-w-[750px] 2xl:w-[953px] aspect-[953/697] shrink-0">
                            <Image
                                src="/Assets/Group 1213.png"
                                alt="一般住宅での導入メリット"
                                fill
                                className="object-contain object-center lg:object-left"
                            />
                        </div>
                        <div className="relative w-full lg:w-[48%] xl:w-[760px] 2xl:w-[880px] text-center lg:text-left">
                            <p className="noto-jp font-bold leading-[27px] tracking-[0.0469em] text-[#BFEAF1] text-[48px] md:text-[72px] xl:text-[84px] 2xl:text-[96px]">
                                03
                            </p>

                            <h2 className="relative -mt-3 md:-mt-4 noto-serif-jp font-normal tracking-[-0.043em] text-[#1CA8CB] text-[24px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] leading-[1.2]">
                                一般住宅での導⼊メリット
                            </h2>

                            <div className="mt-6 md:mt-8 xl:mt-10 space-y-5 md:space-y-6 text-[#1A3263]">
                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・快適な住環境を実現
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.043em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        冬の寒さや夏の暑さを軽減し、家全体が快適に。
                                        生活音も抑えられ、プライバシーが守られます。
                                    </p>
                                </div>

                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・光熱費の削減
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.0391em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        断熱性能が⾼いため、冷暖房効率が向上し、年間の光熱費を抑えることができます。
                                    </p>
                                </div>

                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・⼦育て世帯にも安⼼
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.0391em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        ⼦どもの⾜⾳や泣き声が響きにくく、在宅ワークの集中環境にも最適です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto py-10 md:py-14 xl:py-20 px-4">
                    <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-16">

                        
                        <div className="relative w-full lg:w-[48%] xl:w-[760px] 2xl:w-[880px] text-center lg:text-left xl:pl-20 2xl:pl-40">

                            <h2 className="relative noto-serif-jp font-bold tracking-[-0.043em] text-[#1CA8CB] text-[24px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] leading-[1.2]">
                                公共施設での導⼊メリット
                            </h2>

                            <div className="mt-6 md:mt-8 xl:mt-10 space-y-5 md:space-y-6 text-[#1A3263]">

                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・学校・保育施設
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.043em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        教室間の騒⾳を軽減し、学習環境を向上。
                                        <br className="hidden xl:block" />
                                        体育館や⾳楽室の⾳漏れ対策にも有効です。
                                    </p>
                                </div>

                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・オフィス・庁舎
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.0391em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        会議室の防⾳性向上や、省エネ効果による運⽤コスト削減に貢献します。
                                    </p>
                                </div>

                                <div>
                                    <h3 className="noto-serif-jp font-bold tracking-[-0.0469em] text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[1.6]">
                                        ・医療・福祉施設
                                    </h3>

                                    <p className="noto-jp font-normal tracking-[-0.0391em] text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[22px] xl:leading-[38px] 2xl:text-[24px] 2xl:leading-[42px]">
                                        プライバシー確保のための防⾳対策として有効。
                                        <br className="hidden xl:block" />
                                        快適な温度環境で利⽤者の負担を軽減します。
                                    </p>
                                </div>

                            </div>
                        </div>

                        
                        <div className="relative w-full max-w-[350px] md:max-w-[550px] xl:max-w-[750px] 2xl:w-[953px] aspect-[953/697] shrink-0">
                            <Image
                                src="/Assets/Group 1214.png"
                                alt="公共施設での導入メリット"
                                fill
                                className="object-contain object-center xl:object-left"
                            />
                        </div>

                    </div>
                </section>
            </section>

        </>
    )
}
