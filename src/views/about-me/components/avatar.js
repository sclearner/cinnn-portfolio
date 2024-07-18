import React from "react";

export function AboutMeAvatar() {
    return (
        <div className="relative min-h-[550px] h-full min-w-[550px] aspect-square rounded-full overflow-hidden basis-[550px]">
            <img className="absolute h-full w-full object-cover" src="/images/avatar.png" />
        </div>
    )
}
