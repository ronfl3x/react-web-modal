# React Web Modal

A simple react modal component with no dependencies that is easy to use and customize.
Of course it comes with responsive styles out of the box.

## Installation

```bash
npm install react-web-modal
```

## Usage

```javascript
import React from "react";
import { Modal } from "react-web-modal";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  render() {
    return (
      <div>
        <button onClick={() => setIsVisible(true)}>Open Modal</button>
        <Modal
          visible={isVisible}
          onClose={() => console.log("Modal closed")}
        >
          <div>
            <h1>Simple Modal</h1>
            <p>Modal content</p>
            <a onClick={() => setIsVisible(false)}>Close</a>
          </div>
        </Modal>
      </div>
    );
  }
}
```

## Props

| Prop              | Description                                                             | Type            | Default Value             | Required |
| ----------------- | ----------------------------------------------------------------------- | --------------- | ------------------------- | -------- |
| isVisible         | Controls the visibility of the modal                                    | boolean         |                           | Yes      |
| setIsVisible      | Callback function to set the visibility of the modal                    | function        |                           | Yes      |
| header            | Header content of the modal                                             | React.ReactNode |                           | No       |
| children          | Content of the modal                                                    | React.ReactNode |                           | No       |
| onOpen            | Callback function triggered when the modal is opened                    | function        | () => setIsVisible(true)  | No       |
| lockScroll        | Controls whether to lock scrolling on the background when modal is open | boolean         | true                      | No       |
| onClose           | Callback function triggered when the modal is closed                    | function        | () => setIsVisible(false) | No       |
| maxWidth          | Maximum width of the modal                                              | string          | "600px"                   | No       |
| maxHeight         | Maximum height of the children modal                                    | string          | "85vh"                    | No       |
| closeOnBgClick    | Controls whether to close the modal when clicking on the background     | boolean         | true                      | No       |
| closeOnEscape     | Controls whether to close the modal when pressing the escape key        | boolean         | true                      | No       |
| animationDuration | Duration of the modal animation in milliseconds                         | number          | 400                       | No       |
| background        | Background color of the modal background                                | string          | "rgba(0,0,0,0.5)"         | No       |
| modalBackground   | Background color of the modal                                           | string          | "white"                   | No       |

## License

MIT
