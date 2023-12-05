import ScrollBar from "./components/scrollBar";
import Home from "./pages/home/home";
import ThemeProvider from "./style/themeContext";

const App = () => {
    return (
        <ThemeProvider>
            <ScrollBar />
            <Home />
        </ThemeProvider>
    );
};

export default App;
