import {
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

 const features = [
  {
    name: 'Elegância e Estilo',
    description:
      'Nossa vidraçaria é um espaço onde a sofisticação e a qualidade se encontram em perfeita harmonia. Com um compromisso inabalável com a excelência, oferecemos soluções em vidro que transformam ambientes.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Privacidade',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Proteção',
    description:
      'oferece soluções sofisticadas e eficazes para quem busca aliar elegância e segurança.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Durabilidade',
    description:
      'Nossa vidraçaria é sinônimo de durabilidade e resistência. Trabalhamos com materiais de alta qualidade, como vidros temperados e laminados, projetados para suportar as exigências do tempo e do uso diário.',
    icon: ClockIcon,
  },
]

export default function Marketing() {
  return (
    <>
    <div className="bg-white/90">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
    </div>
    <div className="relative isolate py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl lg:max-w-md">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-700">À nossa vidraçaria,</h2>
              <p className="mt-4 text-lg text-gray-400">
                onde a qualidade e a confiança se encontram para transformar seus projetos em realidade.
                Com anos de experiência no mercado, oferecemos soluções completas em vidro para todos os tipos de ambientes, seja para sua residência, comércio ou indústria.
                Nosso compromisso é entregar produtos de alto padrão, com um atendimento personalizado e profissionalismo, garantindo durabilidade, segurança e estética para o seu espaço.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-2xl xl:max-w-[43.5rem]">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-lime-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
      </div></>
  )
}