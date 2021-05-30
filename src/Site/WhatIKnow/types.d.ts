export interface Category {
  name: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  description?: string;
  image?: string;
}
