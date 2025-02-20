import React from "react";

export function FirstAvatar() {
    return (
        <div className="relative lg:min-h-[500px] max-lg:max-w-[350px] w-full lg:min-w-[500px] aspect-square rounded-full overflow-hidden basis-[350px] lg:basis-[500px]">
            <img className="absolute h-full aspect-square object-cover" src="/images/avatar.png" />
        </div>
    )
}
