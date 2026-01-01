
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface Program {
  id: string;
  name: string;
  time: string;
  description: string;
  image: string;
  day: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
