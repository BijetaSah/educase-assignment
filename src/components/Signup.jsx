import Input from "../reusable components/Input";
import Button from "../reusable components/Button";
import ContainerBox from "../reusable components/ContainerBox";
import { Form } from "react-router-dom";
function Signup() {
  return (
    <ContainerBox>
      <Form className="flex flex-col gap-8 px-6 pt-5">
        <h1 className="text-stone-900 text-2xl font-bold">
          Create your <br />
          PopX account
        </h1>
        <Input value="Mary Doe" type="text" important={true}>
          Name
        </Input>
        <Input value="Mary Doe" type="text" important={true}>
          Phone number
        </Input>
        <Input value="Mary Doe" type="email" important={true}>
          Email address
        </Input>
        <Input type="type" value="Mary Doe" important={true}>
          Password
        </Input>
        <Input type="text" value="Mary Doe">
          Company name
        </Input>

        <div>
          <p>
            Are you an agency? <span className="text-red-500 text-sm">*</span>
          </p>
          <div className="flex gap-2">
            <input type="radio" id="yes" value="yes" name="companyChoice" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="companyChoice" value="no" />
            <label htmlFor="yes">No</label>
          </div>
        </div>

        <Button type="primary">Create Account</Button>
      </Form>
    </ContainerBox>
  );
}

export default Signup;
