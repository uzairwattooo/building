import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>



        <div className="hidden lg:block">
          <footer className="relative  mx-auto w-full max-w-490 overflow-hidden">
            <Image
              src="/Assets/Group 1203 (1).png"
              alt=""
              width={1928}
              height={1022}
              className="block h-[760px] w-full object-cover object-center md:h-[850px] xl:h-[930px] 2xl:h-auto 2xl:w-full"
            />

            <div className="absolute inset-0 z-10">
              <div className="absolute left-[5%] top-[7%] text-white 2xl:left-[4.5%] 2xl:top-[8%]">
                <h2 className="noto-serif-jp text-[24px] font-bold leading-none md:text-[30px] xl:text-[34px] 2xl:text-[36px]">
                  お問い合わせ
                </h2>

                <p className="mt-3 noto-jp text-[14px] font-normal md:text-[17px] xl:text-[19px] 2xl:mt-4 2xl:text-[20px]">
                  — Contact —
                </p>

                <p className="mt-8 noto-jp text-[13px] leading-[26px] md:mt-14 md:text-[16px] md:leading-[32px] xl:mt-20 xl:text-[18px] xl:leading-[36px] 2xl:mt-24 2xl:text-[19px] 2xl:leading-9.5">
                  ご質問などありましたら、お電話・
                  <br />
                  お問い合わせフォームより受け付けております。
                </p>
              </div>

              <div className="absolute right-[5%] top-[7%] text-white md:right-[6%] md:top-[9%] 2xl:right-[6%] 2xl:top-[10%]">
                <p className="noto-jp px-0 text-[13px] font-normal md:text-[16px] xl:px-10 xl:text-[18px] 2xl:px-20 2xl:text-[19px]">
                  お電話でのお問い合わせ
                </p>

                <div className="mt-3 flex items-center gap-3 md:mt-4 md:gap-5 xl:gap-6 2xl:gap-8">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEC05D] text-[18px] text-[#1CA8CB] md:h-10 md:w-10 md:text-[22px] xl:h-11 xl:w-11 xl:text-[25px] 2xl:h-12 2xl:w-12 2xl:text-[28px]">
                    ☎
                  </span>

                  <span className="noto-serif-jp text-[20px] font-bold tracking-[0.08em] md:text-[28px] xl:text-[34px] 2xl:text-[38px]">
                    0234-28-2110
                  </span>
                </div>

                <p className="mt-4 noto-jp px-0 text-[12px] font-normal md:mt-5 md:text-[15px] xl:mt-6 xl:px-10 xl:text-[17px] 2xl:mt-7 2xl:px-20 2xl:text-[19px]">
                  受付時間：月〜金／8:00〜17:00
                </p>

                <div className="mt-8 flex items-center gap-4 md:mt-12 md:gap-6 xl:mt-16 xl:gap-8 2xl:mt-20 2xl:gap-10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEC05D] text-[18px] text-[#1CA8CB] md:h-10 md:w-10 md:text-[22px] xl:h-11 xl:w-11 xl:text-[25px] 2xl:h-12 2xl:w-12 2xl:text-[28px]">
                    ✉
                  </span>

                  <span className="noto-jp text-[13px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    メールフォームでのお問い合わせ
                  </span>
                </div>
              </div>

              <div className="absolute left-[5%] top-[52%] text-[#222222] md:top-[54%] 2xl:left-[5.5%] 2xl:top-[56%]">
                <Image
                  src="/Assets/Rectangle 6.png"
                  alt="Logo"
                  width={492}
                  height={120}
                  className="h-auto w-[230px] md:w-[320px] xl:w-[420px] 2xl:w-full"
                />

                <div className="mt-5 noto-jp text-[12px] font-normal leading-[24px] md:mt-6 md:text-[14px] md:leading-[28px] xl:mt-7 xl:text-[15px] xl:leading-[30px] 2xl:mt-8 2xl:text-[16px] 2xl:leading-[32px]">
                  <p>〒999-8422</p>
                  <p>山形県酒田市千代田字外野16</p>
                  <p>TEL：0234-28-2110 ／ FAX：0234-28-2111</p>
                </div>

                <div className="mt-8 flex gap-4 noto-jp text-[12px] md:mt-12 md:gap-6 md:text-[14px] xl:mt-16 xl:text-[16px] 2xl:mt-20 2xl:gap-8 2xl:text-[17px]">
                  <Link href="/news">お知らせ</Link>
                  <span>|</span>
                  <Link href="/company">個人情報保護方針</Link>
                </div>
              </div>

              <nav className="absolute right-[4%] top-[55%] grid grid-cols-[80px_150px_100px] gap-6 text-[#222222] md:right-[5%] md:top-[57%] md:grid-cols-[100px_180px_120px] md:gap-8 xl:grid-cols-[120px_200px_130px] xl:gap-12 2xl:right-[5%] 2xl:top-[62%] 2xl:grid-cols-[130px_210px_140px] 2xl:gap-16">
                <Link
                  className="noto-serif-jp text-[12px] font-bold md:text-[15px] xl:text-[17px] 2xl:text-[18px]"
                  href="/"
                >
                  HOME
                </Link>

                <div>
                  <Link
                    className="noto-serif-jp text-[12px] font-bold md:text-[15px] xl:text-[17px] 2xl:text-[18px]"
                    href="/services"
                  >
                    事業内容
                  </Link>

                  <div className="mt-4 flex flex-col gap-2 noto-jp text-[11px] md:mt-6 md:text-[14px] xl:mt-7 xl:text-[16px] 2xl:mt-8 2xl:gap-3 2xl:text-[18px]">
                    <Link href="/services/building-materials">建築現場施工</Link>
                    <Link href="/services/construction">スポーツ設備・施設施工</Link>
                    <Link href="/services/sports-facilities">建築資材の販売</Link>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-7 xl:gap-10 2xl:gap-12">
                  <Link
                    className="noto-serif-jp text-[12px] font-bold md:text-[15px] xl:text-[17px] 2xl:text-[18px]"
                    href="/works"
                  >
                    施工実績
                  </Link>

                  <Link
                    className="noto-serif-jp text-[12px] font-bold md:text-[15px] xl:text-[17px] 2xl:text-[18px]"
                    href="/company"
                  >
                    会社情報
                  </Link>

                  <Link
                    className="noto-serif-jp text-[12px] font-bold md:text-[15px] xl:text-[17px] 2xl:text-[18px]"
                    href="/recruitment"
                  >
                    採用情報
                  </Link>
                </div>
              </nav>

              <p className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap noto-jp text-[10px] text-[#222222] md:text-[12px] xl:text-[14px] 2xl:bottom-[10%] 2xl:text-[15px]">
                Copyright© 株式会社千代田 All Right Reserved.
              </p>
            </div>
          </footer>
        </div>
        <div className="block lg:hidden">
          <footer className="w-full">

            <div className="block lg:hidden bg-[#FEC05D]">
              <div className="bg-[#1CA8CB] px-6 py-14 text-center text-white">
                <h2 className="noto-serif-jp text-[30px] font-bold">
                  お問い合わせ
                </h2>

                <p className="mt-3 noto-jp text-[16px]">— Contact —</p>

                <p className="mt-8 noto-jp text-[15px] leading-[28px]">
                  ご質問などありましたら、お電話・
                  <br />
                  お問い合わせフォームより受け付けております。
                </p>

                <div className="mt-10 flex flex-col items-center gap-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEC05D] text-[#1CA8CB]">
                      ☎
                    </span>

                    <span className="noto-serif-jp text-[28px] font-bold">
                      0234-28-2110
                    </span>
                  </div>

                  <p className="noto-jp text-[14px]">
                    受付時間：月〜金／8:00〜17:00
                  </p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-3 rounded-full bg-[#FEC05D] px-6 py-3 noto-jp text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FEC05D]">
                      ✉
                    </span>
                    メールフォームでのお問い合わせ
                  </Link>
                </div>
              </div>

              <div className="px-6 py-12 text-center text-[#222222]">
                <Image
                  src="/Assets/Rectangle 6.png"
                  alt="Logo"
                  width={492}
                  height={120}
                  className="mx-auto h-auto w-[260px]"
                />

                <div className="mt-8 noto-jp text-[14px] leading-[28px]">
                  <p>〒999-8422</p>
                  <p>山形県酒田市千代田字外野16</p>
                  <p>TEL：0234-28-2110</p>
                  <p>FAX：0234-28-2111</p>
                </div>

                <nav className="mt-10 grid grid-cols-2 gap-4 noto-jp text-[15px]">
                  <Link href="/">HOME</Link>
                  <Link href="/services">事業内容</Link>
                  <Link href="/works">施工実績</Link>
                  <Link href="/company">会社情報</Link>
                  <Link href="/recruitment">採用情報</Link>
                  <Link href="/news">お知らせ</Link>
                </nav>

                <div className="mt-10 flex justify-center gap-4 noto-jp text-[13px]">
                  <Link href="/company">個人情報保護方針</Link>
                </div>

                <p className="mt-10 noto-jp text-[11px]">
                  Copyright© 株式会社千代田 All Right Reserved.
                </p>
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-490 overflow-hidden lg:block">
              <Image
                src="/Assets/Group 1203 (1).png"
                alt=""
                width={1928}
                height={1022}
                className="block w-full h-auto"
              />

              <div className="absolute inset-0 z-10">
                <div className="absolute left-[4.5%] top-[8%] text-white">
                  <h2 className="noto-serif-jp text-[36px] font-bold leading-none">
                    お問い合わせ
                  </h2>

                  <p className="mt-4 noto-jp font-normal text-[20px]">
                    — Contact —
                  </p>

                  <p className="mt-24 noto-jp text-[19px] leading-9.5">
                    ご質問などありましたら、お電話・
                    <br />
                    お問い合わせフォームより受け付けております。
                  </p>
                </div>

                <div className="absolute right-[6%] top-[10%] text-white">
                  <p className="noto-jp font-normal text-[19px] px-20">
                    お電話でのお問い合わせ
                  </p>

                  <div className="mt-4 flex items-center gap-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEC05D] text-[28px] text-[#1CA8CB]">
                      ☎
                    </span>

                    <span className="noto-serif-jp text-[38px] font-bold tracking-[0.08em]">
                      0234-28-2110
                    </span>
                  </div>

                  <p className="mt-7 noto-jp font-normal text-[19px] px-20">
                    受付時間：月〜金／8:00〜17:00
                  </p>

                  <div className="mt-20 flex items-center gap-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEC05D] text-[28px] text-[#1CA8CB]">
                      ✉
                    </span>

                    <span className="noto-jp text-[20px]">
                      メールフォームでのお問い合わせ
                    </span>
                  </div>
                </div>

                <div className="absolute left-[5.5%] top-[56%] text-[#222222]">
                  <Image
                    src="/Assets/Rectangle 6.png"
                    alt="Logo"
                    width={492}
                    height={120}
                    className="w-full h-auto relative"
                  />

                  <div className="mt-8 noto-jp text-[16px] font-normal leading-[32px]">
                    <p>〒999-8422</p>
                    <p>山形県酒田市千代田字外野16</p>
                    <p>TEL：0234-28-2110 ／ FAX：0234-28-2111</p>
                  </div>

                  <div className="mt-20 flex gap-8 noto-jp text-[17px]">
                    <Link href="/news">お知らせ</Link>
                    <span>|</span>
                    <Link href="/company">個人情報保護方針</Link>
                  </div>
                </div>

                <nav className="absolute right-[5%] top-[62%] grid grid-cols-[130px_210px_140px] gap-16 text-[#222222]">
                  <Link className="noto-serif-jp text-[18px] font-bold" href="/">
                    HOME
                  </Link>

                  <div>
                    <Link
                      className="noto-serif-jp text-[18px] font-bold"
                      href="/services"
                    >
                      事業内容
                    </Link>

                    <div className="mt-8 flex flex-col gap-3 noto-jp text-[18px]">
                      <Link href="/services/building-materials">建築現場施工</Link>
                      <Link href="/services/construction">スポーツ設備・施設施工</Link>
                      <Link href="/services/sports-facilities">建築資材の販売</Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-12">
                    <Link className="noto-serif-jp text-[18px] font-bold" href="/works">
                      施工実績
                    </Link>

                    <Link className="noto-serif-jp text-[18px] font-bold" href="/company">
                      会社情報
                    </Link>

                    <Link
                      className="noto-serif-jp text-[18px] font-bold"
                      href="/recruitment"
                    >
                      採用情報
                    </Link>
                  </div>
                </nav>

                <p className="absolute bottom-[10%] left-1/2 -translate-x-1/2 noto-jp text-[15px] text-[#222222]">
                  Copyright© 株式会社千代田 All Right Reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>

      </footer>



    </>
  );
}