import SignUpBox from "../components/SignUpBox";

export default function SignUp() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <SignUpBox />

      <div className="absolute top-0 bottom-0 h-full w-full ">
        <img src="/assets/images/francia.jpg" alt="avion despegando" className="h-full w-full object-cover brightness-50" />
      </div>
    </section>
  );
}
