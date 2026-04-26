 export default function FullScreen ({children}: {children: React.ReactNode}){
    return  <div className="relative w-full h-[calc(100dvh-92px)] overflow-hidden">{children}</div>
 }