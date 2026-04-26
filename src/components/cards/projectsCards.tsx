'use client'
import Card from "./card";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";
import Button from "../UI/button";

export default function ProjectsCards({ showAll }: { showAll?: boolean }) {
    const mainServices = PROJECTS.slice(0, 4)
    const [visibleCount, setVisibleCount] = useState(8);
    const increment = 8;
    return (
        <div >
            {showAll ?
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">
                    {PROJECTS.slice(0, visibleCount).map(item =>
                        <Card
                            key={item.title}
                            title={item.title}
                            description={item.shortDescription}
                            bg={item.image}
                            href={`/projects/${item.slug}`}/>
                    )}
                    {visibleCount >= PROJECTS.length ? <button className="col-span-full py-fluid-medium px-fluid-large cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Вернуться в начало
                    </button> : <Button className="col-span-full" onClick={() => setVisibleCount(prev => prev + increment)}>Загрузить больше</Button>}
                </div>

                :

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large overflow-hidden">
                    {mainServices.map(item =>
                        <Card
                            key={item.title}
                            title={item.title}
                            description={item.shortDescription}
                            bg={item.image}
                            href={`/projects/${item.slug}`}/>
                    )}

                </div>}

        </div>
    )
}