import SectionContainer from "../layout/sectionContainer";
import Header2 from "../UI/header2";
import ServicesCards from "../cards/servicesCards";
import { ArrowRight } from "../UI/icons";
import Link from "next/link";


export default function ServicesSection({hideBtn}: {hideBtn?: boolean}) {
    return <section>
    <SectionContainer>
        {/*TODO gap больше чем надо. Нужно унифицировать компонент <div className="flex flex-col gap-fluid-large"></div> */}
        <Header2 title="Услуги" header="Комплексный подход к решению задач горнодобывающей отрасли"/>
       <div className="flex flex-col gap-fluid-large">
        <p>ООО «Дальмосбур» предлагает комплексный подход к решению задач горнодобывающей отрасли — от геологоразведочного бурения до полного цикла буро-взрывных работ на промышленных объектах.</p>
        <ServicesCards />
       </div>
    <Link href="/projects" className="flex items-center justify-end text-body-small gap-fluid-large py-fluid-medium mt-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--primary-accent-hover)] text-[var(--primary-accent)] whitespace-nowrap">Все услуги {hideBtn ? null : <ArrowRight />}</Link>
    </SectionContainer>
    </section>
}