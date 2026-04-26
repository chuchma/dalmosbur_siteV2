'use client'

import ColorWrap from "@/components/layout/colorWrap"
import SectionContainer from "@/components/layout/sectionContainer"
import FullScreen from "@/components/UI/fullScreen"
import { Rock } from "@/components/UI/icons"
import { PROJECTS } from "@/data/projects"
import { useParams } from "next/navigation"


export default function Project() {

    const params = useParams()
    const projectId = params?.projectId

    const project = PROJECTS.find(
        (project) => project.slug.toString() === projectId
    );
    ;

    if (!project) {
        return <div>Загрузка...</div>;
    }

    const info = [
        {
            label: "объем",
            title: project.volume,
        },
        {
            label: "регион",
            title: project.region,
        },
        {
            label: "год",
            title: project.year,
        },
        {
            label: "продолжительность",
            title: project.duration,
        },
    ];

    return (
        <div className="w-full">
            <section className="flex flex-col items-center" style={{
                backgroundImage: `linear-gradient(rgba(15, 42, 77, 0.8), rgba(15, 42, 77, 0.8)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="flex flex-col items-center text-[var(--primary-white)] p-fluid-3xlarge">
                    <h1 className="text-title-3xlarge-semiBold pb-fluid-medium">{project.title}</h1>
                    <p className="text-[var(--primary-accent)] text-title-large">{project.shortDescription}</p>
                </div>
            </section>
            <section className="flex flex-col items-center px-fluid-small py-fluid-2xlarge" style={{
                backgroundImage: 'url(/images/background.svg)', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <SectionContainer>
                    <h3 className="text-title-xlarge text-center pb-fluid-2xlarge ">
                        <span className="text-title-xlarge-semiBold text-[var(--secondary-accent)]">Тип работ: </span>
                        {project.type}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-2xlarge">
                        <div className="grid grid-cols-2 gap-fluid-2xlarge">
                            {info.map((item) => (
                                <div
                                    key={`${item.label}-${item.title}`}
                                    className="flex flex-col justify-center items-center md:items-start"
                                >
                                    <p className="uppercase text-[var(--primary-grey)] text-xs md:text-sm tracking-wider mb-1">
                                        {item.label}
                                    </p>
                                    <h3 className="text-title-xlarge-semiBold text-[var(--primary-accent)] md:text-title-large truncate">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center">

                            <p className="text-title-medium md:text-title-large leading-relaxed text-pretty ">
                                {project.results}
                            </p>
                        </div>
                    </div>
                </SectionContainer>
            </section>
            <ColorWrap>
                <div className="flex flex-col gap-fluid-2xlarge lg:flex-row">
                    {/* Картинка: 100% на мобиле, 50% на десктопе */}
                    <div className="w-full lg:w-1/2 aspect-video overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Текст: 100% на мобиле, 50% на десктопе */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-title-2xlarge pb-fluid-xlarge">Описание</h2>
                        <p className="leading-relaxed text-pretty">{project.fullDescription}</p>
                    </div>
                </div>
            </ColorWrap>
            <section style={{
                backgroundImage: 'url(/images/backgroundRight.svg)', backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <SectionContainer>
                    <div className="flex flex-col-reverse text-center lg:flex-row justify-between gap-fluid-xlarge">
                        <ul className="flex flex-col items-center lg:items-start basis-3/5 max-w-full">
                            {project.process.map((item, index) => <li key={`${item}-${index}`} className={`flex gap-fluid-xlarge text-title-large first-letter:uppercase text-center lg:text-start ${index !== project.process.length - 1 && 'pb-fluid-2xlarge'}`}><Rock className="text-[var(--primary-accent)] w-9 h-9 flex-shrink-0" />{item}</li>)}
                        </ul>
                        <h2 className="text-title-xlarge pb-fluid-2xlarge">
                            <span className="text-title-2xlarge-semiBold text-[var(--secondary-accent)]">Процесс работ</span>
                        </h2>
                    </div>
                </SectionContainer>
            </section>
            <section className="bg-[var(--secondary-accent)] text-[var(--primary-white)]">
                <ColorWrap>
                    {project.location.map((item, index) => <h3 key={`${item}-${index}`} className='flex justify-center px-fluid-large py-fluid-large text-title-large-semiBold text-center border-0 border-[2px] border-[var(--primary-accent)] '>{item}</h3>)}
                </ColorWrap>
            </section>
        </div>
    )
}

// {index !== project.location.length - 1 ? <Rock className="text-[var(--primary-accent)] w-9 h-9 flex-shrink-0" /> : ""}
