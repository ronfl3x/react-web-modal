import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  header?: React.ReactNode;
  children?: React.ReactNode;
  onOpen?: () => void;
  lockScroll?: boolean;
  onClose?: () => void;
  maxWidth?: string;
  maxHeight?: string;
  closeOnBgClick?: boolean;
  closeOnEscape?: boolean;
  animationDuration?: number;
  background?: string;
  modalBackground?: string;
}

export function Modal({
  isVisible,
  setIsVisible,
  header,
  children,
  onOpen = () => setIsVisible(true),
  lockScroll = true,
  onClose = () => setIsVisible(false),
  maxHeight = "85vh",
  maxWidth = "600px",
  closeOnBgClick = true,
  closeOnEscape = true,
  animationDuration = 400,
  background = "rgba(0,0,0,0.5)",
  modalBackground = "white",
}: Props) {
  // UseState
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // UseRef
  const modalBgRef = useRef<HTMLDivElement>(null);
  // UseEffect

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (lockScroll) {
      if (isVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [isVisible, lockScroll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isVisible && closeOnEscape && e.key === "Escape") {
        setIsVisible(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, closeOnEscape]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isVisible && closeOnBgClick && e.target === modalBgRef.current) {
        setIsVisible(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible, closeOnBgClick]);

  useEffect(() => {
    if (isVisible && onOpen) onOpen();
  }, [isVisible, onOpen]);

  useEffect(() => {
    if (!isVisible && onClose) onClose();
  }, [isVisible, onClose]);

  // Render
  return (
    <div
      ref={modalBgRef}
      style={{
        transitionDuration: `${animationDuration}ms`,
        background: background,
      }}
      className={`modal-background ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Modal */}
      <div
        style={{
          maxWidth: windowWidth < 768 ? "100%" : maxWidth,
          transitionDuration: `${animationDuration}ms`,
          background: modalBackground,
        }}
        className={`modal ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Header */}
        <div className="modal-header">{header}</div>
        {/* Body */}
        <div style={{ maxHeight: maxHeight }} className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
