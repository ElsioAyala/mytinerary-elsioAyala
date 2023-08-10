import Carousel from "./Carousel"

export default function PopularMytinerari() {
  return (
    <section className="relative  h-screen overflow-hidden flex flex-col snap-start min-h-[600px]">
        <div className="z-20 max-w-5xl mx-auto">
            <h2 className="text-white my-6 text-2xl lg:text-3xl lg:my-8">Popular Mytinerari</h2>
        </div>
        <div className="z-20 w-full h-full flex items-center justify-center pb-20">
            <Carousel/>
        </div>
        <div className="absolute top-0 bottom-0 h-full w-full z-10">
            <img src="/assets/images/avion.jpg" alt="avion despegando" className="h-full w-full object-cover brightness-50"/>
        </div>
    </section>
  )
}
