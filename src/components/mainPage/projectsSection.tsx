import SectionContainer from "../layout/sectionContainer";
import Card from "../cards/card";
import Cards from "../cards/cards";
import Header2 from "../UI/header2";
import ProjectsCards from "../cards/projectsCards";
import Link from "next/link";
import { ArrowRight } from "../UI/icons";


export default function ProjectsSection({ hideBtn}: {hideBtn?: boolean}) {
    return <SectionContainer>
        <Header2 title="Проекты" header="Наши работы на крупнейших объектах"/>
       <ProjectsCards/>
         <Link href="/projects" className="flex items-center justify-end text-body-small gap-fluid-large py-fluid-medium mt-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--primary-accent-hover)] text-[var(--primary-accent)] whitespace-nowrap">Все проекты {hideBtn ? null : <ArrowRight />}</Link>
    </SectionContainer>
}