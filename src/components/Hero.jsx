export default function Hero({children, title, text, colorTitle, colorText, isCenter, imgBackground}) {
  return (
    <section className="relative  h-screen w-full overflow-hidden flex items-center snap-start min-h-[550px]">
      <div className="w-full px-3 sm:px-5 lg:px-10 2xl:px-0 z-10"> 
        <div className={`flex items-center max-w-7xl w-full mx-auto ${isCenter ? "w-full" : null}`}>
          <div className={`sm:w-96 lg:w-6/12 [&>p]:my-14 mt-5 ${isCenter ? "flex flex-col justify-center items-center [&>h2]:text-center [&>p]:text-center [&>p]:my-14 max-w-md  w-full mx-auto lg:max-w-5xl " : null}`}>
              <h2 className={`text-4xl lg:text-5xl font-bold ${colorTitle}`}>{title}</h2>
              <p className={`text-xl lg:text-2xl my-12 lg:my-10 ${colorText}`}>{text}</p>
              {children}
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full">
        <img src={`${imgBackground}`} alt="background" className="h-full w-full object-cover brightness-50"/>
      </div>
    </section>
  )
}
