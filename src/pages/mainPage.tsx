import AboutSection from "@/components/mainPage/aboutSection";
import FeedbackSection from "@/components/mainPage/feedbackSection";
import Advantages from "@/components/mainPage/advantages";
import ProjectsSection from "@/components/mainPage/projectsSection";
import ServicesSection from "@/components/mainPage/servicesSection";
import MainBlock from "@/components/mainPage/mainBlock";


export default function MainPage() {
    // поменять на секшн контейнер с падингом топ
    return <div className="flex flex-col items-center justify-center">
       <MainBlock/>
        <AboutSection />
       <Advantages/>
        <ProjectsSection />
        <ServicesSection />
        <FeedbackSection />
    </div>
}