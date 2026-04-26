import SectionContainer from '@/components/layout/sectionContainer'
import Header2 from '@/components/UI/header2'
import ProjectsPage from '@/pages/projectsPage'
export default function Projects() {
    return <SectionContainer>
        <Header2 title="Проекты" header="Наши работы на крупнейших объектах" btnText="Все проекты" hideBtn/>
        <ProjectsPage />
    </SectionContainer>
 
}