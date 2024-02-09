import { Button } from "./Button";
import { clipBoardAPI } from "./api";
const InputForm = function ({ image, handleNewImage }) {
  const handleSubmit = async function (e) {
    e.preventDefault();
    const newImageURL = await clipBoardAPI(image);
    handleNewImage(newImageURL);
  };
  return (
    <section className="input-form">
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Enter your Prompt"
          className="animate-borderColor"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        /> */}
        <Button className="retryBtn">Remove Background</Button>
      </form>
    </section>
  );
};

export default InputForm;
