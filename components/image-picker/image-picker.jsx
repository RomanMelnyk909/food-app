"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function IMagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const inputRef = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!selectedImage && <p>No image picked yet</p>}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          onChange={handleImageChange}
          ref={inputRef}
          className={styles.input}
          name={name}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          required
        />
        <button
          onClick={handlePickClick}
          className={styles.button}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
