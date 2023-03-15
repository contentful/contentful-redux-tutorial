import { Index } from "./home/index.jsx";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    );
}

export default App;
