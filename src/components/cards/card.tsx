import Link from "next/link";

type CardProps = {
    title: string, 
    description: string, 
    bg: string, 
    href: string,
}

export default function Card({ title, description, bg, href }: CardProps) {
    return <article className="w-full max-w-[708px] aspect-video relative transition transform hover:scale-[1.02] group" style={{
        backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <Link href={href}>
            <div className='absolute left-0  top-0 w-full h-full bg-[var(--primary-black-50)] group-hover:bg-[var(--primary-black-80)] transition'></div>
            <div className="text-[var(--primary-white)] absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-title-xlarge-semiBold text-center">{title}</p>
                <p className="text-center">{description}</p>
            </div>
        </Link>
    </article>
}

