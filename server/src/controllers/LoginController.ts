import { Request, Response, NextFunction } from "express";
import { get, controller, post, use, bodyValidator } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction){
  console.log("Reauest was made");
  next();
}

@controller("/auth")
class LoginController {
    @get("/login")
    @use(logger)
    getLogin(req: Request, res: Response){
        res.send(`
            <form method="POST">
              <div>
                <label>Email</label>
                <input name="email" />
              </div>
              <div>
                <label>Password</label>
                <input name="password" type="password" />
              </div>
              <button>Submit</button>
            </form>
        `)
    }

    @post("/login")
    @bodyValidator("email", "password")
    postLogin(req: Request, res: Response){
      const { email, password } = req.body;
    
      if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
      } else {
        res.send('Invalid email or password');
      }
    }

    @get("/logout")
    getLogout(req: Request, res: Response) {
      req.session = undefined;
      res.redirect('/');
    }

}