import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import HomePage, { loader as homePageLoader } from "./Home"

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<HomePage />}
    errorElement={<h1>There was an error!</h1>}
    loader={homePageLoader}
  />
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)