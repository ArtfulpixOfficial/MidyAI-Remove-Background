import { ImageSection } from "./ImageSection";
import { Message } from "./Message";
import UploadFile from "./UploadFile";
import InputForm from "./InputForm";
import { RotatingLines } from "react-loader-spinner";

export function Main({
  image,
  newImage,
  handleOriginalImage,
  handleNewImage,
  isLoading,
  handleLoading,
}) {
  async function onFileChange(file) {
    handleOriginalImage(file);
  }

  return (
    <main>
      {!isLoading && !image && !newImage && (
        <>
          <Message />
          <UploadFile onFileChange={onFileChange} />
        </>
      )}
      {!isLoading && image && !newImage && (
        <>
          <img
            src={URL.createObjectURL(image)}
            alt="originalImage"
            className="original-image"
          />
          <InputForm
            image={image}
            handleNewImage={handleNewImage}
            handleLoading={handleLoading}
          />
        </>
      )}
      {!isLoading && newImage && (
        <ImageSection image={image} newImage={newImage} />
      )}
      {isLoading && (
        <RotatingLines
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#fff", "#424b5a"]}
        />
      )}
      {/* {newImage ? (
        <ImageSection image={image} newImage={newImage} />
      ) : (
        <>
          {!image ? (
            <>
              <Message />
              <UploadFile onFileChange={onFileChange} />
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(image)}
                alt="originalImage"
                className="original-image"
              />
              <InputForm image={image} handleNewImage={handleNewImage} />
            </>
          )}
        </>
      )} */}
    </main>
  );
}
