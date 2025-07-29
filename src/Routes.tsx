import { createHashRouter } from 'react-router-dom';
import DefaultLayout from './pages/_layouts/DefaultLayout';
import ExampleCarouselCustom from './pages/ExampleCarouselCustom';
import ExampleComponents from './pages/ExampleComponents';
import ExampleDebugScorm from './pages/ExampleDebugScorm';
import ExampleHome from './pages/ExampleHome';

export const router = createHashRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ExampleHome />,
      },
      {
        path: '/debug-scorm',
        element: <ExampleDebugScorm />,
      },
      {
        path: '/components',
        element: <ExampleComponents />,
      },
      {
        path: '/carousel-custom',
        element: <ExampleCarouselCustom />,
      },
    ],
  },
]);
