import FileDefault from "./file.jpg";
import MyButton from "./MyButton";

const Card = ({ model }) => {
  return (
    <div className="rounded overflow-hidden bg-indigo-400 text-cyan-50">
      <img src={FileDefault} alt="Default File" />
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
