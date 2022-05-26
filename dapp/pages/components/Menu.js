import MyButton from "./MyButton";

const Menu = () => {
  return (
    <div className="bg-gray-900 p-3">
      <MyButton type="neutral" href="/components/Upload">
        UPLOAD
      </MyButton>
      <MyButton type="neutral" href="/components/Download">
        Download
      </MyButton>
    </div>
  );
};

export default Menu;
