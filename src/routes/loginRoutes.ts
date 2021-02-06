import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
  res.send(`
    <div>
      <h1>hello there</h1>
      <a href="/login">Login</a>
    </div>
  `);
});

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      <div>

      <div>
        <label>Password</label> 
        <input name="password" type="password"/>
      </div>
      
      <button>submit</submit>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(`${email.toUpperCase()}`);
  } else {
    res.send('email must be provided').status(422);
  }
});
export { router };
