
import Link from "next/link";
import SectionContainer from "./sectionContainer";
import { TEXTS } from "@/data/data";
import IconText from "@/components/UI/iconText";
import { Insta, Location, Mail, Phone, Telegram, YouTube } from "@/components/UI/icons";
import ModalTrigger from "../UI/modal/modalTrigger";
import OrderForm from "../UI/form/orderForm";

export default function Footer() {
    return <footer className="flex flex-col justify-center items-center overflow-hidden" style={{
        backgroundImage: 'url(/images/footerBg.svg)', backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div className="max-w-[1400px] flex flex-col w-full h-full px-fluid-medium py-fluid-xlarge">
            <h1 className="text-title-xlarge-semiBold pb-fluid-2xlarge text-[var(--primary-accent)]">Дальмосбур</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-2xlarge w-full">
                <nav>
                    <h3 className="text-title-medium-semiBold pb-fluid-large">Навигация</h3>
                    <ul className="flex flex-col gap-fluid-medium">
                        {TEXTS.map(item => <li key={item.title}><Link href={item.link}>{item.title}</Link></li>)}
                    </ul>
                </nav>
                <div>
                    <h3 className="text-title-medium-semiBold pb-fluid-large">Контакты</h3>
                    <div className="flex flex-col gap-fluid-medium">
                        <IconText info="+7 982 154 25 45"><Phone /></IconText>
                        <IconText info="dalmosbur@gmail.com"><Mail /></IconText>
                        <IconText info="г. Москва, ул. Новый Арбат, 145"><Location /></IconText>
                        <div className="flex gap-fluid-medium">
                            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]">
                                <YouTube size={36} />
                            </a>
                            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]">
                                <Insta size={36} />
                            </a>
                            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]">
                                <Telegram size={36} />
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <h3 className="text-title-medium-semiBold pb-fluid-large">Обратная связь</h3>
                    <div className="flex flex-col gap-fluid-medium">
                        <ModalTrigger trigger={
                            <p className="hover:text-[var(--primary-accent)] text-[var(--secondary-accent-hover)] underline duration-500 cursor-pointer">Оставить заявку</p>
                        } title="Оставить заявку">
                            <OrderForm />
                        </ModalTrigger>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap gap-fluid-medium justify-between items-center px-fluid-medium text-[var(--primary-grey)] w-full border-[1px] border-[var(--secondary-lightGrey)] py-fluid-medium max-lg:flex-col max-lg:text-center">
            <p className="max-lg:w-full">Политика обработки персональных данных | Согласие на обработку персональных данных</p>
            <p className="max-lg:w-full">© 2026 ООО «Дальмосбур»</p>

        </div>
    </footer>
}
