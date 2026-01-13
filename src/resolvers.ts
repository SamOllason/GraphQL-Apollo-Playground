import { users, posts, User, Post } from './database';

// GraphQL resolvers
export const resolvers = {
  Query: {
    users: () => users,
    user: (_: any, { id }: { id: string }) => users.find(user => user.id === id),
    posts: () => posts,
    post: (_: any, { id }: { id: string }) => posts.find(post => post.id === id),
  },
  
  Mutation: {
    createUser: (_: any, { name, email }: { name: string; email: string }) => {
      const newUser: User = {
        id: String(users.length + 1),
        name,
        email,
      };
      users.push(newUser);
      return newUser;
    },
    createPost: (_: any, { title, content, authorId }: { title: string; content: string; authorId: string }) => {
      const newPost: Post = {
        id: String(posts.length + 1),
        title,
        content,
        authorId,
      };
      posts.push(newPost);
      return newPost;
    },
  },
  
  User: {
    posts: (user: User) => posts.filter(post => post.authorId === user.id),
  },
  
  Post: {
    author: (post: Post) => users.find(user => user.id === post.authorId),
  },
};
