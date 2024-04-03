import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import { loader as LoadTags } from "./loaders/LoadTags";

const Listing = lazy(() => import("./views/Listing"));
import ListingSkeleton from "./views/SkeletonListing";

const App = () => {
  const [perPage, setPerPage] = useState(20);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          loader: async () => redirect("/1"),
        },
        {
          path: "/:page",
          element: (
            <Suspense fallback={<ListingSkeleton perPage={perPage} />}>
              <Listing perPage={perPage} setPerPage={setPerPage} />
            </Suspense>
          ),
          loader: async ({ params }) => LoadTags(perPage, params.page),
        },
      ])}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
