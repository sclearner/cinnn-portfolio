import React from "react";

import digitalMarketing from "@p/images/digital-marketing.png";
import brand from "@p/images/brand.png";
import copyWriting from "@p/images/copywriting.png";
import seo from "@p/images/seo.png";

export function SkillsList() {
    const skills = [
        {
            name: 'Digital Markerting',
            image: digitalMarketing,
        },
        {
            name: 'Branding',
            image: brand,
        },
        {
            name: 'Copywriting',
            image: copyWriting,
        },
        {
            name: 'Search Engine Optimization',
            image: seo,
        }
    ];

    return (<div className="grid grid-cols-2 gap-4">
        {skills.map((e) => <div key={e.name} className="flex flex-col items-center">
            <img className="aspect-square rounded-full" src={e.image}/>
            <p className="font-semibold">{e.name}</p>
        </div>)}
    </div>)
}