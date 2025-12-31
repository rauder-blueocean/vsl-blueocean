import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

// Importando as imagens diretamente
import frame20 from '../acests/Frame 20.png';
import frame21 from '../acests/Frame 21.png';
import frame22 from '../acests/Frame 22.png';
import frame23 from '../acests/Frame 23.png';
import frame24 from '../acests/Frame 24.png';
import frame25 from '../acests/Frame 25.png';
import frame26 from '../acests/Frame 26.png';
import frame27 from '../acests/Frame 27.png';
import frame28 from '../acests/Frame 28.png';
import frame29 from '../acests/Frame 29.png';
import frame30 from '../acests/Frame 30.png';
import frame31 from '../acests/Frame 31.png';

const logos = [
  frame20,
  frame21,
  frame22,
  frame23,
  frame24,
  frame25,
  frame26,
  frame27,
  frame28,
  frame29,
  frame30,
  frame31,
];

export const LogoCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  return (
    <div className="w-full py-5 overflow-hidden  ">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
          Empresas que já aceleraram conosco
        </p>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {logos.map((logo, index) => (
            <div key={index} className="flex-[0_0_150px] min-w-0 mx-8 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="max-h-24 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
