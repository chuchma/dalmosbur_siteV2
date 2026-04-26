import Button from "../UI/button";
import OrderForm from "../UI/form/orderForm";
import FullScreen from "../UI/fullScreen";
import ModalTrigger from "../UI/modal/modalTrigger";

export default function MainBlock() {


  return (
    <section className="relative w-full  h-[calc(100dvh-92px)]">
      <FullScreen>
        {/* Изображение */}
        <img
          src="/images/mainBlock/wim-van.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Оверлей — используем CSS-переменную, если она есть */}
        <div className="absolute inset-0 bg-[var(--primary-black-50)] z-10" />

        {/* Контент — без pt, с flex-центрированием */}
        <div className="absolute inset-0 flex flex-col justify-center px-[5%] sm:px-[8%] md:px-[10%] lg:px-[15%] z-20 text-[var(--primary-white)]">
          <div>
            <h1 className="text-title-3xlarge-semiBold leading-tight pb-fluid-2xlarge">
              Профессиональные буровые<br />и буро-взрывные работы
            </h1>
            <p className="mb-8">
              ООО «Дальмосбур» — надёжный подрядчик для горнодобывающей отрасли
            </p>
              <ModalTrigger trigger={
                <Button>Оставить заявку</Button>
              } title="Оставить заявку">
                <OrderForm />
              </ModalTrigger>
          </div>
        </div>
      </FullScreen>
    </section>
  );
}



// 'use client';

// import { useState, useEffect } from 'react';
// import Button from './button';
// import FullScreen from './fullScreen';


// //TODO слайдер показывает только первый слайд
// interface AutoSliderProps {
//   images: string[],
//   interval?: number,
//   showIndications?: boolean,
// }

// export default function AutoSlider({
//   images,
//   interval = 5000,
// }: AutoSliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [images.length, interval]);

//   if (!images || images.length === 0) return null;

//   return (
//     <section>
//    <FullScreen>
//       {/* Контент поверх слайдера */}
//       <div className="absolute inset-0 pt-[120px] px-[5%] sm:px-[8%] md:px-[10%] lg:px-[15%] flex flex-col items-start justify-center z-20 text-[var(--primary-white)]">
//         <h1 className="text-title-3xlarge-semiBold pb-fluid-large">
//           Профессиональные буровые
//           <br />
//           и буро-взрывные работы
//         </h1>
//         <p className="pb-fluid-4xlarge">
//           ООО «Дальмосбур» — надёжный подрядчик для горнодобывающей отрасли
//         </p>
//         <Button>
//           <p>Наши услуги</p>
//         </Button>
//       </div>

//       {/* Темный оверлей на весь слайдер */}
//       <div className="absolute inset-0 bg-[var(--primary-black-50)] z-10" />
//       {/* Слайды */}
//       <div
//         className="flex h-full transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="relative w-full h-full flex-shrink-0"
//           >
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//               style={{ objectPosition: '50% 0' }}
//               loading={index === 0 ? 'eager' : 'lazy'}
//             />
//           </div>
//         ))}
//       </div>

//     </FullScreen>
//     </section>
//   );
// }
