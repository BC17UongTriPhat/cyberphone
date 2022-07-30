
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';

function App() {
  return (
   <BrowserRouter>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/contact'} component={Contact}/>
      <Route exact path={'/about'} component={About}/>
      <Route exact path={'/shop'} component={Shop}/>
      <Route exact path={'/blog'} component={Blog}/>
      <Route exact path={'/'} component={Home}/>

   </BrowserRouter>
  );
}
// sass-loader . node-sass
export default App;
