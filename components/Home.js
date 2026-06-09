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
                        <div className="relative mx-auto xl:mx-0 xl:-left-20 w-full max-w-237.5 aspect-590/420">
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
                            <p className="noto-jp text-[16px] md:text-[18px] xl:text-[20px] font-normal text-[#113D48]">
                                About us
                            </p>

                            <p className="noto-jp text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>


                            <h2 className="noto-jp font-medium text-[#1CA8CB] leading-tight max-w-full xl:max-w-155 text-[32px] md:text-[44px] xl:text-[64px]">
                                確かな技術と信頼で
                                <br />
                                一歩先ゆく施工を
                            </h2>

                            <p className="max-w-full xl:max-w-205 font-medium text-[18px] md:text-[20px] xl:text-[24px] tracking-[-0.041em] text-[#333333] mt-5">
                                株式会社千代田は、信頼される施工技術と丁寧な対応で、
                                お客様の理想を形にする建設のパートナーです。私たちは、
                                少人数ならではの機動力を活かし、迅速かつ柔軟に対応します。
                            </p>

                            <p className="noto-jp max-w-full xl:max-w-205 font-normal text-[18px] md:text-[20px] xl:text-[24px] tracking-[-0.041em] text-[#20A9C8] mt-4">
                                技術へのこだわりと豊富な経験で、どんなプロジェクトでも⾼品質な仕上がりをお約束します。
                            </p>

                            <p className="noto-jp max-w-full xl:max-w-130 font-normal text-[18px] md:text-[20px] xl:text-[24px] tracking-[-0.041em] text-[#333333] mt-4">
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
                <section className="relative mx-auto w-full max-w-[1923px] overflow-hidden bg-white pb-20 md:pb-28 xl:pb-32 min-h-[760px] md:min-h-[900px] lg:min-h-[1000px] xl:min-w-[1000px] 2xl:min-h-[1210px]">
                    <Image
                        src="/Assets/Group 12030.png"
                        alt="Wave Background"
                        width={1923}
                        height={1210}
                        className="absolute inset-0 z-0 h-full w-full object-cover"
                    />

                    <div className="relative z-10 pt-12 md:pt-16 lg:pt-20 xl:pt-4">
                        <div className="flex flex-col items-center text-center">
                            <p className="noto-jp text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#1CA8CB]">
                                — Content —
                            </p>

                            <p className="noto-jp text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>

                            <div className="relative -mt-6 md:-mt-7 lg:-mt-8 xl:-mt-10 flex justify-center">
                                <Image
                                    src="/Assets/Asset 3 2.png"
                                    alt=""
                                    width={586}
                                    height={136}
                                    className="h-auto w-[260px] md:w-[360px] lg:w-[460px] xl:w-[586px]"
                                />

                                <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap noto-serif-jp text-[30px] md:text-[42px] lg:text-[54px] xl:text-[64px] font-bold leading-none text-[#1CA8CB]">
                                    お知らせ
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto mt-12 md:mt-16 lg:mt-24 xl:mt-32 max-w-[1495px] px-4 md:px-6 xl:px-0">
                        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-[20px] 2xl:gap-[35px">

                            {cardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="
            relative overflow-hidden bg-white shadow-lg
            w-[300px] h-[418px] rounded-[24px]
            md:w-[330px] md:h-[460px] md:rounded-[27px]
            lg:w-[360px] lg:h-[502px] lg:rounded-[30px]
            xl:w-[410px] xl:h-[575px] xl:rounded-[30px]
            2xl:w-[458px] 2xl:h-[638px] 2xl:rounded-[37px]
          "
                                >
                                    <button
                                        className="
              absolute z-30 flex items-center justify-center rounded-full bg-[#20A9C8] text-white
              right-[16px] top-0 h-[32px] w-[32px] text-[18px]
              md:right-[18px] md:h-[35px] md:w-[35px] md:text-[20px]
              lg:right-[20px] lg:h-[38px] lg:w-[38px] lg:text-[22px]
              xl:right-[25px] xl:h-11 xl:w-11 xl:text-2xl
            "
                                    >
                                        →
                                    </button>

                                    <h3
                                        className="
              absolute z-20 noto-serif-jp font-bold text-[#333333]
              left-[22px] top-[18px] text-[18px]
              md:left-[24px] md:top-[20px] md:text-[20px]
              lg:left-[27px] lg:top-[23px] lg:text-[22px]
              xl:left-[33px] xl:top-[26px] xl:text-[25px]
              2xl:left-[33px] xl:top-[26px] xl:text-[28px]
            "
                                    >
                                        {card.title}
                                    </h3>

                                    <div
                                        className="
              absolute right-0 overflow-hidden
              top-[58px] h-[330px] w-[268px] rounded-bl-[24px] rounded-tl-[24px]
              md:top-[64px] md:h-[364px] md:w-[295px] md:rounded-bl-[27px] md:rounded-tl-[27px]
              lg:top-[70px] lg:h-[397px] lg:w-[322px] lg:rounded-bl-[30px] lg:rounded-tl-[30px]
              xl:top-[88px] xl:h-[454px] xl:w-[353px] xl:rounded-bl-[37px] xl:rounded-tl-[37px]
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
              lg:left-[33px] lg:top-[60px] lg:h-[97px] lg:w-[97px]
              xl:left-[42px] xl:top-[76px] xl:h-[123px] xl:w-[123px]
            "
                                    >
                                        <span
                                            className="
                noto-serif-jp font-bold tracking-[0.2813em] text-[#20A9C8]
                text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px]
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
              lg:bottom-[67px] lg:h-[126px] lg:w-[283px] lg:rounded-br-[80px] lg:rounded-tr-[80px] lg:px-[32px] lg:pt-[33px]
              xl:bottom-[85px] xl:h-[160px] xl:w-[360px] xl:rounded-br-[100px] xl:rounded-tr-[100px] xl:px-10 xl:pt-[42px]
            "
                                    >
                                        <p
                                            className="
                noto-jp font-medium text-[#333333]
                w-[176px] px-1 text-[10px] leading-[18px]
                md:w-[194px] md:text-[11px] md:leading-[20px]
                lg:w-[210px] lg:text-[12px] lg:leading-[22px]
                xl:w-[268px] xl:px-2 xl:text-[15px] xl:leading-7
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

                <section className="relative w-full overflow-hidden bg-white py-12 md:py-16 xl:py-20">
                    <div className="relative mx-auto max-w-[1920px] min-h-[700px] md:min-h-[900px] xl:min-h-[1050px] 2xl:min-h-[1200px] px-4 md:px-8">

                        <div className="relative flex flex-col items-center">
                            <Image
                                src="/Assets/Asset 3 2.png"
                                alt=""
                                width={335}
                                height={129}
                                className="absolute -top-3 w-[180px] md:w-[250px] xl:w-[300px] 2xl:w-[335px] h-auto"
                            />

                            <p className="relative z-10 mt-6 md:mt-8 xl:mt-10 noto-serif-jp text-[14px] md:text-[17px] xl:text-[20px] font-normal text-[#20A9C8]">
                                — Features —
                            </p>

                            <h2 className="relative z-10 mt-8 md:mt-10 xl:mt-12 w-full md:w-[700px] xl:w-[850px] 2xl:w-[616px] text-center noto-serif-jp font-bold text-[#2095B2] text-[24px] leading-[36px] sm:text-[30px] sm:leading-[42px] md:text-[42px] md:leading-[54px] xl:text-[52px] xl:leading-[64px] 2xl:text-[64px] 2xl:leading-[80px]">
                                自然素材でつくる、
                                <br />
                                温かく静かな住まい
                            </h2>

                            <div className="mt-6 md:mt-8 xl:mt-10">
                                <div className="w-[160px] md:w-[200px] 2xl:w-[233px] h-px bg-[#FEC05D]" />
                                <div className="w-[160px] md:w-[200px] 2xl:w-[233px] h-px bg-[#FEC05D] mt-2" />
                            </div>

                            <Image
                                src="/Assets/Group (4).png"
                                alt=""
                                width={241}
                                height={341}
                                className="absolute top-8 right-0 md:right-10 xl:right-24 2xl:right-40 w-20 md:w-32 xl:w-40 2xl:w-[188px] h-auto"
                            />
                        </div>

                        <div className="mt-16 md:mt-20 xl:mt-24 2xl:mt-30 grid grid-cols-1 lg:grid-cols-[55%_45%] xl:grid-cols-[58%_42%] 2xl:grid-cols-[940px_1fr] items-center gap-10">
                            <div className="z-20 px-4 md:px-8 xl:px-12 2xl:pl-20">
                                <h3 className="mb-8 md:mb-10 xl:mb-12 noto-jp font-bold text-[#333333] text-[18px] md:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                                    セルロースファイバー断熱・防音工事
                                </h3>

                                <p className="noto-jp text-[#707070] mb-6 md:mb-8 text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[24px] xl:leading-[42px] 2xl:text-[32px] 2xl:leading-[52px]">
                                    セルロースファイバー断熱防音工事は、環境に優しい自然素材を使い、
                                    優れた断熱性能と防音効果を発揮します。
                                </p>

                                <p className="noto-jp text-[#FEC05D] mb-10 md:mb-12 xl:mb-16 text-[14px] leading-[24px] md:text-[18px] md:leading-[32px] xl:text-[24px] xl:leading-[42px] 2xl:text-[32px] 2xl:leading-[52px]">
                                    室内の温度差や生活音の悩みを軽減し、
                                    より快適で心地よい住空間を実現します。
                                </p>

                                <div className="flex justify-center lg:justify-end lg:px-6 2xl:px-10">
                                    <button className="inline-flex items-center gap-4 bg-[#20A9C8] text-white rounded-full px-4 py-2 md:px-5 md:py-3 xl:px-6 xl:py-3 text-[13px] md:text-[14px] xl:text-[15px] font-bold">
                                        詳しく見る
                                        <span className="w-8 h-8 rounded-full bg-white text-[#20A9C8] flex items-center justify-center">
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
                                    className="w-full h-auto max-w-[320px] md:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[957px] mx-auto xl:ml-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto bg-white overflow-hidden relative">
                    <div className="relative w-full z-20">
                        <Image
                            src="/Assets/Group 1207 (1).png"
                            alt=""
                            width={1960}
                            height={870}
                            className="w-full h-auto"
                        />

                        <div className="absolute top-[24%] md:top-[26%] xl:top-[28%] 2xl:top-[30%] left-1/2 -translate-x-1/2 z-20 w-[75%] md:w-[65%] xl:w-[58%] 2xl:w-[55%] min-h-[260px] md:min-h-[360px] xl:min-h-[430px] 2xl:min-h-105 rounded-[30px] flex flex-col items-center">
                            <Image
                                src="/Assets/Asset 3 1.png"
                                alt=""
                                width={327}
                                height={76}
                                className="absolute z-0 bottom-[170px] md:bottom-[280px] xl:bottom-[385px] 2xl:bottom-93 w-[120px] md:w-[200px] xl:w-[290px] 2xl:w-80.5 h-auto"
                            />

                            <p className="-mt-5 2xl:-mt-8 text-[#1CA8CB] text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] noto-jp z-10">
                                — Recruit —
                            </p>

                            <h2 className="mt-6 md:mt-8 xl:mt-10 2xl:mt-12 noto-serif-jp font-bold text-[26px] md:text-[22px] xl:text-[54px] 2xl:text-[64px] leading-none text-[#2095B2]">
                                採用情報
                            </h2>

                            <p className="mt-2 md:mt-3 2xl:mt-4 noto-serif-jp text-[13px] text-[8px] leading-[13px]
md:text-[12px]
md:leading-[20px]
xl:text-[17px]
xl:leading-[30px]
2xl:text-[20px] text-[#333333]">
                                安心して働けるキャリア
                            </p>

                            <p className="mt-3 md:block xl:mt-6 2xl:mt-8 max-w-[270px] md:max-w-[520px] xl:max-w-[620px] 2xl:max-w-167 text-center noto-jp text-[10px] leading-[16px] md:text-[4px] md:leading-[24px] xl:text-[17px] xl:leading-[30px] 2xl:text-[20px] 2xl:leading-normal text-[#555555]">
                                公共事業を通じて地域を⽀えながら安⼼して成⻑できる環境を整えていき
                                <br />
                                ます。経験に関わらず、⼀⼈ひとりが⼒を発揮できる職場です。
                                <br />
                                ここで、あなたの新しいキャリアを始めてみませんか。
                            </p>

                            <button className="mt-4 md:mt-6 xl:mt-8 2xl:mt-10 inline-flex items-center gap-2 md:gap-3 2xl:gap-4 rounded-full bg-[#FEC05D] pl-4 md:pl-5 2xl:pl-7 pr-2 py-1.5 md:py-2 text-white text-[12px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-medium">
                                詳しく見る
                                <span className="flex h-7 w-7 md:h-9 md:w-9 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-white text-[#FEC05D]">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="relative -mt-[70px] md:-mt-[100px] xl:-mt-[250px] 2xl:-mt-145 w-full">
                        <Image
                            src="/Assets/Group 1208.png"
                            alt=""
                            width={1960}
                            height={900}
                            className="w-full h-auto"
                        />

                        <div className="absolute top-[28%] md:top-[33%] xl:top-[37%] 2xl:top-[40%] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-center">
                            <p className="noto-jp text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                — News —
                            </p>

                            <p className="noto-jp text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#1CA8CB]">
                                - - - ——
                            </p>

                            <div className="relative -mt-5 md:-mt-7 xl:-mt-8 2xl:-mt-10 flex justify-center">
                                <Image
                                    src="/Assets/Asset 1 1.png"
                                    alt=""
                                    width={586}
                                    height={136}
                                    className="w-[230px] md:w-[360px] xl:w-[480px] 2xl:w-146.5 h-auto"
                                />

                                <h2 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap noto-serif-jp text-[28px] md:text-[42px] xl:text-[54px] 2xl:text-[64px] font-bold leading-none text-[#1CA8CB]">
                                    お知らせ
                                </h2>
                            </div>
                        </div>

                        <div className="absolute bottom-[12%] md:bottom-[14%] xl:bottom-[15%] 2xl:bottom-[17%] left-1/2 flex -translate-x-1/2 gap-3 md:gap-5 xl:gap-6 2xl:gap-8">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="relative w-[105px] h-[70px] md:w-[210px] md:h-[120px] xl:w-[380px] xl:h-[210px] 2xl:w-[490px] 2xl:h-[256px] rounded-[18px] md:rounded-[32px] xl:rounded-[48px] 2xl:rounded-[56px] border-[2px] md:border-[3px] border-[#FEC05D]"
                                >
                                    <div className="absolute inset-1 rounded-[14px] md:rounded-[27px] xl:rounded-[42px] 2xl:rounded-[46px] border-[1px] md:border-[2px] bg-white border-[#FEC05D]" />

                                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 md:px-5 xl:px-8 2xl:px-10 text-center">
                                        <div className="absolute -top-3 md:-top-4 xl:-top-5 2xl:-top-6 left-1/2 -translate-x-1/2 rounded-full bg-[#FEC05D] px-2 md:px-5 xl:px-7 2xl:px-8 py-0.5 md:py-1 xl:py-1.5 2xl:py-2">
                                            <span className="noto-serif-jp text-[7px] md:text-[12px] xl:text-[20px] 2xl:text-[24px] font-black text-white">
                                                202X.XX.XX
                                            </span>
                                        </div>

                                        <h3 className="noto-jp text-[7px] md:text-[12px] xl:text-[17px] 2xl:text-[20px] font-medium text-[#2095B2]">
                                            新ホームページを開設しました
                                        </h3>

                                        <p className="mt-1 md:mt-2 xl:mt-4 2xl:mt-5 noto-jp text-[8px] md:text-[13px] xl:text-[20px] 2xl:text-[24px] leading-[12px] md:leading-[20px] xl:leading-[28px] 2xl:leading-[32px] text-[#333333]">
                                            ホームページを開設しました
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="absolute right-[4%] md:right-[5%] 2xl:right-[6%] bottom-[2%] 2xl:bottom-[3%] inline-flex items-center gap-2 md:gap-3 2xl:gap-4 rounded-full bg-[#FEC05D] pl-3 md:pl-5 2xl:pl-7 pr-1.5 md:pr-2 py-1 md:py-1.5 2xl:py-2 noto-jp text-[9px] md:text-[14px] xl:text-[20px] 2xl:text-[24px] font-medium text-white">
                            お知らせ⼀覧へ

                            <span className="flex h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-white text-[#FEC05D]">
                                →
                            </span>
                        </button>
                    </div>
                </section>
            </div >
        </>
    )
}
