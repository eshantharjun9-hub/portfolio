import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const hovered = e.target.closest('a, button, .accent');
      if (hovered) {
        if (!isHovering) {
          isHovering = true;
          growCursor();
        }
        
        if (hovered.classList.contains('accent')) {
          setCursorEffect('glass');
        } else {
          setCursorEffect('accent');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          shrinkCursor();
          setCursorEffect('default');
        }
      }
    };

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px';
        cursorRef.current.style.top = mouseY + 'px';
      }

      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }

      requestAnimationFrame(animateCursor);
    };

    const growCursor = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.6)';
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    };

    const shrinkCursor = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const setCursorEffect = (type) => {
      if (!cursorRef.current || !ringRef.current) return;

      if (type === 'glass') {
        cursorRef.current.style.background = 'transparent';
        cursorRef.current.style.backdropFilter = 'blur(12px)';
        cursorRef.current.style.webkitBackdropFilter = 'blur(12px)';
        cursorRef.current.style.border = '1px solid rgba(255, 255, 255, 0.4)';
        ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.6)';
      } else if (type === 'accent') {
        cursorRef.current.style.background = '#ff0050';
        cursorRef.current.style.backdropFilter = 'none';
        cursorRef.current.style.webkitBackdropFilter = 'none';
        cursorRef.current.style.border = 'none';
        ringRef.current.style.borderColor = 'rgba(255, 0, 80, 0.5)';
      } else {
        cursorRef.current.style.background = '#ff0050';
        cursorRef.current.style.backdropFilter = 'none';
        cursorRef.current.style.webkitBackdropFilter = 'none';
        cursorRef.current.style.border = 'none';
        ringRef.current.style.borderColor = 'rgba(255, 0, 80, 0.5)';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    const frameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
