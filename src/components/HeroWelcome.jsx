import Button from "./Button";

export default function Hero({children, title, text, colorTitle, colorText}) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-6/12 my-5">
          <h2 className={`hero-title xl:text-5xl font-bold ${colorTitle}`}>{title}</h2>
          <p className={`hero-description xl:text-2xl my-8 ${colorText}`}>{text}</p>
          <Button text="View More"/>
      </div>
      <div className="hero-img">
              <img className="w-80" src="/no-image-available.jpg" alt="imagen"/>
      </div>
    </div>
  )
}
