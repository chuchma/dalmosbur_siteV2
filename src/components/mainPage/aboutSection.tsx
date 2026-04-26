import Link from "next/link";
import SectionContainer from "../layout/sectionContainer";
import Header2 from "../UI/header2";
import { ArrowRight } from "../UI/icons";

export default function AboutSection({hideBtn}: {hideBtn?: boolean}) {
    return <section>
    <SectionContainer>
        <Header2 title="о нас" header="Дальмосбур"/>
        <div className="flex flex-col gap-fluid-large">
            <div>
                <p>ООО «Дальмосбур» основано в 2018 году как предприятие, ориентированное на оказание высокотехнологичных услуг в сфере горных работ. За годы деятельности мы выросли из небольшой бригады в компанию с собственным парком техники и штатом сертифицированных специалистов.
                </p>
                <br />
                <p>
                    В основе нашей деятельности — команда сертифицированных специалистов с многолетним опытом в горном деле: бурильщики, взрывники, инженеры-технологи и геодезисты. Все сотрудники проходят регулярное обучение и аттестацию в соответствии с требованиями Ростехнадзора и внутренних стандартов безопасности.
                </p>
            </div>
            <img
                src='/images/about.jpeg'
                alt='about us'
                className="w-full max-h-[712px] h-full"
                style={{ objectPosition: '50% 0' }}
            />
        </div>
         <Link href="/aboutUs"  className="flex items-center justify-end text-body-small gap-fluid-large py-fluid-medium mt-fluid-medium px-fluid-large rounded-fluid-xsm cursor-pointer duration-500 ease-in-out hover:text-[var(--primary-accent-hover)] text-[var(--primary-accent)] whitespace-nowrap">Больше о нас {hideBtn ? null : <ArrowRight />}</Link>
    </SectionContainer>
    </section>

}