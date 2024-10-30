import { createContext, useContext, useEffect, useState } from "react";

const MediaContext = createContext();

export const MediaProvider = ({children}) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(() => window.innerWidth > 1200);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth > 1200)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <MediaContext.Provider value={{isMobile, isTablet}}>
      {children}
    </MediaContext.Provider>
  )
};

export const useMediaContext = () => useContext(MediaContext);