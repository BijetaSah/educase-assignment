import Button from "../reusable components/Button";
import ContainerBox from "../reusable components/ContainerBox";
import Input from "../reusable components/Input";
function Login() {
  return (
    <ContainerBox>
      <form className="flex flex-col gap-6 px-6 pt-5 ">
        <h1 className="text-stone-900 text-2xl font-bold">
          Signin to your <br />
          PopX account
        </h1>
        <p className="text-stone-400 text-md ">
          Lorem ipsum dolor sit amet
          <br />
          adipisicing elit. Est cumque
        </p>
        <Input placeholder="Enter your email" type="email">
          Email address
        </Input>

        <Input type="password" placeholder="Enter your password">
          Password
        </Input>

        <Button type="primary">Create Account</Button>
      </form>
    </ContainerBox>
  );
}

export default Login;
