import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallback) {
        setImgSrc(fallback);
      } else {
        // Use a simple colored div as fallback
        setImgSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NiA2OEg2NkM2NC44OTU0IDY4IDY0IDY4Ljg5NTQgNjQgNzBWMTMwQzY0IDEzMS4xMDUgNjQuODk1NCAxMzIgNjYgMTMySDEzNEMxMzUuMTA1IDEzMiAxMzYgMTMxLjEwNSAxMzYgMTMwVjcwQzEzNiA2OC44OTU0IDEzNS4xMDUgNjggMTM0IDY4SDExNE0xMTQgNjhIODZNMTE0IDY4VjQ2QzExNCA0NC44OTU0IDExMy4xMDUgNDQgMTEyIDQ0SDg4Qzg2Ljg5NTQgNDQgODYgNDQuODk1NCA4NiA0NlY2OE0xMTQgNjhIODZNODYgNjhWNDYiIHN0cm9rZT0iIzlEQTNCMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwMCA5NEM5Ny43OSA5NCA5NiA5Mi4yMSA5NiA5MEM5NiA4Ny43OSA5Ny43OSA4NiAxMDAgODZDMTAyLjIxIDg2IDEwNCA4Ny43OSAxMDQgOTBDMTA0IDkyLjIxIDEwMi4yMSA5NCAxMDAgOTRaIiBzdHJva2U9IiM5REEzQjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04NiAxMjBMMTAwIDEwNkwxMTQgMTIwIiBzdHJva2U9IiM5REEzQjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=');
      }
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}