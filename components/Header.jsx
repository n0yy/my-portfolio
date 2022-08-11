export default function Header({ title, subTitle, dark }) {
  return (
    <header className={`text-white text-center lg:py-10`}>
      <h1 className={`${dark && "text-slate-800"} text-3xl`}>{title}</h1>
      <h3
        className={`${
          dark && "text-slate-500"
        } text-white/50 text-sm lg:text-md`}
      >
        {subTitle}
      </h3>
    </header>
  );
}
