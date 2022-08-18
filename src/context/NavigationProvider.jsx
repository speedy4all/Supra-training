import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const NavigationContext = createContext();

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default function NavigationProvider({ children }) {
  const [navigationState, setNavigationState] = useState({
    path: "list",
    data: null,
  });

  const navigateTo = useCallback((path, data = {}) => {
    setNavigationState({ path, data });
  }, []);

  const providerValue = useMemo(() => {
    return { navigationState, navigateTo };
  }, [navigationState, navigateTo]);

  return (
    <NavigationContext.Provider value={providerValue}>
      {children}
    </NavigationContext.Provider>
  );
}
