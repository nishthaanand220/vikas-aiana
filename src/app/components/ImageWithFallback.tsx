import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className = "" }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-[#F5E6E0] to-[#D4A574]/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-sm text-[#6B6B6B]">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
