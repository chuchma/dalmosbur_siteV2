import { ADVANTAGES } from '@/data/data'
import ColorWrap from '../layout/colorWrap'
import { Rock } from '../UI/icons'

export default function ShortInfo() {
    return <ColorWrap>
        <div className='flex flex-col md:flex-row gap-fluid-medium'>
            {ADVANTAGES.map((item, index) => <div className='flex justify-center px-fluid-large py-fluid-large text-title-large-semiBold text-center border-0 border-[2px] border-[var(--primary-accent)]' key={item.text}><p className='text-center'>{item.text}</p></div>)}
        </div>

    </ColorWrap>

}

