"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  const [pickedImage, setPickedImage] = useState();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Choose Image
        </button>
      </div>
    </div>
  );
}
