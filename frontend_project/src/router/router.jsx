import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {Example_main_function as Example} from "../pages/example"; 
import Lander_func from "../pages/lander"; 

import Example_main_function from "../pages/example"; 

const router = createBrowserRouter([
  {
    path: "/example_page", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Example_main_function />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  {
    path: "/", /*tu jest ścieżka na jakiej ma się wyświtlać w przeglądarce */ 
    element: <Lander_func />, /*tu dajesz funkcje którą zimportowałeś*/
  },
  /*jak chesz dodać nową stronę to kopiujesz to powyrzej i podmieniasz ścieżkę i funkcję */
  
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;