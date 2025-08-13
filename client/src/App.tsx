import { memo, useMemo } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";

// Memoized router component for better performance
const Router = memo(() => {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
});

Router.displayName = 'Router';

// Memoized providers wrapper for better performance
const AppProviders = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
});

AppProviders.displayName = 'AppProviders';

function App() {
  // Memoize the main app content to prevent unnecessary re-renders
  const appContent = useMemo(() => (
    <>
      <Toaster />
      <Router />
    </>
  ), []);

  return (
    <AppProviders>
      {appContent}
    </AppProviders>
  );
}

export default App;
