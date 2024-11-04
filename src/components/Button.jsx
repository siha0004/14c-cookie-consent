const Button = ({ text, isCookieAccepted, setisCookieAccepted }) => {
  return (
    <button onClick={() => setisCookieAccepted(!isCookieAccepted)} className="bg-white dark:bg-black rounded-lg px-12 py-2 mt-5">
      {text}
    </button>
  );
};

export default Button;
