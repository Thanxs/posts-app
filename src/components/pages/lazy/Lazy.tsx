import { FC, lazy, Suspense } from "react";
import Loader from "../../UI/loader/Loader";
import './Lazy.scss';

const LazyComponent = lazy(() => import('./image-collection/ImageCollection')); 

const Lazy: FC = (): JSX.Element => {

  return (
    <div className="lazy">
      <h2 className="lazy__title">Lazy loading</h2>
      <div className="lazy__description">
        This page was created for testing such a feature of the React as lazy loading. Open development tools to check
      </div>
      <Suspense fallback={<div className="lazy__loader"><Loader /></div>}>
        <LazyComponent  />
      </Suspense>
    </div>
  )
}

export default Lazy;