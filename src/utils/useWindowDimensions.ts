import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined'; // Retorna se possui ou não o objeto window

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null; //se possui o objeto window, pega o tamanho da largura
    return {
      width,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() { //função para atualizar o tamanho da tela
    setWindowDimensions(getWindowDimensions());
  }
  useEffect(() => { 
    if (hasWindow) {
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}