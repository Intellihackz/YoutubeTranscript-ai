import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function InputField() {
  const [videoId, setVideoId] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const handleSubmit = (event: any) => {
    // Prevent the default form submission
    event.preventDefault();
  };
  const handleSubmit2 = (event: any) => {
    // Prevent the default form submission
    event.preventDefault();
    if (videoId === "") {
      setIsFilled(true);
    } else {
    }
  };
  const handleClose = () => setIsFilled(false);

  return (
    <>
      <Modal show={isFilled} onHide={handleClose}>
        <Modal.Body>Please Enter a Url or Video ID</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="largeInput">Enter Video ID/Url:</label>
            <input
              required
              value={videoId}
              type="text"
              className="form-control form-control-lg mt-2"
              id="largeInput"
              placeholder="Enter your text"
              onChange={(event) => setVideoId(event.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit2}
            className="btn btn-primary mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default InputField;
