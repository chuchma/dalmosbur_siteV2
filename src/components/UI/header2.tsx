import Link from "next/link";
import Button from "./button";
import { ArrowRight } from "./icons";

type Header2Prop = {
    title: string,
    header: string,
    btnText?: string,
    hideBtn?: boolean,
    href?: string

}

export default function Header2({ title, header, btnText, hideBtn, href = "/" }: Header2Prop) {
    return <div className="flex flex-col justify-between pb-fluid-xlarge md:flex-row">
        <div>
            <p className="capitalize text-[var(--primary-accent)] text-title-xlarge-semiBold">{title}</p>
            <h2 className="text-title-2xlarge">{header}</h2>
        </div>
     

    </div>
}