'use client'

import ColorWrap from "@/components/layout/colorWrap"
import SectionContainer from "@/components/layout/sectionContainer"
import FullScreen from "@/components/UI/fullScreen"
import { Rock } from "@/components/UI/icons"
import { SERVICES } from "@/data/services"
import { useParams } from "next/navigation"


export default function Service() {

    const params = useParams()
    const serviceId = params?.serviceId

    const service = SERVICES.find(
        (service) => service.slug.toString() === serviceId
    );


    if (!service) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="w-full">
            <section className="flex flex-col items-center" style={{
                backgroundImage: `linear-gradient(rgba(15, 42, 77, 0.8), rgba(15, 42, 77, 0.8)), url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="flex flex-col items-center text-[var(--primary-white)] p-fluid-3xlarge">
                    <h1 className="text-title-3xlarge-semiBold pb-fluid-medium">{service.title}</h1>
                    <p className="text-[var(--primary-accent)] text-title-large text-center">{service.shortDescription}</p>
                </div>
            </section>
            <section style={{
                backgroundImage: 'url(/images/background.svg)', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <SectionContainer>
                    <div className="flex flex-col lg:flex-row justify-between gap-fluid-xlarge">
                        <h2 className="text-title-xlarge text-center pb-fluid-2xlarge">
                            <span className="text-title-2xlarge-semiBold text-[var(--secondary-accent)]">Процесс работы</span>
                        </h2>
                        <ul className="flex flex-col items-center lg:items-start">
                            {service.process.map((item, index) => <li key={`${item}-${index}`} className={`flex gap-fluid-xlarge text-title-large text-center lg:text-start ${index !== service.process.length - 1 && 'pb-fluid-2xlarge'}`}><Rock className="text-[var(--primary-accent)] w-9 h-9 flex-shrink-0" />{item}</li>)}
                        </ul>
                    </div>
                </SectionContainer>
            </section>
            <ColorWrap>
            

                <div className="flex flex-col gap-fluid-2xlarge lg:flex-row">
                    {/* Картинка: 100% на мобиле, 50% на десктопе */}
                    <div className="w-full lg:w-1/2 aspect-video overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Текст: 100% на мобиле, 50% на десктопе */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-title-2xlarge pb-fluid-xlarge">Описание</h2>
                        <p className="leading-relaxed text-pretty">{service.fullDescription}</p>
                    </div>
                </div>
            </ColorWrap>
            <section style={{
                backgroundImage: 'url(/images/backgroundRight.svg)', backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <SectionContainer>
                    <div className="flex flex-col-reverse text-center lg:flex-row justify-between gap-fluid-xlarge" >
                        <ul className="flex flex-col items-center lg:items-start basis-3/5 max-w-full">
                            {service.process.map((item, index) => <li key={`${item}-${index}`} className={`flex gap-fluid-xlarge text-title-large text-center lg:text-start ${index !== service.process.length - 1 && 'pb-fluid-2xlarge'}`}><Rock className="text-[var(--primary-accent)] w-9 h-9 flex-shrink-0" />{item}</li>)}
                        </ul>
                        <h2 className="text-title-xlarge pb-fluid-2xlarge">
                            <span className="text-title-2xlarge-semiBold text-[var(--secondary-accent)]">Преимущества</span>
                        </h2>
                    </div>
                </SectionContainer>
            </section>
            <section className="bg-[var(--secondary-accent)] text-[var(--primary-white)]">
                <SectionContainer>
                    <div className="flex justify-center">
                        {service.technologies.map((item, index) => <h3 key={item} className={`flex gap-fluid-xlarge pr-fluid-xlarge items-center text-title-xlarge-semiBold`}>{item}{index !== service.technologies.length - 1 ? <Rock className="text-[var(--primary-accent)] w-9 h-9 flex-shrink-0" /> : ""}</h3>)}
                    </div>
                </SectionContainer>
            </section>
        </div>
    )
}