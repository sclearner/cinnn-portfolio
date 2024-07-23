import React from "react";
import logo from '@p/icons/icon.svg';

export function HomeButton() {
    return (
        <a className="flex items-center gap-2" href="#">
            <img src={logo} />
            <b>LTNQ</b>
        </a>
    )
}