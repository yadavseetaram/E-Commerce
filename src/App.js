import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import BasicTabs from "./components/Tabs";

const Homepage = () => <div>hello i am home page</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "/home", element: <h1>HOME</h1> },
  { path: "/products", element: <h1>Products</h1> },
  { path: "/contacts", element: <h1>contacts</h1> },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <BasicTabs />
    </div>
  );
}

export default App;
