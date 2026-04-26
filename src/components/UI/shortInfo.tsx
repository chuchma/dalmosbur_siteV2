import { ADVANTAGES } from '@/data/data'

export default function ShortInfo() {
    return <div className='mt-fluid-4xlarge '>
        <div className="flex bg-[var(--primary-white)] max-w-[1400px] ">
            {ADVANTAGES.map(item => <div className='flex flex-col gap-fluid-small items-center py-fluid-small px-fluid-large border-r-[1px] last:border-r-0' key={item.text}><img style={{ 
    width: 'clamp(40px, 8vw, 100px)',
    height: 'auto'
  }}  className='max-w-[100px]' src={item.image} /><p className='text-center'>{item.text}</p></div>)}
        </div>
    </div>
}

// absolute z-30 bottom-[-20%] left-[5%]
//   sm:bottom-[-4%] sm:left-[8%]
//   md:bottom-[-6%] md:left-[12%]
//   lg:bottom-[-10%] lg:left-[15%]