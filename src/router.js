import Home from "./components/Home"
import Contact from "./components/Contact"
import Gif from "./components/Gif";
const router = [
  {
    name: 'homepage',
    path: '/',
    component: () => <Home />,
    exact: true,
  },
  {
    name: 'contact',
    path: '/contact',
    component: () => <Contact />,
    exact: false,
  },
  {
    name: 'gif',
    path: "/gif",
    component: () => <Gif />,
    exact: false
  }
]
export default router;