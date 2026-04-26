import SectionContainer from "@/components/layout/sectionContainer";
import Header2 from "@/components/UI/header2";
import ServicesPage from "@/pages/servicesPage";



export default function Services() {
    return <SectionContainer>
        <Header2 title="Услуги" header="Наши услуги" btnText="Все услуги" hideBtn />
   <ServicesPage/>
    </SectionContainer>

}