import { useState } from "react";
import MyButton from "./MyButton";

const Upload = () => {
  const [fileLink, setFileLink] = useState("");
  return (
    <>
      <div className="bg-gray-700 rounded p-5">
        {/* Select File */}
        <MyButton type="success">Select File</MyButton>

        {/* Upload File */}
        <MyButton type="primary"> Upload File</MyButton>
      </div>
    </>
  );
};

export default Upload;
