import { sanity, urlFor } from "@/lib/sanity";
import Image from "next/image";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
};

const projectsQuery = `*[_type == "project"]{
_id,
title,
slug,
description,
githubUrl,
liveUrl,
image}
 `;

export default async function LatestProjects() {
  const projects: Project[] = await sanity.fetch(projectsQuery);

  return (
    <div>
      <p className="text-preset2">Latest Projects</p>
      <div className="grid grid-cols-1 w-full gap-6 p-2 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project._id} className="bg-neutral-100 p-2 rounded-lg">
            <div className="relative h-50 aspect-auto ">
              <Image
                src={urlFor(project.image).width(800).url()}
                alt={project.title}
                fill
              />
            </div>
            <p className="text-preset5 mt-3">{project.title}</p>
            <p>{project.description}</p>
            <div className="mt-3 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
              >
                GitHub
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-neutral-500 px-4 py-2 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
