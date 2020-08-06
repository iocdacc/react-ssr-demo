import App from '../views/App';
import Home from '../views/Home';

export default [ // 需要SSR的路由
  {
    path: "/", 
    component: App,
    routes: [
      {
        path: "/", 
        exact: true,
        component: Home,
      },
      {
        path: "/h2", 
        exact: true,
        component: Home,
      },
    ],
    headHidden: ["/h2"],
  },
]
