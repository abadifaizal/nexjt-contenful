import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'
import { getContentForHero } from '@/content/queries';

export default async function Hero() {
  const data = await getContentForHero();
  const content = data.heroCollection.items[0];
  const cta1 = content.callToActionsCollection.items[0];
  const cta2 = content.callToActionsCollection.items[1];

  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">

          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
                <a className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                  <span className="relative inline-flex items-center">
                    {content.preTitle} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div>
            <h1 className="pb-4 text-transparent h1 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60" data-aos="fade-down">{content.title}</h1>
            <p className="mb-8 text-lg text-slate-300" data-aos="fade-down" data-aos-delay="200">{content.subtitle}</p>
            <div className="max-w-xs mx-auto space-y-4 sm:max-w-none sm:inline-flex sm:justify-center sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="w-full transition duration-150 ease-in-out btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" href={cta1.link}>
                  {cta1.label} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a className="w-full transition duration-150 ease-in-out bg-opacity-25 btn text-slate-200 hover:text-white bg-slate-900 hover:bg-opacity-30" href={cta2.link}>
                  <svg className="mr-3 shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>{cta2.label}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}