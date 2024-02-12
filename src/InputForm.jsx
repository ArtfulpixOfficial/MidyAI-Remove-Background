import { Button } from "./Button";
import { clipBoardAPI } from "./api";
const InputForm = function ({ image, handleNewImage, handleLoading }) {
  const handleSubmit = async function (e) {
    e.preventDefault();
    handleLoading(true);
    const newImageURL = await clipBoardAPI(image);
    handleNewImage(newImageURL);
    handleLoading(false);
  };
  return (
    <section className="input-form">
      <form onSubmit={handleSubmit}>
        <Button className="retryBtn">Remove Background</Button>
      </form>
    </section>
  );
};

export default InputForm;
