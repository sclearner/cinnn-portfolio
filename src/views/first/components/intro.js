import React from "react";
import { MaterialButton } from "@v/components/button";

export function IntroSubsection() {
    return (
        <div>
            <h3>Chào mừng đến với portfolio của tôi</h3>
            <h1>Tôi là</h1>
            <h1 className="text-primary">Lưu Thị Ngọc Quỳnh</h1>
            <h1>Data Analyst</h1>
            <p className="text-2xl">Quote nào hay hay ở đây</p>
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
        <div className="flex gap-11 mt-12">
            <MaterialButton>Tuyển ngay!</MaterialButton>
            <MaterialButton mode="secondary" onClick={downloadCV}>
                <div className="flex gap-4">
                    Tải CV xuống
                    <img src="/icons/download.svg" />
                </div>
            </MaterialButton>
        </div>
    );
}