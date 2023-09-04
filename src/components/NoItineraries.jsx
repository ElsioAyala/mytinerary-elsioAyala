export default function NoItineraries() {
  return (
    <section id="itineraries" className="relative scroll-smooth min-h-screen flex flex-col justify-center">
      <div className="z-20 max-w-5xl w-full mx-auto bg-[#FCFCFF] flex flex-col items-center py-12 mb-6">
        <img src="/assets/images/map.gif" className="w-80" />
        <h2 className=" my-6 text-2xl lg:my-8">There are no itineraries</h2>
      </div>
    </section>
  );
}
