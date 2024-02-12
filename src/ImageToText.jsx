import { useState } from "react";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export function ImageToText() {
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleOriginalImage = function (image) {
    setImage(image);
  };
  const handleNewImage = function (image) {
    setNewImage(image);
  };

  return (
    <>
      <Navbar
        image={image}
        newImage={newImage}
        handleNewImage={handleNewImage}
        handleOriginalImage={handleOriginalImage}
        handleLoading={setIsLoading}
      />
      <Main
        image={image}
        newImage={newImage}
        handleNewImage={handleNewImage}
        handleOriginalImage={handleOriginalImage}
        isLoading={isLoading}
        handleLoading={setIsLoading}
      ></Main>
    </>
  );
}
