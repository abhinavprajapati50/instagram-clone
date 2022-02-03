import { Router} from 'express';
import { signUp } from '../controller/signup';


 const routes = Router()

// const routes = Router()
routes.post("/signup", signUp)

// routes.post('/signup', signUp)

// routes.get('/home', () => { console.log("the home componnet laod") })
export default routes;


