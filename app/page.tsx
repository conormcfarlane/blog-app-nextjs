import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="space-y-5">
        <h1 className="text-preset2 dark:text-white">Hi I'm Conor 👋</h1>
        <div className="space-y-5">
          <p>
            I’m a new front-end developer at the beginning of my web development
            journey. I started this blog as a place to document what I’m
            learning and the projects I’m building. My goal is to keep improving
            every day while sharing the process of becoming a better developer.
          </p>
          <p>
            This blog itself is one of those learning projects. It’s built using
            <span className="italic font-bold">
              {" "}
              Next.js, TypeScript, and Tailwind{" "}
            </span>
            for the front end, with{" "}
            <span className="italic font-bold">Sanity</span> as a headless CMS
            to manage the content.
          </p>
        </div>
      </section>
    </div>
  );
}
