// console.log('Hola a la academia onlinedddd');
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';
import expressPlayGround from 'graphql-playground-middleware-express';
import depthLimit from 'graphql-depth-limit';

const app = express();

app.use('*', cors());
app.use(compression());

const servidor = new ApolloServer ({
    schema,
    validationRules: [depthLimit(2)],
    introspection: true
});

servidor.applyMiddleware({app});
app.get('/', expressPlayGround ({
    endpoint: '/graphql'
}));

const httpServer = createServer(app);

const PORT = process.env.PORT || 5200;

httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
);