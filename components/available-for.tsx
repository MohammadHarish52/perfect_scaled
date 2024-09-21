'use client'

export function AvailableForComponent() {
  const providers = [
    {
      name: 'Microsoft Azure',
      icon: (
        <svg viewBox="0 0 150 150" className="w-32 h-12">
          <path d="M116.297 94.2671L94.2533 72.2234L71.8576 94.6191H116.297V94.2671ZM70.4457 92.8551L93.9013 69.3995L70.4457 45.9439V92.8551ZM94.2533 66.9236L116.297 44.8799V89.3189L94.2533 66.9236ZM33 33H117V117H33V33Z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'Rancher',
      icon: (
        <svg viewBox="0 0 200 200" className="w-32 h-12">
          <path d="M39.5 39.5h121v121h-121v-121zm60.5 30.25v60.5h60.5v-60.5h-60.5zm-30.25 0v30.25h30.25v-30.25h-30.25zm0 30.25h-30.25v30.25h30.25v-30.25z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'Google Cloud',
      icon: (
        <svg viewBox="0 0 200 200" className="w-32 h-12">
          <path d="M152.942 80.846l-10.773-8.658-39.323-31.615-2.929-2.354h-29.288l-2.929 2.354-39.323 31.615-10.773 8.658-7.321 5.881v26.546l7.321 5.881 10.773 8.658 39.323 31.615 2.929 2.354h29.288l2.929-2.354 39.323-31.615 10.773-8.658 7.321-5.881v-26.546l-7.321-5.881zm-62.025-29.969l29.288 23.546v47.092l-29.288 23.546-29.288-23.546v-47.092l29.288-23.546z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'Red Hat',
      icon: (
        <svg viewBox="0 0 200 200" className="w-32 h-12">
          <path d="M155.5 100c0 30.652-24.848 55.5-55.5 55.5S44.5 130.652 44.5 100 69.348 44.5 100 44.5s55.5 24.848 55.5 55.5zm-55.5-33.3c-18.39 0-33.3 14.91-33.3 33.3s14.91 33.3 33.3 33.3 33.3-14.91 33.3-33.3-14.91-33.3-33.3-33.3z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'Aselsan',
      icon: (
        <svg viewBox="0 0 200 200" className="w-32 h-12">
          <path d="M100 44.5l55.5 55.5-55.5 55.5-55.5-55.5L100 44.5zm0 22.2L66.7 100l33.3 33.3L133.3 100 100 66.7z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'AWS',
      icon: (
        <svg viewBox="0 0 200 200" className="w-32 h-12">
          <path d="M95.708 121.788l-17.522 7.92v-15.84l17.522 7.92zm0-43.576l-17.522-7.92v15.84l17.522-7.92zm26.283 21.788l-17.522 7.92v-15.84l17.522 7.92zm0-43.576l-17.522-7.92v15.84l17.522-7.92zM78.186 100l17.522 7.92v-15.84L78.186 100zm26.283 0l17.522 7.92v-15.84L104.469 100z" fill="black"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          AVAILABLE FOR
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
            >
              {provider.icon}
              <span className="mt-4 text-lg font-medium text-gray-900">{provider.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}