import Button from "../reusable components/Button";
import ContainerBox from "../reusable components/ContainerBox";

function Landing() {
  return (
    <ContainerBox>
      <div className="flex flex-col gap-4 px-6 pb-8  absolute bottom-0 w-full">
        <h1 className="text-stone-900 text-2xl font-bold">Welcome to PopX</h1>
        <p className="text-stone-400 text-md ">
          Lorem ipsum dolor sit amet
          <br />
          adipisicing elit. Est cumque
        </p>

        <Button type="primary">Create Account</Button>
        <Button type="secondary">Already Registered? Login</Button>
      </div>
    </ContainerBox>
  );
}

export default Landing;
