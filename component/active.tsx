import { Code, Code2 } from "lucide-react";

export default function Active() {
  const data = [
    {
      logo: <Code className="text-[#ADC6FF]" />,
      heading: "React Mastery Class",
      discription: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code2 className="text-[#ADC6FF]" />,
      heading: "React Mastery Class",
      discription: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code className="text-[#ADC6FF]" />,
      heading: "React Mastery Class",
      discription: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code className="text-[#ADC6FF]" />,
      heading: "React Mastery Class",
      discription: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
  ];
  return (
    <>
      <section className="mt-8 grid gap-6 md:grid-cols-3 xl:grid-cols-4">
        {data.map((value, index) => {
          return (
            <article
              className="rounded-2xl border border-white/10 bg-[#1A1A1D] p-4 flex flex-col gap-2"
              key={index}
            >
              {value.logo}
              <div>
                <h1>{value.heading}</h1>
                <p> {value.discription}</p>
              </div>
              <div>{value.progress}</div>
            </article>
          );
        })}
      </section>
    </>
  );
}
