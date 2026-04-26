import clsx from "clsx";
import BlockContent from "./blockContent";
//TODO останавливается адаптацию от 500px

export default function SectionContainer({ children, className}: { children: React.ReactNode, className?: string}) {
    return <div className={clsx(`w-full flex justify-center items-center py-fluid-4xlarge`, className)}><div className="max-w-[1400px] flex flex-col w-full h-full px-fluid-medium">{children}</div></div>
}
