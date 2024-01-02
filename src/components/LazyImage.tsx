/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  width?: string;
  height?: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  let callback = (entries: any, observe: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) setInView(true);
    });
  };

  useEffect(() => {
    let observe = new IntersectionObserver(callback);

    if (ref?.current) observe.observe(ref.current);

    return () => {
      if (ref?.current) observe.unobserve(ref.current);
    };
  }, []);

  return inView ? (
    <img {...props} loading='lazy' />
  ) : (
    <div ref={ref}>
      <img
        {...props}
        loading='lazy'
        style={{ backgroundColor: 'rgb(202, 202, 202)', opacity: '0.5' }}
      />
    </div>
  );
};

export default LazyImage;
