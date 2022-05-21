import MyButton from "./MyButton";

const Menu = () => {
  return (
    <div className="bg-indigo-500 rounded p-3">
      <MyButton type="neutral">UPLOAD</MyButton>
      <MyButton type="neutral">MY TOKENS</MyButton>
      <MyButton type="neutral">MINT TOKEN</MyButton>
    </div>
  );
};

export default Menu;
