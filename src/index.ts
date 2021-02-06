import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

/**
 * JS middleware is very difficult for TypeScript because properties and values
 * can change and as JS it does not communicate out its properties and types
 * to TS.
 */
// urlencoded creates the `body` property for requests
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen('3000', () => {
  console.log('\n\\{^_^}/ Server listening on port 3000');
});
