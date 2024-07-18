import React from "react";
import { MaterialButton } from "@v/components/button";

export function ContactButton() {
    
    function handleClick() {
        window.location.assign('#contact')
    }

    return (<MaterialButton mode="primary" onClick={handleClick}>
        Liên hệ ngay
    </MaterialButton>)
}