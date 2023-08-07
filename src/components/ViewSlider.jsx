import CardSlider from "./CardSlider";

export default function ViewSlider(props) {

  return (
    <div className="grid-temp">
        {props.arr.map((current,key) => <CardSlider key={key} city={current.city} country={current.country} image={current.image}/>)}
    </div>
  )
}
