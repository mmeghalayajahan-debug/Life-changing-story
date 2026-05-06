export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: 'Humanitarian' | 'Travel';
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  summary: string;
  image: string;
}
