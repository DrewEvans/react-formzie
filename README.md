![formzie-logo](https://github.com/DrewEvans/react-formzie/blob/main/src/assets/logo.svg)

## Formzie - React Component Libray

#### Quick Form Builds Making Life A Little More Easy

### Intro

This was a project was based and is based on one of the deliverables for [openclassrooms](https://openclassrooms.com/). It then resulted into this very basic form component, with a few handy extra components.

- Popup Modal
- Dynamic form input field rendering
- Custom select dropdown

**End goal:** To have a library that can cover those snazzy form needs and reduce those lines!

please don't confuse this with the greats that are already smashing it!

### Install

#### `npm -i react-formzie`

### Quick Start

#### 1. Import formzie component

`import {Formzie, InputField, Modal} from 'react-formzie'`

#### 2. Basic Implementation

```javascript
import React, { useState } from 'react';
import { Formzie, InputField, Modal } from 'react-formzie';

function app() {
  const [values, setValues] = useState({});
  const [isOpen, setIsOpen] = useState(false); //default is set to false

  // Handle the open close state of the modal display 
  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setIsOpen(false);
  };

  // Dynamic state change on user input 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //handle user submit logic & display modal if isOpen is false  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <>
      <Formzie>
        <InputField
          controlType={'input'}
          labelHeader="First Name"
          type="text"
          idNameHtml="firstName"
          onChange={handleChange}
        />
        <InputField
          controlType={'input'}
          labelHeader="Last Name"
          type="text"
          idNameHtml="lastName"
          onChange={handleChange}
        />
        <InputField
          controlType={'submit'}
          onClick={handleSubmit}
          buttonText="Submit"
        />
      </Formzie>
      {isOpen && (
        <Modal onClick={handleOpen}>
          <p>Some Content</p>
        </Modal>
      )}
    </>
  );
}
```
