import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import path from 'path';

// Create Express app
const app = express();

// Enable CORS for the frontend
app.use(cors());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable GraphQL Playground in production
});

// For local development
async function startServer() {
  await server.start();
  server.applyMiddleware({ app: app as any });
  
  const PORT = process.env.PORT || 4000;
  
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`📄 Frontend available at http://localhost:${PORT}`);
  });
}

// Start server if not in Vercel serverless environment
if (process.env.VERCEL !== '1') {
  startServer().catch((error) => {
    console.error('Error starting server:', error);
  });
}

// Export for Vercel serverless
export default app;
