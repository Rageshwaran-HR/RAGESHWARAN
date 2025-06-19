import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loader from "./components/Loader"; // Import the Loader component
import Index from "./pages/Index"; // Import the Index page

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 9000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <Loader /> // Show the Loader while loading
      ) : (
        <Index /> // Render the Index page after the loader completes
      )}
    </QueryClientProvider>
  );
};

export default App;
