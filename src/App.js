import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageTwo from "./pages/Blog";
import PageThree from "./pages/Gallery";
import PageCTA from "./pages/Contact";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/Home" exact>
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
        </Layout>
    );
}

export default App;
