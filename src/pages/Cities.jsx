import Hero from "../components/Hero";
import SearchCity from "../components/SearchCity";
export default function Cities() {
  return (
    <main>
      <Hero title="Cities" text="Collection of the most beautiful places and experience" styleTitle="text-white" styleText="text-gray-400" imgBackground="/assets/images/cities.jpg" height="h-1/4" isCenter={true}></Hero>
      <SearchCity />
    </main>
  );
}
