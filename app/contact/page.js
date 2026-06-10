"use client";

import PageHero from "../../components/PageHero";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
    { name: "name", label: "お名前", required: true, type: "text" },
    { name: "furigana", label: "フリガナ", required: true, type: "text" },
    { name: "email", label: "メールアドレス", required: true, type: "email" },
    { name: "company", label: "会社名", required: true, type: "text" },
    { name: "city", label: "市区町村・番地", required: false, type: "text" },
    { name: "phone", label: "電話番号", required: false, type: "text" },
    { name: "fax", label: "FAX番号", required: false, type: "text" },
];

export default function Contact() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        type: "",
        name: "",
        furigana: "",
        email: "",
        company: "",
        city: "",
        phone: "",
        fax: "",
        postal1: "",
        postal2: "",
        prefecture: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (result.success) {
            router.push("/contact/confirm");
        } else {
            console.log(result.error);
            alert(result.error || "メール送信に失敗しました");
        }
    };

    return (
        <>
            <div className="w-full max-w-490 mx-auto bg-white">
                <PageHero
                    image="/Assets/Group 1202.png"
                    title="お 問 い 合 わ せ"
                    breadcrumb="HOME > お問い合わせ"
                />
            </div>

            <section className="w-full max-w-490 mx-auto px-4 md:px-6 xl:px-0 py-5">
                <div className="text-center">
                    <h2 className="noto-serif-jp font-bold tracking-[0.1em] text-[#1A3263] text-[24px] md:text-[32px] xl:text-[36px] 2xl:text-[40px] leading-[32px] md:leading-[40px] 2xl:leading-[45px]">
                        お問い合わせフォーム
                    </h2>

                    <div className="mx-auto mt-4 w-[180px] md:w-[300px] xl:w-[380px] 2xl:w-[462px] border-t-[2px] border-[#FEC05D]" />
                </div>

                <div className="mt-8 md:mt-10 xl:mt-12 2xl:mt-14 text-center">
                    <p className="noto-jp font-normal text-[#333333] text-[15px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-[24px] md:leading-[32px] xl:leading-[36px] 2xl:leading-[40px]">
                        下記のメールフォームに必要事項をご記入のうえお問い合わせください。
                        <br />
                        内容を確認次第、あらためてご連絡をさせていただきます。
                    </p>
                </div>
            </section>

            <section className="w-full max-w-490 mx-auto bg-white px-4 md:px-10 xl:px-16 py-12 md:py-16 xl:py-20 2xl:py-24">
                <form id="contactForm" onSubmit={handleSubmit} className="mx-auto w-full max-w-[1560px]">
                    <div className="grid grid-cols-1 md:grid-cols-[180px_80px_1fr] xl:grid-cols-[240px_100px_1fr] 2xl:grid-cols-[300px_120px_1fr] items-start md:items-center border-b border-[#9ECFD7] pb-6 md:pb-8 2xl:pb-10 gap-4 md:gap-0">
                        <div />

                        <span className="flex h-[24px] w-[50px] 2xl:h-[26px] 2xl:w-[55px] items-center justify-center rounded-[5px] bg-red-600 noto-jp text-[12px] 2xl:text-[14px] leading-[24px] tracking-[-0.042em] text-white">
                            必須
                        </span>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 2xl:gap-20">
                            <label className="flex items-center gap-3 2xl:gap-4 noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] tracking-[-0.042em] text-[#333333]">
                                <input
                                    type="radio"
                                    name="type"
                                    value="採用について"
                                    checked={formData.type === "採用について"}
                                    onChange={handleChange}
                                    required
                                    className="h-[16px] w-[16px] 2xl:h-[18px] 2xl:w-[18px]"
                                />
                                採用について
                            </label>

                            <label className="flex items-center gap-3 2xl:gap-4 noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] leading-[24px] tracking-[-0.042em] text-[#333333]">
                                <input
                                    type="radio"
                                    name="type"
                                    value="その他"
                                    checked={formData.type === "その他"}
                                    onChange={handleChange}
                                    required
                                    className="h-[16px] w-[16px] 2xl:h-[18px] 2xl:w-[18px]"
                                />
                                その他
                            </label>
                        </div>
                    </div>

                    {fields.map((field) => (
                        <div
                            key={field.name}
                            className="grid grid-cols-1 md:grid-cols-[180px_80px_1fr] xl:grid-cols-[240px_100px_1fr] 2xl:grid-cols-[300px_120px_1fr] items-start md:items-center border-b border-[#9ECFD7] py-6 md:py-8 2xl:py-10 gap-3 md:gap-0"
                        >
                            <label className="noto-jp text-[18px] md:text-[21px] 2xl:text-[24px] font-bold leading-[27px] text-[#1A3263]">
                                {field.label}
                            </label>

                            <div>
                                {field.required && (
                                    <span className="flex h-[24px] w-[50px] 2xl:h-[26px] 2xl:w-[55px] items-center justify-center rounded-[5px] bg-red-600 noto-jp text-[12px] 2xl:text-[14px] leading-[24px] tracking-[-0.042em] text-white">
                                        必須
                                    </span>
                                )}
                            </div>

                            <input
                                name={field.name}
                                type={field.type}
                                required={field.required}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="h-[50px] md:h-[56px] 2xl:h-[60px] w-full rounded-[4px] border border-[#707070] px-4 2xl:px-5 outline-none"
                            />
                        </div>
                    ))}

                    <div className="grid grid-cols-1 md:grid-cols-[180px_80px_1fr] xl:grid-cols-[240px_100px_1fr] 2xl:grid-cols-[300px_120px_1fr] items-start md:items-center border-b border-[#9ECFD7] py-6 md:py-8 2xl:py-10 gap-3 md:gap-0">
                        <label className="noto-jp text-[18px] md:text-[21px] 2xl:text-[24px] font-bold leading-[27px] text-[#1A3263]">
                            郵便番号
                        </label>

                        <div />

                        <div className="flex flex-wrap items-center gap-3 md:gap-4 2xl:gap-5">
                            <span className="noto-jp text-[16px] md:text-[18px] 2xl:text-[20px] text-[#333333]">
                                〒
                            </span>

                            <input
                                name="postal1"
                                value={formData.postal1}
                                onChange={handleChange}
                                className="h-[50px] md:h-[56px] 2xl:h-[60px] w-[75px] 2xl:w-[85px] rounded-[4px] border border-[#707070] px-3 outline-none"
                            />

                            <span>-</span>

                            <input
                                name="postal2"
                                value={formData.postal2}
                                onChange={handleChange}
                                className="h-[50px] md:h-[56px] 2xl:h-[60px] w-[105px] 2xl:w-[120px] rounded-[4px] border border-[#707070] px-3 outline-none"
                            />

                            <span className="noto-jp text-[13px] md:text-[16px] 2xl:text-[20px] text-[#707070]">
                                （半角英数）※自動で住所が入ります。
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[180px_80px_1fr] xl:grid-cols-[240px_100px_1fr] 2xl:grid-cols-[300px_120px_1fr] items-start md:items-center border-b border-[#9ECFD7] py-6 md:py-8 2xl:py-10 gap-3 md:gap-0">
                        <label className="noto-jp text-[18px] md:text-[21px] 2xl:text-[24px] font-bold leading-[27px] text-[#1A3263]">
                            都道府県
                        </label>

                        <div />

                        <select
                            name="prefecture"
                            value={formData.prefecture}
                            onChange={handleChange}
                            className="h-[44px] 2xl:h-[48px] w-[170px] 2xl:w-[190px] rounded-none border border-[#707070] bg-white px-3 outline-none"
                        >
                            <option value="">選択してください</option>
                            <option value="山形県">山形県</option>
                            <option value="東京都">東京都</option>
                            <option value="大阪府">大阪府</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[180px_80px_1fr] xl:grid-cols-[240px_100px_1fr] 2xl:grid-cols-[300px_120px_1fr] items-start border-b border-[#9ECFD7] py-6 md:py-8 2xl:py-10 gap-3 md:gap-0">
                        <label className="noto-jp text-[18px] md:text-[21px] 2xl:text-[24px] font-bold leading-[27px] text-[#1A3263]">
                            お問合せ内容
                        </label>

                        <div>
                            <span className="flex h-[24px] w-[50px] 2xl:h-[26px] 2xl:w-[55px] items-center justify-center rounded-[5px] bg-red-600 noto-jp text-[12px] 2xl:text-[14px] leading-[24px] tracking-[-0.042em] text-white">
                                必須
                            </span>
                        </div>

                        <textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="h-[180px] md:h-[220px] 2xl:h-[260px] w-full rounded-none border border-[#707070] p-4 2xl:p-5 outline-none"
                        />
                    </div>

                    <p className="mt-10 md:mt-14 2xl:mt-20 text-center noto-jp text-[12px] md:text-[14px] 2xl:text-[16.7px] leading-[22px] 2xl:leading-[24px] tracking-[-0.0293em] text-[#707070]">
                        ※ ご入力いただいた個人情報につきましては、お問合せ対応の業務に利用させていただきます。
                    </p>


                </form>

            </section>
            <section className="relative w-full max-w-490 mx-auto overflow-hidden 2xl:px-0">
                <div className="relative min-h-[620px] md:min-h-[620px] xl:min-h-[600px] 2xl:min-h-0">
                    <Image
                        src="/Assets/Vector (4).png"
                        alt=""
                        width={1920}
                        height={722}
                        className="absolute inset-0 2xl:static block w-full h-full 2xl:h-auto object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white -top-8 md:-top-20 xl:-top-20 2xl:-top-60">
                        <h2 className="noto-serif-jp font-bold text-[#FFA310] text-center text-[22px] md:text-[26px] xl:text-[30px] 2xl:text-[32px] leading-[27px]">
                            個⼈情報保護について
                        </h2>

                        <div className="mt-6 md:mt-8 xl:w-270 2xl:mt-10 w-full max-w-[1769px] space-y-5 md:space-y-7 2xl:space-y-10 text-center">
                            <p className="noto-jp font-normal mt-2 xl:mt-10 2xl:mt-20 tracking-[-0.042em] text-[14px] md:text-[20px] xl:text-[20px] 2xl:text-[28px] leading-[24px] md:leading-[30px] 2xl:leading-[35px]">
                                １．個⼈情報の利⽤⽬的について収集した個⼈情報は、本⼈の許可なく雇⽤管理に関連する資料その他当社で必要とされる作業の範囲内以外の⽬的では使⽤しません。
                            </p>

                            <p className="noto-jp font-normal mt-2 xl:mt-10 2xl:mt-20 tracking-[-0.042em] text-[14px] md:text-[20px] xl:text-[20px] 2xl:text-[28px] leading-[24px] md:leading-[30px] 2xl:leading-[35px]">
                                ２．個⼈情報の第三者提供について収集した個⼈情報は、委託業務、法律上公的機関への届出･提出が必要な場合、事故等での緊急時を除いて第三者へ提供しません。
                            </p>

                            <p className="noto-jp font-normal mt-2 xl:mt-10 2xl:mt-20 tracking-[-0.042em] text-[14px] md:text-[20px] xl:text-[20px] 2xl:text-[28px] leading-[24px] md:leading-[30px] 2xl:leading-[35px]">
                                ３．個⼈情報の開⽰等について収集した個⼈情報の開⽰、内容の訂正、追加、削除の求めがあった場合には、ご本⼈であることを確認のうえすみやかに対応します。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-10 md:py-12 2xl:py-16 cursor-pointer">
                    <button
                        form="contactForm"
                        type="submit"
                        className="flex h-[76px] w-[310px] md:h-[92px] md:w-[410px] 2xl:h-[118px] 2xl:w-[513px] items-center justify-between rounded-full bg-[#1CA8CB] hover:opacity-85 cursor-pointer pl-8 md:pl-12 2xl:pl-[65px] pr-4 md:pr-5 2xl:pr-[27px] shadow-[0px_4px_4px_0px_#00000040]"
                    >
                        <span className="noto-jp font-medium tracking-[0.0781em] text-white text-[22px] md:text-[32px] 2xl:text-[40px] leading-[15px]">
                            確認画⾯へ
                        </span>

                        <span className="flex h-[52px] w-[52px] md:h-[66px] md:w-[66px] 2xl:h-[83px] 2xl:w-[83px] items-center justify-center rounded-full bg-white text-[#1CA8CB] text-[34px] md:text-[42px] 2xl:text-[52px] font-bold">
                            →
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
}