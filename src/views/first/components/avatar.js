import React from "react";

export function FirstAvatar() {
    return (
        <div className="relative min-h-[500px] h-full min-w-[500px] aspect-square rounded-full overflow-hidden basis-[500px]">
            <img className="absolute h-full w-full object-cover" src="/images/avatar.png" />
        </div>
    )
}
