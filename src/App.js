import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/Blog";
import PageThree from "./pages/Gallery";
import PageCTA from "./pages/Contact";

function App() {
    return (
        
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Blog">
                    <PageTwo />
                </Route>
                <Route path="/Gallery">
                    <PageThree />
                </Route>
                <Route path="/Contact">
                    <PageCTA />
                </Route>
            </Switch>
    );
}

export default App;
