import FileDefault from "../../public/file.jpg";
import MyButton from "./MyButton";

import Image from "next/image";

const Card = ({ model }) => {
  return (
    <div className="rounded overflow-hidden bg-indigo-400 text-cyan-50">
      <Image src={FileDefault} alt="Default File" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{model.title}</div>
        <p>{model.text}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <MyButton type="primary">Download</MyButton>
      </div>
    </div>
  );
};

export default Card;
