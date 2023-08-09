import Hero from "../components/Hero"
import PopularMytinerari from "../components/PopularMytinerari"
import Button from "../components/Button"

export default function Home() {
  return (
    <main>
        <Hero 
            title="Find the perfect destination" 
            text="Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier." 
            styleTitle="text-white lg:text-5xl"
            styleText="text-gray-400"
            imgBackground="/pareja-viaje-globos.jpg"
            height="h-full"
            isCenter={false}>
            <div>
              <Button 
                text="View More" 
                customStyle="w-40 lg:w-48 lg:font-bold lg:text-2xl flex justify-center"/>
            </div>
        </Hero>
        <PopularMytinerari/>
    </main>
  )
}
