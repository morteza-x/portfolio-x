//import { IconType } from "react-icons";

export type TProject = {
  id: string;
  compony: string;
  title: string;
  year: number;
  image: string;
  projectLink: string;
  githubLink: string;
  results: {
    id: string;
    name: string;
  }[];
  className?: string;
  topValue?: number;
};
