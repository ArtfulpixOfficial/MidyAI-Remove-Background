import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export function ImageSection({ image, newImage }) {
  const imageUrl = URL.createObjectURL(image);
  console.log(imageUrl);
  console.log(newImage);
  return (
    <section className="imageSection">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={imageUrl} alt="Image one" />}
        itemTwo={
          <ReactCompareSliderImage
            src={newImage}
            alt="Image two"
            style={{
              backgroundColor: "white",
              backgroundImage:
                "linear-gradient(45deg, #ccc 25%, transparent 25%),\n linear-gradient(-45deg, #ccc 25%, transparent 25%),\n linear-gradient(45deg, transparent 75%, #ccc 75%),\n linear-gradient(-45deg, transparent 75%, #ccc 75%)",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              backgroundSize: "20px 20px",
            }}
          />
        }
        transition="1s ease-in-out"
        style={{
          width: "635px",
          height: "635px",
        }}
      />
    </section>
  );
}
