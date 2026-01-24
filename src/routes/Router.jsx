import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
// const SingleBlogPage = import("../pages/singleBlogPage")
const singleBlogPage = lazy(() => import("../pages/singleBlogPage"));

// const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blogs/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <SingleBlogPage />
            </Suspense>
          ),
          // errorElement: <ErrorPage />
          
        }
      ],
    },
  ],
  // { basename: `/${repoName}` }
);
