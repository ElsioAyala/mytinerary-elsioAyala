import SignInBox from "../components/SignInBox";

export default function SignIn() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <SignInBox />

      <div className="absolute top-0 bottom-0 h-full w-full ">
        <img src="/assets/images/francia.jpg" alt="avion despegando" className="h-full w-full object-cover brightness-50" />
      </div>
    </section>
  );
}
