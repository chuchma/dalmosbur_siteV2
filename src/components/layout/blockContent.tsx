
export default function BlockContent({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col justify-center gap-fluid-2xlarge">
        {children}
    </div>
}