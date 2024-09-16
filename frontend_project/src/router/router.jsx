import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {Example_main_function as Example} from "../pages/example"; 
import Lander_func from "../pages/lander"; 
import Page_not_found from "../pages/pageNotFound"; 
import Smerflator from "../pages/serflator";

import Example_main_function from "../pages/example"; 

const router = createBrowserRouter([
  {
    path: "/example_page", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Example_main_function />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  {
    path: "/lander_page", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Lander_func />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  {
    path: "/smerf", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Smerflator />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  {
    path: "*", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Page_not_found />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;