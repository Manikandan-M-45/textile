import { Suspense, lazy } from 'react';
import { BrowserRouter} from "react-router-dom";
const Header = lazy(() => import('./components/Header'));
const Content = lazy(() => import('./components/Content'));
const Footer = lazy(() => import('./components/Footer'));
function App() {
  return (
    <div className='mx-5'>
      <Suspense fallback={"Loading....."}>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
