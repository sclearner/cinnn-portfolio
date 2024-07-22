import React from "react";

export function SkillsList() {
    const skills = [
        {
            name: 'Digital Markerting',
            image: 'images/digital-marketing.png',
        },
        {
            name: 'Branding',
            image: '/images/brand.png',
        },
        {
            name: 'Copywriting',
            image: '/images/copywriting.png',
        },
        {
            name: 'Search Engine Optimization',
            image: '/images/seo.png',
        }
    ];

    return (<div className="grid grid-cols-2 gap-4">
        {skills.map((e) => <div key={e.name} className="flex flex-col items-center">
            <img className="aspect-square rounded-full" src={e.image}/>
            <p className="font-semibold">{e.name}</p>
        </div>)}
    </div>)
}