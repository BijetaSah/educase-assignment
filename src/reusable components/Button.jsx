// this is the resuable button component

function Button({ children, type = "primary" }) {
  const btnTypeStyle = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-purple-50",
    secondary: "bg-purple-200 text-purple-800 hover:bg-purple-300",
    disabled: "bg-slate-400 text-slate-100 cursor-not-allowed",
  };
  return (
    <button
      className={`py-2 w-full rounded-lg hover:cursor-pointer ${btnTypeStyle[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
