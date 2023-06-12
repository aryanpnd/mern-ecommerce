import {
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Products from "./pages/products";
import SearchAppBar from "./pages/components/appbar";
import { Button } from "@mui/joy";

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: (<SearchAppBar />),
//     children: [
//       {
//         path: "home",
//         element: (<Homepage />),
//       },
//       {
//         path: "products",
//         element: (<Products />),
//       },
//     ]
//   }

// ]);


function App() {
  return (
      <div className="App" >
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="addproduct" element={<Products />} />
        </Routes>
      </div>
    // <RouterProvider router={router} />
  );
}

export default App;
