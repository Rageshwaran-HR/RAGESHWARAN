import { useState, useEffect, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader";
import Index from "./pages/Index";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 9000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setThemeColor(themeColor === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <button onClick={toggleTheme} style={{ marginBottom: "10px" }}>
          </button>
          {loading ? <Loader /> : <Index />}
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
