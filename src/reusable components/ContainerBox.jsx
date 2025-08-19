function ContainerBox({ children }) {
  return (
    <div className="w-[20rem] h-[45rem] border-1 border-stone-400 rounded-sm mb-10 relative bg-stone-50 ">
      {children}
    </div>
  );
}

export default ContainerBox;
