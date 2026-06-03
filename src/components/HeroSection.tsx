import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
];

const works = [
  { title: 'Работа 1', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pb0nc8pxa26' },
  { title: 'Работа 2', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pydow8ai226' },
  { title: 'Работа 3', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pexo8oanc26' },
  { title: 'Работа 4', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=p4kne0dwk26' },
  { title: 'Работа 5', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pj4d7rfjj26' },
  { title: 'Работа 6', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pvxavf4qc26' },
  { title: 'Работа 7', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=psh6a6ozj26' },
  { title: 'Работа 8', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pb504u1t526' },
  { title: 'Работа 9', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=pdu94u3fn26' },
  { title: 'Работа 10', description: 'Учебное задание', link: 'https://learningapps.org/watch?v=ptq3iqbjk26' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between py-16">
        {/* Main info */}
        <div className="container mx-auto px-8 md:px-16 flex items-center flex-1">
          <div className="flex max-w-2xl flex-col gap-10">
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Москоленко Иван
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Студент 1 курса
                </p>
                <p className="text-base text-white/60 max-w-md leading-relaxed">
                  Здесь собраны мои лучшие проекты и работы за время учёбы.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Works / links section */}
        <div
          className={cn(
            'container mx-auto px-8 md:px-16 transform transition-all duration-1000 delay-500 ease-out',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
            Мои работы и проекты
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {works.map((work, i) => (
              <a
                key={i}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <span className="text-sm font-medium text-white group-hover:text-white/90">
                  {work.title}
                </span>
                <span className="text-xs text-white/50 group-hover:text-white/70">
                  {work.description}
                </span>
                <span className="mt-2 text-xs text-white/30 group-hover:text-white/50 underline underline-offset-2">
                  Открыть →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}