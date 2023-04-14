import React, { useState } from "react";
import "./App.css";
import { Modal } from "react-web-modal";
import closeOutline from "./assets/close-outline.svg";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Modal Header
  const header = (
    <div className="modal-header">
      <img
        onClick={() => setIsVisible(false)}
        className="modal-close-icon"
        src={closeOutline}
        alt="close"
      />
      <h1 className="modal-title">React Web Modal</h1>
    </div>
  );

  return (
    <div className="App">
      <button onClick={() => setIsVisible(true)} className="button">
        Open Modal
      </button>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} header={header}>
        <div className="modal-container">
          <p className="modal-description">
            A simple, lightweight, and customizable modal component for React
            web apps.
          </p>
          <div className="modal-buttons">
            <a
              href="https://github.com/ronfl3x/react-web-modal"
              target="_blank"
              className="modal-button"
              referrerPolicy="no-referrer"
            >
              Github
            </a>
            <a
              href="https://www.npmjs.com/package/react-web-modal"
              className="modal-button"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              NPM
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
