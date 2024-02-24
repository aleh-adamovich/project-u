import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {
        Object.values(routeConfig)
          .map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page">{element}</div>}
            />
          ))
      }
    </Routes>
  </Suspense>
);
