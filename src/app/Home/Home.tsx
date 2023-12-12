'use client';
import React, { RefObject, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card/Card';

function HomePage() {
  const secondSectionRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className='m-auto flex min-h-screen flex-col items-center '>
      <section className='flex items-start justify-start py-8 '>
        <div className='flex max-w-6xl flex-col-reverse items-center md:flex-row'>
          <div className='flex items-center gap-8 px-10 w-[70%] text-center md:flex-row md:text-left'>
            <div className='flex flex-col gap-20'>
              <h2 className='text-6xl md:text-7xl lg:text-7xl xl:text-8xl acorn'>
                ¡Crea historias increíbles en segundos!
              </h2>
              <div className='flex gap-5 self-center text-2xl text-white md:self-start'>
                <button
                  onClick={scrollToSecondSection}
                  className='rounded-md bg-[#332C45] px-8 py-2 '
                >
                  Ver historias
                </button>
                <Link
                  href='/story-teller'
                  className='rounded-md bg-[#36A57C] px-8 py-2'
                >
                  Crear historia
                </Link>
              </div>
            </div>
          </div>
          <Image
            className='w-[50%]'
            width={500}
            height={500}
            src='/home-image.png'
            alt='Peluches leyendo un libro en una cama'
          />
        </div>
      </section>
      <section
        ref={secondSectionRef}
        className='relative z-0 flex w-full justify-between bg-[#36A57C]'
      >
        <div className='flex w-full flex-col gap-12 px-10 py-10 text-white md:pr-10'>
          <div className='m-auto flex w-full self-start h-[200px]'></div>
          <div className='z-10 flex flex-col items-center justify-start gap-32'>
            <h2 className='text-7xl text-center acorn'>
              ¡Descubre las historias que podrás crear!
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
              <Card
                title='La Aventura de Rinita y la Flor de Luz'
                story={
                  <>
                    <p>
                      Había una vez, en un reino donde las nubes sabían cantar y
                      los árboles bailaban al son de la brisa, una pequeña rana
                      llamada Rinita. Rinita era especial, no solo porque tenía
                      un pelaje azul brillante, sino porque poseía un gran
                      corazón lleno de curiosidad y amistad.
                    </p>
                    <br />
                    <p>
                      Un día, Rinita decidió emprender una aventura para
                      encontrar la Flor de Luz, una mágica planta que, según las
                      leyendas, podía cumplir un deseo. Saltó con emoción,
                      cruzando arroyos donde los peces le guiñaban y bosques
                      donde las mariposas jugaban al escondite.
                    </p>
                    <br />
                    <p>
                      En su camino, Rinita conoció a varios amigos: un búho
                      sabio que amaba contar historias, una ardilla alegre que
                      siempre estaba dispuesta a ayudar, y un lento pero
                      amistoso caracol que enseñaba la importancia de la
                      paciencia. Juntos, enfrentaron pequeños retos, como
                      resolver acertijos de las flores parlantes y cruzar un río
                      sobre piedras resbaladizas.
                    </p>
                    <br />
                    <p>
                      Finalmente, llegaron a un claro iluminado por la luna,
                      donde la Flor de Luz brillaba suavemente. Rinita,
                      emocionada, se acercó y pidió su deseo: Quiero que la
                      amistad y la alegría que encontré en este viaje duren para
                      siempre. La flor centelleó, y en ese instante, cada amigo
                      sintió un cálido brillo en su corazón, un recuerdo
                      perpetuo de su maravillosa aventura juntos.
                    </p>
                    <br />
                    <p>
                      Y así, Rinita y sus amigos volvieron a casa, llevando
                      consigo no solo la magia de la Flor de Luz, sino también
                      la certeza de que, mientras estuvieran juntos, cada día
                      sería una nueva y emocionante aventura. Fin.
                    </p>
                  </>
                }
              />
              <Card
                title='El Unicornio Luz y el Bosque Brillante'
                story={
                  <>
                    <p>
                      Había una vez, en un bosque mágico, un pequeño unicornio
                      llamado Luz. Luz tenía una crin brillante y un cuerno que
                      cambiaba de color según su ánimo.
                    </p>
                    <br />
                    <p>
                      Un día, Luz encontró una mariposa atrapada en una
                      telaraña. Con cuidado, usó su cuerno mágico para
                      liberarla. La mariposa, agradecida, le reveló a Luz el
                      secreto del Bosque Brillante: un lugar donde los sueños se
                      hacían realidad.
                    </p>
                    <br />
                    <p>
                      Juntos, Luz y la mariposa buscaron el Bosque Brillante. En
                      el camino, encontraron animales que necesitaban ayuda.
                      Luz, con su cuerno mágico, los ayudó a todos.
                    </p>
                    <br />
                    <p>
                      Finalmente, llegaron al Bosque Brillante. Era un lugar
                      lleno de colores, donde las flores cantaban y las
                      estrellas bailaban. La mariposa le dijo a Luz que por su
                      bondad, podía pedir un deseo.
                    </p>
                    <br />
                    <p>
                      Luz pensó un momento y luego deseó que el bosque siempre
                      fuera un lugar seguro y feliz para todos. Su deseo se hizo
                      realidad, y desde ese día, el Bosque Brillante fue el
                      lugar más mágico y alegre del mundo.
                    </p>
                    <br />
                    <p>
                      Y así, Luz aprendió que ayudar a los demás era el mejor
                      deseo que podía pedir. Desde entonces, Luz y la mariposa
                      vivieron muchas más aventuras, llenando de magia y alegría
                      el corazón del bosque. Y colorín colorado, este cuento se
                      ha acabado.
                    </p>
                  </>
                }
              />
              <Card
                title='La Aventura Mágica de Teo el Tigre'
                story={
                  <>
                    <p>
                      En un colorido bosque, vivía Teo, un tigre pequeño con un
                      gran corazón. Una noche, Teo vio una estrella caer y
                      decidió buscarla. Durante su aventura, encontró a varios
                      animales que necesitaban ayuda.
                    </p>
                    <br />
                    <p>
                      Con su valentía, Teo ayudó a cada uno de ellos, ganándose
                      su amistad y respeto. Finalmente, encontró la estrella,
                      que resultó ser un cristal mágico que concedía deseos.
                    </p>
                    <br />
                    <p>
                      Teo deseó la felicidad para todos en el bosque. La
                      estrella brilló intensamente, esparciendo magia por todo
                      el lugar. Desde ese día, el bosque se llenó de alegría y
                      Teo se convirtió en el héroe más querido.
                    </p>
                    <br />
                    <p>
                      Y así, Teo aprendió que ayudar a los demás era el regalo
                      más grande que podía dar. Fin.
                    </p>
                  </>
                }
              />
              <Card
                title='El Sueño de Lila la Libélula'
                story={
                  <>
                    <p>
                      En un reino encantado, vivía Lila, una libélula soñadora.
                      Un día, Lila deseó volar más alto que las nubes. Con la
                      ayuda de sus amigos, la mariposa Luna y el grillo Sol,
                      Lila construyó unas alas mágicas.
                    </p>
                    <br />
                    <p>
                      Juntos, volaron hacia el cielo, riendo y jugando entre las
                      nubes. En su viaje, encontraron un arcoíris perdido que
                      buscaba su hogar. Lila y sus amigos guiaron al arcoíris de
                      vuelta al cielo, donde brilló con todos sus colores.
                    </p>
                    <br />
                    <p>
                      Al regresar, Lila se dio cuenta de que el verdadero sueño
                      no era volar alto, sino compartir aventuras con amigos. Y
                      así, Lila la libélula descubrió que los mejores sueños son
                      aquellos que se viven juntos. Fin.
                    </p>
                  </>
                }
              />
            </div>
          </div>
        </div>
        <svg
          className='absolute scale-y-[-1]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='200 0 600 250'
        >
          <path
            fill='#A7D7C5'
            fillOpacity='1'
            d='M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,213.3C840,213,960,171,1080,170.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </section>
    </main>
  );
}

export default HomePage;
