import React from 'react';

export function Tabbar() {
    return (<div className='grow flex gap-10 justify-end items-center xl:px-7 md:px-4'>
        <Tab href="#first">Trang chủ</Tab>
        <Tab href="#about">Về tôi</Tab>
        <Tab href="#achievement">Thành tựu</Tab>
        <Tab href="#project">Dự án</Tab>
        <Tab href="#contact">Liên hệ</Tab>
    </div>);
}

function Tab({children, href}) {
    return (<a href={href} className='font-semibold'>
        {children}
    </a>)
}