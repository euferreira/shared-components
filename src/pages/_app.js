import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [isServer, setIsServer] = useState(true);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setIsServer(false);
    setRender(true)
  }, []);

  if (isServer) {
    return null;
  }

  return (
    <>
      <div suppressHydrationWarning>
        <span>
          {typeof window === 'undefined' ? 'server' : 'client'}
        </span>
        <hr />
        <Component {...pageProps} /> 
      </div>
    </>
  );
}
