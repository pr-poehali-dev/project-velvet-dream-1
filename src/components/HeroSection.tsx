import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
];

type Work = {
  title: string;
  description: string;
  link: string;
  image?: string;
};

const works: Work[] = [
  { title: 'Президенты 1', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pb0nc8pxa26' },
  { title: 'Президенты 2', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pydow8ai226' },
  { title: 'Президенты 3', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pexo8oanc26' },
  { title: 'Группы', description: 'LearningApps', link: 'https://learningapps.org/watch?v=p4kne0dwk26' },
  { title: 'Президенты 5', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pj4d7rfjj26' },
  { title: 'Президенты 6', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pvxavf4qc26' },
  { title: 'Президенты 7', description: 'LearningApps', link: 'https://learningapps.org/watch?v=psh6a6ozj26' },
  { title: 'Ответ на вопрос', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pb504u1t526' },
  { title: 'Понятие и слова', description: 'LearningApps', link: 'https://learningapps.org/watch?v=pdu94u3fn26' },
  { title: 'Президенты 10', description: 'LearningApps', link: 'https://learningapps.org/watch?v=ptq3iqbjk26' },
  { title: '1С:Урок', description: 'Интерактивный урок', link: 'https://urok.1c.ru/share/task/ab004ec8eaec271406b085e981d0e529/' },
  { title: 'Банк тестов', description: 'Тест онлайн', link: 'https://banktestov.ru/test/113765' },
  { title: 'Президенты', description: 'Online Test', link: 'https://onlinetestpad.com/xtlorblvwo4iy' },
  { title: 'Яндекс Формы', description: 'Анкета / опрос', link: 'https://anketolog.ru/rs/1038455/rSjFbd7w' },
  {
    title: 'Стоп, кибербуллинг!',
    description: 'Инфографика',
    link: 'https://cdn.poehali.dev/projects/c7f9ee5e-b8a0-4075-8c10-03ea40fae594/bucket/85056a29-cfe6-4472-bf8c-ba2a3c54c7a4.jpg',
    image: 'https://cdn.poehali.dev/projects/c7f9ee5e-b8a0-4075-8c10-03ea40fae594/bucket/85056a29-cfe6-4472-bf8c-ba2a3c54c7a4.jpg',
  },
  {
    title: 'Твоя сила — защита онлайн',
    description: 'Плакат',
    link: 'https://cdn.poehali.dev/projects/c7f9ee5e-b8a0-4075-8c10-03ea40fae594/bucket/a3bb8dd0-376f-4aac-86df-2b35f762fcb2.jpg',
    image: 'https://cdn.poehali.dev/projects/c7f9ee5e-b8a0-4075-8c10-03ea40fae594/bucket/a3bb8dd0-376f-4aac-86df-2b35f762fcb2.jpg',
  },
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
            <img src={src} alt="" className="h-full w-full object-cover" />
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
                  Москаленко Иван
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
                className="group flex flex-col gap-1 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 overflow-hidden"
              >
                {work.image && (
                  <div className="h-32 w-full overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 p-4">
                  <span className="text-sm font-medium text-white group-hover:text-white/90">
                    {work.title}
                  </span>
                  <span className="text-xs text-white/50 group-hover:text-white/70">
                    {work.description}
                  </span>
                  <span className="mt-2 text-xs text-white/30 group-hover:text-white/50 underline underline-offset-2">
                    Открыть →
                  </span>
                </div>
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