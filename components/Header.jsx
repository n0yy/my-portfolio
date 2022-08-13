import Emoji from "./Emoji";

export default function Header({ title, subTitle, dark, emoji }) {
  return (
    <header className={`text-center lg:py-10 font-josefin`}>
      <span className="block text-3xl mb-1">
        <Emoji symbol={emoji} />
      </span>
      <h1 className={`${dark ? "text-slate-800" : "text-white"} text-3xl`}>
        {title}
      </h1>
      <h3
        className={`${
          dark ? "text-slate-500" : "text-white/50"
        } text-sm lg:text-md`}
      >
        {subTitle}
      </h3>
    </header>
  );
}
