import ContainerBox from "../reusable components/ContainerBox";

function Profile() {
  return (
    <ContainerBox>
      <header className=" bg-white text-md py-3 px-4 text-stone-700 font-bold rounded-t-sm">
        Account Settings
      </header>
      <div className="flex gap-3 px-2 py-5 relative">
        <img
          src="/hannah.jpg"
          alt=""
          className="w-[5rem] rounded-full bg-red-100"
        />
        <img
          src="/upload.png"
          alt="Image of a camera"
          className="w-[1.5rem] h-[1.5rem] bg-indigo-700 p-1 rounded-full absolute translate-x-[4rem] translate-y-[3rem]"
        />
        <div>
          <h3 className="text-sm font-bold text-stone-800">Mary Joe</h3>
          <p className="text-sm text-slate-700">Mary@Gmail.com</p>
        </div>
      </div>
      <p className="text-sm px-3 text-slate-800">
        Lorem ipsum dolor sit amet consectetur elit. Repellat quisquam facere
        quidem voluptatem eum iste nobis
      </p>
    </ContainerBox>
  );
}

export default Profile;
