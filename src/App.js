import {Route, Switch} from "react-router-dom"
import Details from "./screens/details/Details";
import Home from "./screens/home/Home";

const App = () => {
    return (  
        
        <Switch>
            
            <Route path="/details/:id" component={Details}/>

            <Route path="/" component={Home}/>

        </Switch>




    );
}
 
export default App;