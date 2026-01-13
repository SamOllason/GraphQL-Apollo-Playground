// Mock database with sample data
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export const users: User[] = [
  { id: '1', name: 'Buddy Barkinson', email: 'buddy@woofmail.com' },
  { id: '2', name: 'Luna Pawsworth', email: 'luna@tailwaggers.com' },
  { id: '3', name: 'Max Goodboy', email: 'max@fetchmail.com' },
];

export const posts: Post[] = [
  { id: '1', title: 'Getting Started with GraphQL', content: 'GraphQL is a query language for APIs...', authorId: '1' },
  { id: '2', title: 'TypeScript Best Practices', content: 'TypeScript adds static typing to JavaScript...', authorId: '1' },
  { id: '3', title: 'Building REST APIs', content: 'REST is an architectural style...', authorId: '2' },
  { id: '4', title: 'Introduction to Node.js', content: 'Node.js is a JavaScript runtime...', authorId: '3' },
];
