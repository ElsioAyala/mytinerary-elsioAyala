

import Hero from "./HeroWelcome";

export default function MainHome() {
  return (
    <main className="">
 
        <section className="max-w-7xl mx-auto h-screen overflow-hidden flex items-center snap-start">
          <Hero 
            title="Find the perfect destination" 
            text="Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier." 
            colorTitle="text-title-color"
            colorText="text-text-color">
          </Hero>
        </section>
        <section className="max-w-7xl mx-auto h-screen overflow-hidden flex snap-start">
          <div className="bg-slate-600 h-full w-screen">
         
          </div>

         
          
       
         
        </section>
        <section className="max-w-7xl mx-auto h-screen overflow-hidden flex snap-start">
          <div className="bg-orange-600 h-full w-screen">
         
          </div>

         
          
       
         
        </section>
        
    </main>
  )
}
