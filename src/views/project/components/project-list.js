import React from "react";
import { MaterialButton } from "~/views/components/button";

const projectList = [
  {
    name: "Project I",
    tag: "Ấn phẩm",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project II",
    tag: "Ấn phẩm",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project III",
    tag: "Giao diện",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project IV",
    tag: "Bài báo",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project V",
    tag: "Giao diện",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project VI",
    tag: "Ấn phẩm",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project VII",
    tag: "Ấn phẩm",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project VIII",
    tag: "Bài báo",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
  {
    name: "Project IX",
    tag: "Giao diện",
    image:
      "https://insaneimpact.com/wp-content/uploads/2019/10/Header-scaled.jpg",
  },
];

export function ProjectList() {
  const [index, setIndex] = React.useState(0);
  const [tags, setTags] = React.useState([]);

  React.useLayoutEffect(() => {
    setTags(["Tất cả", ...[...new Set(projectList.map((e) => e.tag))].sort()]);
  }, [projectList]);

  return (
    <>
      <FilterBar tags={tags} index={index} setIndex={setIndex} />
      <ProjectContentList tag={tags[index]} projectList={projectList}/>
    </>
  );
}

function FilterBar({ tags, index, setIndex }) {
  return (
    <div className="flex gap-4 justify-center">
      {tags.map((e, i) => (
        <MaterialButton
          key={i}
          isTonal={index != i}
          onClick={() => {
            setIndex(i);
          }}
        >
          {e}
        </MaterialButton>
      ))}
    </div>
  );
}

function ProjectContentList({tag, projectList}) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {projectList
        .filter((e) => tag == "Tất cả" || e.tag === tag)
        .map((e) => (
          <a key={e.name} href={e.link} target="_blank">
            <img className="rounded-[20px] aspect-video object-cover hover:scale-110 active:scale-95 cursor-pointer" src={e.image} alt={e.name} />
          </a>
        ))}
    </div>
  );
}
