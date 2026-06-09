import PageHero from '../../components/PageHero';
import Image from 'next/image'
import React from 'react'
const benefitCards = [
    {
        title: "社会保険・制度",
        items: [
            "社会保険完備",
            "（健康保険・厚生年金・雇用保険・労災保険）",
            "退職金制度",
            "建設業退職金共済（建退共）加入",
        ],
    },
    {
        title: "休暇・働き方",
        items: ["有給休暇", "慶弔休暇", "年末年始・お盆休暇", "育児・介護休暇"],
    },
    {
        title: "スキルアップ支援",
        items: ["資格取得支援（受験費用補助・講習費補助）", "社内研修"],
    },
    {
        title: "手当・補助",
        items: ["通勤手当", "資格手当（施工管理技士・電気工事士など）", "家族手当", "作業服・安全靴・工具の支給または補助"],
    },
    {
        title: "健康・安全面",
        items: ["年1回の健康診断", "安全教育・講習の実施", "熱中症対策（飲料支給・空調服補助など）"],
    },
    {
        title: "その他",
        items: ["社用車貸与", "制服・ヘルメットなどの支給"],
    },
];
const jobRows = [
    {
        label: "業種",
        value: "内装施工管理",
    },
    {
        label: "仕事内容",
        value: `① 内装仕上げ工事
軽量鉄骨による天井・壁下地の施工や、ボード仕上げなどの内装工事を担当します。
建築工事に欠かせない技能を身につけ、多能工として幅広い技術習得を目指せます。
将来的には鋼製下地・ボード仕上げの技能士資格取得や、現場職長としての活躍も可能です。

② CADオペレーター／施工管理補助
施工図・詳細図の作成、既存図面の調整・修正を行い、現場との打ち合わせや材料拾い出し、
工程管理補助なども担当します。CADスキルを活かしたい方歓迎。未経験でも基礎から丁寧に
指導します。`,
    },
    {
        label: "求める人物像",
        value: `＜必須条件＞
施工管理の経験
普通自動車免許

＜あれば尚可＞
エクセル・CAD使えれば尚可
１級建築施工管理技士
２級建築施工管理技士
１級土木施工管理技士`,
    },
    {
        label: "雇用形態",
        value: "正社員（3ヶ月の試用期間あり）",
    },
    {
        label: "勤務地",
        value: "山形県酒田市千代田字外野16",
    },
    {
        label: "勤務時間",
        value: "※ 残業：月平均5時間",
    },
    {
        label: "給与・待遇",
        value: `給与：207,000円〜345,000円（経験により優遇）
賞与：年1回
昇給：年1回
※ 通勤手当あり、昇給制度あり、賞与制度あり`,
    },
    {
        label: "福利厚生",
        value: "各種社会保険完備／通勤手当／資格手当／資格取得支援あり",
    },
    {
        label: "休日・休暇",
        value: `日曜日 その他
・会社休日カレンダーによる（第２土曜日休み）`,
    },
];
export default function Recruitment() {
    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1232.png"
                    title="採 ⽤ 情 報"
                    breadcrumb="HOME > 会社情報"
                />
            </div>
            <section className="w-full max-w-490 mx-auto px-4 py-12 md:py-16 xl:py-20 2xl:py-24">
                <div className="relative mx-auto grid max-w-490 grid-cols-1 xl:grid-cols-2 items-center gap-10 md:gap-14 2xl:gap-15">

                    <div className="relative w-full max-w-[733px] mx-auto xl:left-12 2xl:left-10 order-2 xl:order-1 text-center xl:text-left">

                        <p className="noto-jp text-[14px] md:text-[17px] xl:text-[18px] 2xl:text-[20px] font-normal tracking-[0.1em] text-[#FEC05D]">
                            Greeting
                        </p>

                        <h3 className="mt-2 md:mt-3 noto-serif-jp text-[28px] md:text-[34px] xl:text-[32px] 2xl:text-[40px] font-bold leading-[1.4] 2xl:leading-[60px] tracking-[-0.043em] text-[#1CA8CB]">
                            仕事のやりがい
                        </h3>

                        <div className="mt-4 md:mt-5 2xl:mt-6 w-full max-w-[300px] md:max-w-[500px] 2xl:max-w-[638px] mx-auto xl:mx-0 border-t-2 border-[#FEC05D]" />

                        <p className="noto-jp text-[16px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] py-6 md:py-10 2xl:py-15 font-medium leading-[30px] md:leading-[36px] 2xl:leading-[42px] tracking-[-0.041em] text-[#333333]">
                            共に成長し、未来を創る仲間を求めています
                        </p>

                        <p className="noto-jp w-full max-w-[727px] text-[14px] md:text-[18px] xl:text-[19px] 2xl:text-[25px] font-normal leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px] tracking-[-0.041em] text-[#333333] mb-10 md:mb-14 2xl:mb-20">
                            建物の基盤となる建材施⼯から、スポーツ施設の設備施⼯、外構・防⽔⼯事まで幅広く⼿がけています。<br />
                            私たちの仕事は、単に建物をつくるだけではありません。<br />
                            学校・体育館・公共施設・商業施設など、地域の⽅々が⽇常的に利⽤する空間を整え、⻑く安⼼して使える環境をつくる役割を担っています。<br /><br />

                            ・ ⼦どもたちが安全に運動できる体育館の床<br />
                            ・ 災害時にも備えた耐⽕・耐震構造<br />
                            ・ 快適な住環境を⽀える断熱・防⾳施⼯<br />
                            ・ 街並みを整えるフェンスやカーポート<br /><br />

                            こうした“⽇常の安⼼”を⽀えることが、当社の仕事です。人にもやさしい技術を積極的に取り⼊れ、持続可能な未来づくりに貢献していきたいと考えています。
                        </p>

                    </div>


                    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[520px] xl:max-w-[720px] 2xl:max-w-248 aspect-[500/420] order-1 xl:order-2">
                        <Image
                            src="/Assets/Group 1120 (3).png"
                            alt="Worker"
                            fill
                            className="absolute z-30 object-contain"
                        />
                    </div>

                </div>
            </section>

            <section className="relative w-full max-w-490 mx-auto overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-[4300px] xl:h-950 bg-no-repeat bg-top z-0"
                    style={{
                        backgroundImage: "url('/Assets/Group 1234.png')",
                        backgroundSize: "100% 100%",
                    }}
                />
                <section className="relative w-full max-w-490 mx-auto overflow-hidden mt-6 md:mt-8 2xl:mt-10 py-12 md:py-20 xl:py-24 2xl:py-32 px-4">
                    <div className="relative mx-auto w-full max-w-[1640px] min-h-[900px] md:min-h-[980px] xl:min-h-[1000px] 2xl:min-h-[1052px]">


                        <div className="absolute left-[0px] top-[0px]">
                            <Image
                                src="/Assets/Vector (1).png"
                                alt=""
                                width={364}
                                height={364}
                                className="h-[180px] w-[180px] md:h-[260px] md:w-[260px] xl:h-[320px] xl:w-[320px] 2xl:h-[364px] 2xl:w-[364px] object-cover"
                            />
                        </div>

                        <div className="absolute left-[130px] top-[120px] md:left-[280px] md:top-[180px] xl:left-[340px] xl:top-[200px] 2xl:left-[397px] 2xl:top-[221px]">
                            <Image
                                src="/Assets/Vector (2).png"
                                alt=""
                                width={364}
                                height={364}
                                className="h-[180px] w-[180px] md:h-[260px] md:w-[260px] xl:h-[320px] xl:w-[320px] 2xl:h-[364px] 2xl:w-[364px] object-cover"
                            />
                        </div>


                        <div className="relative z-10 mx-auto pt-[340px] md:pt-[520px] xl:absolute xl:-right-30 2xl:right-10  xl:top-[35px] xl:pt-0 w-full max-w-[727px] text-center xl:text-start">
                            <p className="noto-jp text-[14px] md:text-[17px] xl:text-[18px] 2xl:text-[20px] font-normal leading-[32px] md:leading-[36px] 2xl:leading-[40px] tracking-[0.4em] text-[#FFA310]">
                                Projects
                            </p>

                            <h2 className="noto-serif-jp text-[28px] md:text-[34px] xl:text-[38px] 2xl:text-[40px] font-bold leading-[44px] md:leading-[52px] 2xl:leading-[60px] tracking-[-0.043em] text-[#1CA8CB]">
                                当社の強み
                            </h2>

                            <div className="mt-4 md:mt-5 w-full max-w-[320px] md:max-w-[520px] 2xl:max-w-[638px] mx-auto xl:mx-0 border-t-[2px] border-[#FEC05D]" />

                            <h3 className="mt-8 md:mt-10 2xl:mt-12 noto-serif-jp text-[18px] md:text-[22px] xl:text-[20px] 2xl:text-[25px] font-black leading-[32px] md:leading-[38px] 2xl:leading-[42px] tracking-[-0.041em] text-[#333333]">
                                図⾯作成から施⼯まで、⼀つひとつを丁寧に積み重ねる仕事
                            </h3>

                            <p className="mt-5 xl:w-150 2xl:w-auto md:mt-6 2xl:mt-8 noto-jp text-[14px] md:text-[18px] xl:text-[18px] 2xl:text-[25px] font-normal leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-[#333333]">
                                施⼯前の図⾯作成を⾃社で⾏い、新規図⾯だけでなく、既存図⾯の調整・修正にも対応しています。
                                <br />
                                ・ 業者ごとの納まりや⼨法に合わせた図⾯調整
                                <br />
                                ・ 現場状況に応じた修正図の作成
                                <br />
                                ・ 追加⼯事・変更⼯事に伴う図⾯の再構築
                                <br />
                                ・ 施⼯管理との連携によるスムーズな現場進⾏
                                <br />
                                「図⾯が読める・描ける・直せる施⼯会社」として、安定した品質の施⼯につなげています。
                            </p>

                            <h3 className="mt-10 md:mt-12 2xl:mt-16 noto-serif-jp text-[18px] md:text-[22px] xl:text-[23px] 2xl:text-[25px] font-black leading-[32px] md:leading-[38px] 2xl:leading-[42px] tracking-[-0.041em] text-[#333333]">
                                図⾯の“直したい”に応える技術⼒
                            </h3>

                            <p className="mt-5 md:mt-6 xl:w-150 2xl:w-auto 2xl:mt-8 noto-jp text-[14px] md:text-[18px] xl:text-[18px] 2xl:text-[25px] font-normal leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px] tracking-[-0.04em] text-[#333333]">
                                既存の図⾯を直したり、少し⼿を加えたりする作業は、思っている以上に⼿間がかかるものです。
                                <br />
                                「ここだけ直したい」「急ぎで変更が必要になった」そんな場⾯で、気軽に相談していただける存在でありたいと考えています。図⾯の内容や背景をしっかり理解したうえで、必要な部分を丁寧に整え、使いやすい形に仕上げます。。
                            </p>
                        </div>
                    </div>
                </section>
                <section className="relative w-full max-w-490 mx-auto overflow-hidden px-4">

                    <div
                        className="
            relative z-10 mx-auto

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            max-w-[1573px]

            gap-6
            md:gap-8
            xl:gap-8
            2xl:gap-x-[42px]
            2xl:gap-y-[40px]

            pb-16
            md:pb-24
            2xl:pb-32
        "
                    >
                        {benefitCards.map((card) => (
                            <div
                                key={card.title}
                                className="
                    w-full
                    max-w-[491px]
                    mx-auto

                    min-h-[260px]
                    md:min-h-[340px]
                    xl:min-h-[390px]
                    2xl:h-[438px]

                    rounded-[24px]
                    md:rounded-[30px]
                    2xl:rounded-[39px]

                    bg-[#FFA310]

                    px-5
                    md:px-8
                    xl:px-10
                    2xl:px-[48px]

                    py-5
                    md:py-7
                    xl:py-8
                    2xl:py-[36px]

                    text-white

                    shadow-[0px_4px_4px_0px_#00000040]
                "
                            >
                                <h3
                                    className="
                        noto-jp
                        font-normal

                        text-[18px]
                        md:text-[24px]
                        xl:text-[28px]
                        2xl:text-[32px]

                        leading-[32px]
                        md:leading-[40px]
                        xl:leading-[46px]
                        2xl:leading-[50px]

                        tracking-[-0.0391em]
                    "
                                >
                                    ■ {card.title}
                                </h3>

                                <ul
                                    className="
                        noto-jp
                        font-normal

                        text-[18px]
                        md:text-[24px]
                        xl:text-[28px]
                        2xl:text-[32px]

                        leading-[32px]
                        md:leading-[40px]
                        xl:leading-[46px]
                        2xl:leading-[50px]

                        tracking-[-0.0391em]
                    "
                                >
                                    {card.items.map((item) => (
                                        <li key={item}>・{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </section>
                <section className="w-full max-w-490 mx-auto px-4 py-12 md:py-16 xl:py-20 2xl:py-24 overflow-hidden">
                    <div className="relative mx-auto grid max-w-490 grid-cols-1 xl:grid-cols-2 items-center gap-10 md:gap-14 2xl:gap-15">


                        <div className="relative mx-auto w-full max-w-[340px] md:max-w-[560px] xl:max-w-[720px] 2xl:max-w-248 mt-0 xl:mt-16 2xl:mt-30 aspect-[500/420]">
                            <Image
                                src="/Assets/Group 1118 (4).png"
                                alt="Worker"
                                fill
                                className="absolute z-30 object-contain"
                            />
                        </div>


                        <div className="relative w-full max-w-[727px] mx-auto xl:left-0 2xl:-left-10 xl:top-[20px] 2xl:top-[35px] text-center xl:text-left">
                            <p className="noto-jp font-normal tracking-[0.4em] text-[#FFA310] text-[14px] md:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[32px] md:leading-[36px] 2xl:leading-[40px]">
                                Projects
                            </p>

                            <h2 className="noto-serif-jp font-bold tracking-[-0.043em] text-[#1CA8CB] text-[28px] md:text-[34px] xl:text-[34px] 2xl:text-[40px] leading-[44px] md:leading-[52px] 2xl:leading-[60px]">
                                先輩社員の声
                            </h2>

                            <div className="mt-4 md:mt-5 w-full max-w-[320px] md:max-w-[520px] 2xl:max-w-[638px] mx-auto xl:mx-0 border-t-[2px] border-[#FEC05D]" />

                            <h3 className="mt-8 md:mt-10 2xl:mt-12 noto-serif-jp font-black tracking-[-0.041em] text-[#333333] text-[18px] md:text-[22px] xl:text-[20px] 2xl:text-[25px] leading-[32px] md:leading-[38px] 2xl:leading-[42px]">
                                建材施⼯部（⼊社5年⽬）
                            </h3>

                            <p className="mt-5 md:mt-6 xl:w-150 2xl:w-auto 2xl:mt-8 noto-jp w-full max-w-[727px] font-normal tracking-[-0.04em] text-[#333333] text-[14px] md:text-[18px] xl:text-[18px] 2xl:text-[25px] leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px]">
                                「公共施設の⼯事に携わることが多く、完成した建物を⾒ると、仕事の積み重ねを実感します。
                                専⾨的な作業もありますが、周囲のサポートがあり、段階的に覚えていける環境です。
                                図⾯やCADの知識も⾝につき、業務の幅が広がりました。」
                            </p>

                            <h3 className="mt-10 md:mt-12 2xl:mt-16 noto-serif-jp font-black tracking-[-0.041em] text-[#333333] text-[18px] md:text-[22px] xl:text-[20px] 2xl:text-[25px] leading-[32px] md:leading-[38px] 2xl:leading-[42px]">
                                スポーツ設備施⼯部（⼊社3年⽬）
                            </h3>

                            <p className="mt-5 md:mt-6 xl:w-150 2xl:w-auto 2xl:mt-8 noto-jp w-full max-w-[727px] font-normal tracking-[-0.04em] text-[#333333] text-[14px] md:text-[18px] xl:text-[18px] 2xl:text-[25px] leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px]">
                                「体育館の床材施⼯や設備の取り付けなど、さまざまな作業に関わっています。
                                ⼀つひとつの⼯程を丁寧に進めることで、施設としての使いやすさにつながると感じています。」
                            </p>

                            <h3 className="mt-10 md:mt-12 2xl:mt-16 noto-serif-jp font-black tracking-[-0.041em] text-[#333333] text-[18px] md:text-[22px] xl:text-[23px] 2xl:text-[25px] leading-[32px] md:leading-[38px] 2xl:leading-[42px]">
                                外構・防⽔施⼯部（⼊社8年⽬）
                            </h3>

                            <p className="mt-5 md:mt-6 2xl:mt-8 noto-jp w-full max-w-[727px] font-normal tracking-[-0.04em] text-[#333333] text-[14px] md:text-[18px] xl:text-[21px] 2xl:text-[25px] leading-[28px] md:leading-[34px] xl:leading-[38px] 2xl:leading-[42px]">
                                「CADで図⾯を調整し、それが現場で形になる過程に⼿応えがあります。
                                フェンスやカーポートなど、⽣活に近い⼯事が多く、地域とのつながりを感じられる仕事です。」
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-490 mx-auto bg-white py-16 md:py-24 2xl:py-32 px-4">
                    <div className="text-center">
                        <h2 className="noto-serif-jp font-bold tracking-[0.1em] text-[#1A3263] text-[30px] md:text-[36px] 2xl:text-[40px] leading-[45px]">
                            募集要項
                        </h2>

                        <div className="mx-auto mt-5 2xl:mt-6 w-[150px] md:w-[180px] 2xl:w-[197px] border-t-[2px] border-[#FEC05D]" />
                    </div>

                    <div className="mx-auto mt-10 md:mt-14 2xl:mt-20 w-full max-w-[1666px] bg-[#F7F7F7] px-5 md:px-10 xl:px-16 2xl:px-[150px] py-10 md:py-16 xl:py-24 2xl:py-[140px]">
                        {jobRows.map((row) => (
                            <div
                                key={row.label}
                                className="grid grid-cols-1 md:grid-cols-[180px_1fr] xl:grid-cols-[220px_1fr] 2xl:grid-cols-[280px_1fr] border-t border-[#707070] py-6 md:py-8 2xl:py-12 gap-3 md:gap-0"
                            >
                                <h3 className="noto-jp font-medium leading-[27px] tracking-[-0.0625em] text-[#1CA8CB] text-[20px] md:text-[26px] 2xl:text-[32px]">
                                    {row.label}
                                </h3>

                                <p className="whitespace-pre-line w-full noto-jp font-normal tracking-[-0.0469em] text-[#707070] text-[16px] md:text-[22px] xl:text-[25px] 2xl:text-[28px] leading-[30px] md:leading-[36px] 2xl:leading-[42px]">
                                    {row.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full max-w-490 mx-auto px-8 md:px-5 xl:px-12 py-8 md:py-10 xl:py-12">
                    <div
                        className="
            mx-auto
            flex items-center justify-center

            w-full max-w-[1370px]

            min-h-[260px]
            md:min-h-[320px]
            xl:min-h-[360px]
            2xl:h-[399px]

            rounded-[20px]
            md:rounded-[24px]
            2xl:rounded-[30px]

            bg-[#1CA8CB]

            px-6
            md:px-10
            xl:px-16
        "
                    >
                        <div className="w-full max-w-[1049px] text-center text-white">

                            <h2
                                className="
                    noto-serif-jp font-bold

                    text-[22px]
                    md:text-[24px]
                    xl:text-[26px]
                    2xl:text-[28px]

                    leading-[32px]
                    md:leading-[34px]
                    2xl:leading-[38px]
                "
                            >
                                共に未来をつくりませんか
                            </h2>

                            <p
                                className="
                    mt-6 md:mt-8 xl:mt-10 2xl:mt-12
                    noto-jp font-normal tracking-[-0.0371em]

                    text-[15px]
                    md:text-[18px]
                    xl:text-[21px]
                    2xl:text-[24px]

                    leading-[24px]
                    md:leading-[28px]
                    2xl:leading-[27px]
                "
                            >
                                建物づくりは、地域の暮らしを支える仕事です。
                            </p>

                            <p
                                className="
                    mt-5 md:mt-7 xl:mt-8 2xl:mt-10
                    noto-jp font-normal tracking-[-0.041em]

                    text-[15px]
                    md:text-[18px]
                    xl:text-[21px]
                    2xl:text-[24px]

                    leading-[24px]
                    md:leading-[30px]
                    2xl:leading-[27px]
                "
                            >
                                図面作成や施工の技術を身につけながら、長く続けられる環境で働くことができます。
                            </p>

                            <p
                                className="
                    mt-5 md:mt-7 xl:mt-8 2xl:mt-10
                    noto-jp font-normal tracking-[-0.041em]

                    text-[15px]
                    md:text-[18px]
                    xl:text-[21px]
                    2xl:text-[24px]

                    leading-[24px]
                    md:leading-[30px]
                    2xl:leading-[27px]
                "
                            >
                                CADスキルを活かしたい方、施工技術を身につけたい方、
                                <br className="hidden md:block" />
                                千代田は新しい仲間をお待ちしています。
                            </p>

                        </div>
                    </div>
                </section>
                <section className="w-full max-w-490 mx-auto py-12 md:py-16 xl:py-20 2xl:py-24 px-4">
                    <div className="flex flex-col items-center text-center">

                        <h2 className="noto-serif-jp font-bold tracking-[-0.0039em] text-[#1CA8CB] text-[22px] md:text-[28px] 2xl:text-[32px] leading-[32px] md:leading-[36px] 2xl:leading-[38px]">
                            応募（エントリー）のご連絡先
                        </h2>

                        <p className="mt-4 2xl:mt-5 noto-jp font-normal tracking-[-0.043em] text-[#333333] text-[15px] md:text-[20px] 2xl:text-[24px] leading-[24px] md:leading-[27px]">
                            お電話かメールフォームにてご応募の旨ご連絡ください。
                        </p>

                        <div className="mt-8 md:mt-10 2xl:mt-12 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 2xl:gap-[50px]">

                            <button className="w-[280px] md:w-[340px] 2xl:w-[400px] h-[68px] md:h-[80px] 2xl:h-[94px] rounded-full bg-[#FFA310] flex items-center justify-start px-5 md:px-7 2xl:px-10 gap-4 md:gap-6 2xl:gap-10">
                                <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] 2xl:w-[48px] 2xl:h-[48px] rounded-full bg-white flex items-center justify-center">
                                    <span className="text-[#FFA310] text-[20px] md:text-[24px] 2xl:text-[28px]">☎</span>
                                </div>

                                <span className="noto-jp font-bold tracking-[-0.0039em] text-white text-[22px] md:text-[29px] 2xl:text-[36px] leading-[27px]">
                                    0234-28-2110
                                </span>
                            </button>

                            <button className="w-[300px] md:w-[370px] 2xl:w-[430px] h-[68px] md:h-[80px] 2xl:h-[94px] rounded-full bg-[#FFA310] flex items-center justify-center gap-3 md:gap-4 2xl:gap-5">
                                <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] 2xl:w-[48px] 2xl:h-[48px] rounded-full bg-white flex items-center justify-center">
                                    <span className="text-[#FFA310] text-[20px] md:text-[24px] 2xl:text-[28px]">✉</span>
                                </div>

                                <span className="noto-jp font-bold tracking-[-0.0039em] text-white text-[17px] md:text-[23px] 2xl:text-[28px] leading-[27px]">
                                    お問い合わせフォーム
                                </span>
                            </button>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
