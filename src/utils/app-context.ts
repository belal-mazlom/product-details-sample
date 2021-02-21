import { createContext } from 'react';

const AppContext = createContext({
  toggleTheme: () => {},
  size: { width: 0, height: 0 },
});

export default AppContext;