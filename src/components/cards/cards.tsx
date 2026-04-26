'use client'

//отделить клиентский компонент в отдельный
import { PROJECTS } from "@/data/projects"
import Card from "./card"
import { useState } from "react"
import Button from "../UI/button"

const bestProjects = PROJECTS.slice(0, 4)


export default function Cards({ showAll }: { showAll?: boolean }) {
    const [visibleCount, setVisibleCount] = useState(8);
    const increment = 8;
    return <>
        {/* {showAll ?
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">
                {PROJECTS.slice(0, visibleCount).map(item =>
                    <Card
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        bg={item.image}
                        description={item.shortDescription}
                    />)}
                {visibleCount >= PROJECTS.length ? <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    ↖ Вернуться в начало
                </button> : <Button onClick={() => setVisibleCount(prev => prev + increment)}>Загрузить больше</Button>}
            </div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-large">
                {bestProjects.map(item =>
                    <Card
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        bg={item.image}
                        description={item.shortDescription} />)}
            </div>} */}
    </>
}