import React from "react";
import { MaterialButton } from "@v/components/button";

export function IntroSubsection() {
    return (
        <div className="max-lg:flex max-lg:flex-col max-lg:items-stretch max-lg:text-center">
            <h3>Chào mừng đến với portfolio của tôi</h3>
            <h1 className="max-lg:text-5xl">Tôi là</h1>
            <h1 className="max-lg:text-5xl text-primary">Lưu Thị Ngọc Quỳnh</h1>
            <h1 className="max-lg:text-5xl">Data Analyst</h1>
            <p className="text-base lg:text-2xl">Khi bạn muốn hành động, động lực chính là mục tiêu còn thái độ quyết định bạn làm điều đó tốt như thế nào.</p>
            <HRButtonBar />
        </div>
    )
}

function HRButtonBar() {
    function downloadCV() {
        const link = document.createElement('a')
        const url = '/docs/CV_LUU THI NGOC QUYNH.pdf'

        link.href = url
        link.download = 'CV_LUU THI NGOC QUYNH.pdf'
        document.body.appendChild(link)
        link.click()

        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    }

    return (
        <div className="flex max-lg:flex-col gap-4 lg:gap-11 mt-4 lg:mt-12 max-lg:items-stretch">
            <MaterialButton className="max-lg:w-full">Tuyển ngay!</MaterialButton>
            <MaterialButton className="max-lg:w-full" mode="secondary" onClick={downloadCV}>
                <div className="flex gap-4 justify-center">
                    Tải CV xuống
                    <img src="/icons/download.svg" />
                </div>
            </MaterialButton>
        </div>
    );
}