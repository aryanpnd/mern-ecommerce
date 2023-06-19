import {
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import SearchAppBar from "./pages/components/appbar/appbar";
import { Box, Button } from "@mui/joy";
import AlertToast from "./pages/components/miscellaneous/Alert";
import { useContext } from "react";
import { productContext } from "./context/productContext";
import Addproducts from "./pages/addproducts/Addproducts";

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
  const { alert } = useContext(productContext)

  return (
    <div className="App" style={{ height: "100%", overflow: "hidden" }}>

      {/* Alert */}
      {alert.map((values, index) => (
        <AlertToast key={index} show={values.show} title={values.title} icon={values.icon} color={values.color} duration={values.duration} />
      ))}

      <SearchAppBar />
      <Box sx={{ width: "100%", height: "12%" }}> </Box>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="addproduct" element={<Addproducts />} />
      </Routes>
    </div>
    // <RouterProvider router={router} />
  );
}

export default App;
