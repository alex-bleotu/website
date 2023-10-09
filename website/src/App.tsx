import ThemeProvider from "./context/themeContext";
import Home from "./pages/home/home";

const App = () => {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
};

export default App;
