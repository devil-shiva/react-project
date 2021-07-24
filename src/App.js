import './App.css';
import {Navbar} from './MyComponents/Navbar';
import {Home} from './MyComponents/Home';
import {Blogs} from './MyComponents/Blogs';
import {Contact} from './MyComponents/Contact';
import {Donate} from './MyComponents/Donate';
import {
  
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <>
          <Route path="/home" component={Home}/>
                
          <Route path="/blogs" component={Blogs}/>
                    
          <Route path="/contact" component={Contact}/>

          <Route path="/donate" component={Donate}/>
          </>
        </Switch>
      </main>
    </>
    
  );
}

export default App;
