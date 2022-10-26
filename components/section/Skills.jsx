import Image from "next/image";
import Header from "../Header";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "Visual Design",
      imageURL: "/assets/icons/visual-design.png",
    },
    { id: 2, name: "Web Development", imageURL: "/assets/icons/web.png" },
    { id: 3, name: "Web Design", imageURL: "/assets/icons/web-design.png" },
  ];

  const stackList = [
    { id: 1, imageURL: "/assets/logo/figma.png", width: 40, height: 60 },
    { id: 2, imageURL: "/assets/logo/react.png", width: 55, height: 50 },
    { id: 3, imageURL: "/assets/logo/next.png", width: 67, height: 40 },
    { id: 4, imageURL: "/assets/logo/mongo.png", width: 18, height: 40 },
    { id: 5, imageURL: "/assets/logo/mysql.png", width: 70, height: 48 },
    { id: 6, imageURL: "/assets/logo/bootstrap.png", width: 50, height: 40 },
    { id: 7, imageURL: "/assets/logo/tailwind.png", width: 66, height: 40 },
  ];

  return (
    <section
      id="skills"
      className="lg:px-36 py-7 font-inter min-h-screen flex flex-col justify-between mb-40"
    >
      <div>
        <Header
          title="Skills"
          subTitle="Web Development and a bit of UI/UX Design"
        />
        <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row gap-5 items-center space-y-5 lg:space-y-0 justify-evenly">
          {skills.map((skill) => (
            <div
              className={
                skill.id == 2
                  ? `flex flex-col items-center space-y-2 pt-0 lg:pt-32`
                  : `flex flex-col items-center space-y-2`
              }
              key={skill.id}
            >
              <div className="p-7 bg-blue-300 w-20 h-20 rounded-full">
                <Image
                  src={skill.imageURL}
                  width={50}
                  height={50}
                  alt={skill.name}
                />
              </div>
              <p className="text-white text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 border-t border-white/30 px-3 mx-3 mt-10 lg:mt-0">
        <ul className="flex flex-wrap gap-5 items-center justify-center lg:justify-evenly">
          {stackList.map((item) => (
            <li key={item.id}>
              <Image
                src={item.imageURL}
                width={item.width}
                height={item.height}
                alt={item.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
