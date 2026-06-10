import Image from 'next/image';
import React from 'react'


const cardData = [
    {
        id: "01",
        title: "建築現場施工",
        image: "/Assets/service.jpg",
        description:
            "建物の基本的な内装施工や補修工事をはじめ、耐水・断熱工事なども行っています。",
    },
    {
        id: "02",
        title: "スポーツ設備・施設施工",
        image: "/Assets/service.jpg",
        description:
            "スポーツ施設や公共施設に必要な設備の設置、メンテナンスを行っています。",
    },
    {
        id: "03",
        title: "建築材料の販売",
        image: "/Assets/service.jpg",
        description:
            "メーカーの代理店として、商品を販売だけでなく、関連する工事一式も請け負っております。",
    },
];
export default function Home() {
    return (
        <>
            <div className='space-y-28'>
                <section className="w-full bg-white py-12 md:py-16 xl:py-20">
                    <div className="max-w-480 mx-auto px-4 md:px-2 xl:px-12 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0 items-center">
                        <div className="relative mx-auto xl:mx-0 xl:-left-17 w-full max-w-237.5 aspect-590/420">
                            <Image
                                src="/Assets/Group 1203.png"
                                alt="Worker"
                                fill
                                className="absolute z-30 object-contain"
                            />
                        </div>
                        <div className="relative text-center xl:text-left">
                            <Image
                                src="/Assets/Group (2).png"
                                alt=""
                                width={150}
                                height={110}
                                className="absolute right-0 md:right-10 xl:right-35 -top-4 w-20 md:w-28 xl:w-37.5"
                            />
                            <p className="noto-jp text-[16px] md:text-[18px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#113D48]">
                                About us
                            </p>

                            <p className="noto-jp text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>


                            <h2 className="noto-jp font-medium text-[#1CA8CB] leading-tight max-w-full xl:max-w-155 2xl:max-w-155 text-[32px] md:text-[44px] xl:text-[50px] 2xl:text-[64px]">
                                確かな技術と信頼で
                                <br />
                                一歩先ゆく施工を
                            </h2>

                            <p className="max-w-full xl:max-w-145 2xl:max-w-205 font-medium text-[18px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.041em] text-[#333333] mt-5">
                                株式会社千代田は、信頼される施工技術と丁寧な対応で、
                                お客様の理想を形にする建設のパートナーです。私たちは、
                                少人数ならではの機動力を活かし、迅速かつ柔軟に対応します。
                            </p>

                            <p className="noto-jp max-w-full xl:max-w-205 font-normal text-[18px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.041em] text-[#20A9C8] mt-4">
                                技術へのこだわりと豊富な経験で、どんなプロジェクトでも⾼品質な仕上がりをお約束します。
                            </p>

                            <p className="noto-jp max-w-full xl:max-w-130 font-normal text-[18px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] tracking-[-0.041em] text-[#333333] mt-4">
                                「地域の皆様とともに成⻑し、信頼され続ける企業でありたい」
                                それが私たちの願いです。
                            </p>
                            <button className="inline-flex items-center mt-6 gap-4 bg-[#20A9C8] text-white rounded-full px-5 md:px-6 py-3 text-[14px] md:text-[15px] font-medium">
                                千代田について
                                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white text-[#20A9C8] flex items-center justify-center">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="relative mx-auto w-full max-w-[1923px] overflow-hidden bg-white pb-20 md:pb-28 xl:pb-32 min-h-[780px] md:min-h-[900px] lg:min-h-[980px] xl:min-h-[1080px] 2xl:min-h-[1210px]">
                    <Image
                        src="/Assets/Group 12030.png"
                        alt="Wave Background"
                        width={1923}
                        height={1210}
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />

                    <div className="relative z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-3 2xl:pt-4">
                        <div className="flex flex-col items-center text-center">
                            <p className="noto-jp text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                — Content —
                            </p>

                            <p className="noto-jp text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>

                            <div className="relative -mt-6 md:-mt-7 lg:-mt-8 2xl:-mt-10 flex justify-center">
                                <Image
                                    src="/Assets/Asset 3 2.png"
                                    alt=""
                                    width={586}
                                    height={136}
                                    className="h-auto w-[260px] md:w-[360px] lg:w-[460px] xl:w-[520px] 2xl:w-[586px]"
                                />

                                <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap noto-serif-jp text-[30px] md:text-[42px] lg:text-[54px] xl:text-[58px] 2xl:text-[64px] font-bold leading-none text-[#1CA8CB]">
                                    お知らせ
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-32 max-w-[1495px] px-4 md:px-6 xl:px-8 2xl:px-0">
                        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-[22px] 2xl:gap-[35px]">
                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="
            relative overflow-hidden bg-white shadow-lg
            w-[300px] h-[418px] rounded-[24px]
            md:w-[330px] md:h-[460px] md:rounded-[27px]
            lg:w-[320px] lg:h-[448px] lg:rounded-[28px]
            xl:w-[390px] xl:h-[543px] xl:rounded-[32px]
            2xl:w-[458px] 2xl:h-[638px] 2xl:rounded-[37px]
          "
                                >
                                    <button
                                        className="
              absolute z-30 flex items-center justify-center rounded-full bg-[#20A9C8] text-white
              right-[16px] top-0 h-[32px] w-[32px] text-[18px]
              md:right-[18px] md:h-[35px] md:w-[35px] md:text-[20px]
              lg:right-[18px] lg:h-[36px] lg:w-[36px] lg:text-[21px]
              xl:right-[22px] xl:h-[40px] xl:w-[40px] xl:text-[22px]
              2xl:right-[25px] 2xl:h-11 2xl:w-11 2xl:text-2xl
            "
                                    >
                                        →
                                    </button>

                                    <h3
                                        className="
              absolute z-20 noto-serif-jp font-bold text-[#333333]
              left-[22px] top-[18px] text-[18px]
              md:left-[24px] md:top-[20px] md:text-[20px]
              lg:left-[24px] lg:top-[21px] lg:text-[21px]
              xl:left-[30px] xl:top-[24px] xl:text-[24px]
              2xl:left-[33px] 2xl:top-[26px] 2xl:text-[28px]
            "
                                    >
                                        {card.title}
                                    </h3>

                                    <div
                                        className="
              absolute right-0 overflow-hidden
              top-[58px] h-[330px] w-[268px] rounded-bl-[24px] rounded-tl-[24px]
              md:top-[64px] md:h-[364px] md:w-[295px] md:rounded-bl-[27px] md:rounded-tl-[27px]
              lg:top-[63px] lg:h-[354px] lg:w-[286px] lg:rounded-bl-[28px] lg:rounded-tl-[28px]
              xl:top-[78px] xl:h-[429px] xl:w-[348px] xl:rounded-bl-[32px] xl:rounded-tl-[32px]
              2xl:top-[88px] 2xl:h-[504px] 2xl:w-[409px] 2xl:rounded-bl-[37px] 2xl:rounded-tl-[37px]
            "
                                    >
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            style={{ objectPosition: "90% center" }}
                                        />
                                    </div>

                                    <div
                                        className="
              absolute z-20 flex items-center justify-center rounded-full bg-[#E5F4F7]
              left-[27px] top-[50px] h-[81px] w-[81px]
              md:left-[30px] md:top-[55px] md:h-[89px] md:w-[89px]
              lg:left-[29px] lg:top-[54px] lg:h-[87px] lg:w-[87px]
              xl:left-[38px] xl:top-[70px] xl:h-[110px] xl:w-[110px]
              2xl:left-[42px] 2xl:top-[76px] 2xl:h-[123px] 2xl:w-[123px]
            "
                                    >
                                        <span
                                            className="
                noto-serif-jp font-bold tracking-[0.2813em] text-[#20A9C8]
                text-[32px] md:text-[36px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px]
              "
                                        >
                                            {card.id}
                                        </span>
                                    </div>

                                    <div
                                        className="
              absolute left-0 z-20 bg-white
              bottom-[56px] h-[105px] w-[236px] rounded-br-[65px] rounded-tr-[65px] px-[26px] pt-[27px]
              md:bottom-[62px] md:h-[116px] md:w-[260px] md:rounded-br-[72px] md:rounded-tr-[72px] md:px-[29px] md:pt-[30px]
              lg:bottom-[59px] lg:h-[112px] lg:w-[252px] lg:rounded-br-[70px] lg:rounded-tr-[70px] lg:px-[28px] lg:pt-[28px]
              xl:bottom-[74px] xl:h-[138px] xl:w-[312px] xl:rounded-br-[88px] xl:rounded-tr-[88px] xl:px-8 xl:pt-[36px]
              2xl:bottom-[85px] 2xl:h-[160px] 2xl:w-[360px] 2xl:rounded-br-[100px] 2xl:rounded-tr-[100px] 2xl:px-10 2xl:pt-[42px]
            "
                                    >
                                        <p
                                            className="
                noto-jp font-medium text-[#333333]
                w-[176px] px-1 text-[10px] leading-[18px]
                md:w-[194px] md:text-[11px] md:leading-[20px]
                lg:w-[188px] lg:text-[11px] lg:leading-[20px]
                xl:w-[232px] xl:px-2 xl:text-[13px] xl:leading-[24px]
                2xl:w-[268px] 2xl:text-[15px] 2xl:leading-7
              "
                                        >
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full overflow-hidden">
                    <div className="relative mx-auto w-full max-w-[1776px]">

                        <Image
                            src="/Assets/Group 1205 (1).png"
                            alt="Worker"
                            width={1776}
                            height={664}
                            className="w-full h-auto"
                        />

                        <div
                            className="absolute z-[60] top-[10%] left-[5%] md:top-[12%] lg:top-[14%] xl:top-[16%] xl:left-[6%] 2xl:top-[18%] 2xl:left-[7%]">
                            <h2
                                className="noto-serif-jp font-bold tracking-[0.0547em] text-[14px] leading-[22px] sm:text-[18px] sm:leading-[28px] md:text-[24px] md:leading-[36px] lg:text-[38px] lg:leading-[55px] xl:text-[46px] xl:leading-[65px] 2xl:text-[55px] 2xl:leading-[80px]">
                                <span className="text-[#2095B2]">CAD図</span>
                                <span className="text-black">⾯から施⼯まで、</span>
                                <br />
                                <span className="text-black">
                                    ⼀貫対応できる確かな技術⼒
                                </span>
                            </h2>
                            <p
                                className="text-[#333333] font-normal w-[90%] md:w-[70%] lg:w-[62%] xl:w-[58%] 2xl:w-[52%] text-[10px] leading-[16px] sm:text-[12px] sm:leading-[18px] md:text-[14px] md:leading-[22px] lg:text-[18px] lg:leading-[30px] xl:text-[22px] xl:leading-[36px] 2xl:text-[25px] 2xl:leading-[42px] "
                            >
                                ⾃社で施⼯前図⾯を作成し、業者仕様や現場状況に合わせた調整・修正まで柔軟に対応しています。
                                図⾯を「読める・描ける・直せる」体制により、追加⼯事や変更にもスムーズに対応し、
                                安定した品質の施⼯を実現しています。
                            </p>
                        </div>

                    </div>
                </section >

                <section className="relative w-full overflow-hidden bg-white py-10 md:py-14 xl:py-16 2xl:py-20">
                    <div className="relative mx-auto max-w-[1920px] min-h-[720px] md:min-h-[880px] xl:min-h-[930px] 2xl:min-h-[1200px] px-4 md:px-8">
                        <div className="relative flex flex-col items-center">
                            <Image
                                src="/Assets/Asset 3 2.png"
                                alt=""
                                width={335}
                                height={129}
                                className="absolute -top-3 w-[160px] md:w-[230px] xl:w-[280px] 2xl:w-[335px] h-auto"
                            />

                            <p className="relative z-10 mt-5 md:mt-7 xl:mt-8 2xl:mt-10 noto-serif-jp text-[13px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal text-[#20A9C8]">
                                — Features —
                            </p>

                            <h2 className="relative z-10 mt-6 md:mt-8 xl:mt-9 2xl:mt-12 w-full md:w-[620px] xl:w-[760px] 2xl:w-[616px] text-center noto-serif-jp font-bold text-[#2095B2] text-[23px] leading-[34px] sm:text-[28px] sm:leading-[40px] md:text-[38px] md:leading-[50px] xl:text-[48px] xl:leading-[60px] 2xl:text-[64px] 2xl:leading-[80px]">
                                自然素材でつくる、
                                <br />
                                温かく静かな住まい
                            </h2>

                            <div className="mt-5 md:mt-7 xl:mt-8 2xl:mt-10">
                                <div className="w-[145px] md:w-[185px] xl:w-[215px] 2xl:w-[233px] h-px bg-[#FEC05D]" />
                                <div className="w-[145px] md:w-[185px] xl:w-[215px] 2xl:w-[233px] h-px bg-[#FEC05D] mt-2" />
                            </div>

                            <Image
                                src="/Assets/Group (4).png"
                                alt=""
                                width={241}
                                height={341}
                                className="absolute top-7 right-0 md:right-8 xl:right-16 2xl:right-40 w-16 md:w-28 xl:w-34 2xl:w-[188px] h-auto"
                            />
                        </div>

                        <div className="mt-12 md:mt-16 xl:mt-18 2xl:mt-30 grid grid-cols-1 lg:grid-cols-[54%_46%] xl:grid-cols-[56%_44%] 2xl:grid-cols-[940px_1fr] items-center gap-8 md:gap-10">
                            <div className="z-20 px-2 md:px-6 xl:px-8 2xl:pl-20 text-center lg:text-left">
                                <h3 className="mb-5 md:mb-7 xl:mb-8 2xl:mb-12 noto-jp font-bold text-[#333333] text-[17px] md:text-[22px] xl:text-[25px] 2xl:text-[32px]">
                                    セルロースファイバー断熱・防音工事
                                </h3>

                                <p className="noto-jp text-[#707070] mb-5 md:mb-6 xl:mb-7 2xl:mb-8 text-[14px] leading-[24px] md:text-[17px] md:leading-[30px] xl:text-[20px] xl:leading-[36px] 2xl:text-[32px] 2xl:leading-[52px]">
                                    セルロースファイバー断熱防音工事は、環境に優しい自然素材を使い、
                                    優れた断熱性能と防音効果を発揮します。
                                </p>

                                <p className="noto-jp text-[#FEC05D] mb-8 md:mb-10 xl:mb-12 2xl:mb-16 text-[14px] leading-[24px] md:text-[17px] md:leading-[30px] xl:text-[20px] xl:leading-[36px] 2xl:text-[32px] 2xl:leading-[52px]">
                                    室内の温度差や生活音の悩みを軽減し、
                                    より快適で心地よい住空間を実現します。
                                </p>

                                <div className="flex justify-center lg:justify-end lg:px-4 2xl:px-10">
                                    <button className="inline-flex items-center gap-3 2xl:gap-4 bg-[#20A9C8] text-white rounded-full px-4 py-2 md:px-5 md:py-3 xl:px-5 xl:py-3 2xl:px-6 2xl:py-3 text-[13px] md:text-[14px] xl:text-[15px] font-bold">
                                        詳しく見る
                                        <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full bg-white text-[#20A9C8] flex items-center justify-center">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="relative flex justify-center xl:justify-end">
                                <Image
                                    src="/Assets/Group 111.png"
                                    alt="Worker"
                                    width={957}
                                    height={704}
                                    className="w-full h-auto max-w-[300px] md:max-w-[460px] xl:max-w-[590px] 2xl:max-w-[957px] mx-auto xl:ml-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto bg-white overflow-hidden">
                    <div className="relative w-full min-h-[620px] md:min-h-[720px] xl:min-h-[760px] 2xl:min-h-0 z-30">
                        <Image
                            src="/Assets/Group 1204.png"
                            alt=""
                            width={1960}
                            height={870}
                            className="absolute inset-0 xl:static w-full h-full xl:h-auto object-cover"
                        />

                        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                            <div className='border border-[#FEC05D] p-1 rounded-4xl'>

                                <div className="relative w-full max-w-[320px] md:max-w-[620px] xl:max-w-[780px] 2xl:w-[155%] rounded-[24px] md:rounded-[30px] bg-white/95 border border-[#FEC05D] px-5 md:px-10 xl:px-14 py-8 md:py-12 text-center flex flex-col items-center">

                                    <Image
                                        src="/Assets/Asset 3 1.png"
                                        alt=""
                                        width={327}
                                        height={76}
                                        className="absolute z-0 top-15 md:top-20 xl:top-20 2xl:top-24 w-[150px] md:w-[230px] xl:w-[290px] 2xl:w-81 h-auto"
                                    />
                                    <Image
                                        src="/Assets/Group.png"
                                        alt=""
                                        width={327}
                                        height={76}
                                        className="absolute z-20 -top-7 md:-top-10 xl:-top-10 2xl:-top-13 -right-5 md:right-10 xl:-right-7 2xl:-right-8 w-[70px] md:w-[230px] xl:w-[150px] 2xl:w-40.5 h-auto"
                                    />

                                    <p className="relative z-10 text-[#1CA8CB] text-[13px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] noto-jp">
                                        — Recruit —
                                    </p>

                                    <h2 className="mt-5 z-10 md:mt-7 xl:mt-9 2xl:mt-12 noto-serif-jp font-bold text-[30px] md:text-[42px] xl:text-[54px] 2xl:text-[64px] leading-none text-[#2095B2]">
                                        採用情報
                                    </h2>

                                    <p className="mt-3 md:mt-4 noto-serif-jp text-[15px] md:text-[20px] xl:text-[23px] 2xl:text-[26px] text-[#333333]">
                                        安心して働けるキャリア
                                    </p>

                                    <p className="mt-5 md:mt-7 2xl:mt-8 max-w-[270px] md:max-w-[560px] xl:max-w-[680px] 2xl:max-w-167 text-center noto-jp text-[13px] leading-[24px] md:text-[16px] md:leading-[28px] xl:text-[18px] xl:leading-[32px] 2xl:text-[20px] 2xl:leading-normal text-[#555555]">
                                        公共事業を通じて地域を⽀えながら安⼼して成⻑できる環境を整えていきます。経験に関わらず、⼀⼈ひとりが⼒を発揮できる職場です。ここで、あなたの新しいキャリアを始めてみませんか。
                                    </p>

                                    <button className="flex justify-end mt-6 md:mt-8 2xl:mt-10 inline-flex items-center gap-3 2xl:gap-4 rounded-full bg-[#FEC05D] pl-5 2xl:pl-7 pr-2 py-2 text-white text-[15px] md:text-[18px] xl:text-[21px] 2xl:text-[24px] font-medium">
                                        詳しく見る
                                        <span className="flex h-9 w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-white text-[#FEC05D]">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full bg-white min-h-[980px] md:min-h-[760px] xl:min-h-[820px] 2xl:min-h-0 -mt-40 xl:-mt-25 md:-mt-20  2xl:-mt-145 z-10" >
                        <Image
                            src="/Assets/Group 1208.png"
                            alt=""
                            width={1960}
                            height={900}
                            className="absolute inset-0 2xl:static w-full h-full 2xl:h-auto object-cover"
                        />

                        <div className="relative z-20 flex flex-col items-center text-center pt-36 md:pt-20 xl:pt-24 2xl:absolute 2xl:top-[40%] 2xl:left-1/2 2xl:-translate-x-1/2 2xl:pt-0">
                            <p className="noto-jp text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                — News —
                            </p>

                            <p className="noto-jp text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>

                            <div className="relative -mt-6 md:-mt-7 xl:-mt-8 2xl:-mt-10 flex justify-center">
                                <Image
                                    src="/Assets/Asset 1 1.png"
                                    alt=""
                                    width={586}
                                    height={136}
                                    className="w-[260px] md:w-[380px] xl:w-[500px] 2xl:w-146.5 h-auto"
                                />

                                <h2 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap noto-serif-jp text-[32px] md:text-[44px] xl:text-[56px] 2xl:text-[64px] font-bold leading-none text-[#1CA8CB]">
                                    お知らせ
                                </h2>
                            </div>
                        </div>

                        <div className="relative z-20 mx-auto mt-12 md:mt-16 xl:mt-20 2xl:absolute 2xl:bottom-[17%] 2xl:left-1/2 2xl:-translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-8 2xl:gap-8 px-4">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="relative w-full max-w-[360px] md:w-[220px] md:h-[135px] xl:w-[360px] xl:h-[210px] 2xl:w-[490px] 2xl:h-[256px] h-[190px] rounded-[32px] md:rounded-[32px] xl:rounded-[48px] 2xl:rounded-[56px] border-[3px] border-[#FEC05D]"
                                >
                                    <div className="absolute inset-1 rounded-[27px] xl:rounded-[42px] 2xl:rounded-[46px] border-[2px] bg-white border-[#FEC05D]" />

                                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 xl:px-8 2xl:px-10 text-center">
                                        <div className="absolute -top-5 2xl:-top-6 left-1/2 -translate-x-1/2 rounded-full bg-[#FEC05D] px-5 xl:px-7 2xl:px-8 py-1.5 2xl:py-2">
                                            <span className="noto-serif-jp text-[13px] xl:text-[20px] 2xl:text-[24px] font-black text-white">
                                                202X.XX.XX
                                            </span>
                                        </div>

                                        <h3 className="noto-jp text-[14px] md:text-[12px] xl:text-[17px] 2xl:text-[20px] font-medium text-[#2095B2]">
                                            新ホームページを開設しました
                                        </h3>

                                        <p className="mt-3 xl:mt-4 2xl:mt-5 noto-jp text-[15px] md:text-[13px] xl:text-[20px] 2xl:text-[24px] leading-[24px] xl:leading-[28px] 2xl:leading-[32px] text-[#333333]">
                                            ホームページを開設しました
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="
    mx-auto
    mt-12
    flex items-center gap-3
    rounded-full bg-[#FEC05D]
    pl-5 xl:pl-7
    pr-2 py-2
    noto-jp
    text-[16px] xl:text-[20px] 2xl:text-[24px]
    font-medium text-white
  "
                        >
                            お知らせ⼀覧へ

                            <span className="flex h-9 w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-white text-[#FEC05D]">
                                →
                            </span>
                        </button>
                    </div>
                </section>
            </div >
        </>
    )
}
