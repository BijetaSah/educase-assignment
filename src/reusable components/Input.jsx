// A resuable component that is used in Login and the Signup form
function Input({
  children,
  placeholder,
  type = "text",
  value,
  onChange,
  important = false,
}) {
  return (
    <div className="relative">
      {/* Label  */}
      <label className="text-[12px] text-purple-800 inline-block absolute translate-x-4 -translate-y-3 z-[100000] bg-slate-50 px-3 tracking-wide ">
        {children}
        {important && <span className="text-red-500 "> *</span>}
      </label>
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className="w-full border-1 border-stone-400 px-6 py-2 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-1 rounded-sm placeholder:text-[14px] placeholder:text-stone-400
        text-sm
       appearance-none 
          font-inherit 
          shadow-none
          autofill:shadow-[inset_0_0_0px_1000px_white] 
        "
      />
    </div>
  );
}

export default Input;
