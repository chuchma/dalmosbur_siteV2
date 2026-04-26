import SectionContainer from "./sectionContainer";

export default function ColorWrap({ children }: { children: React.ReactNode }) {
    return <section className="bg-[var(--secondary-accent)] text-[var(--primary-white)] w-full">
        <SectionContainer>
            <div className="flex justify-center">
                  <div className='flex flex-col w-full md:flex-row gap-fluid-xlarge'>
                {children}
                  </div>
            </div>
        </SectionContainer>
    </section>
}