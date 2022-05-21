const MyButton = ({ type, children }) => {
  const styles = {
    primary:
      "text-center p-3 m-2 text-white text-lg font-bold bg-indigo-600 hover:text-black hover:bg-indigo-200",
    neutral:
      "text-center p-3 m-2 text-white text-lg font-bold hover:text-black hover:bg-indigo-200",
    danger:
      "text-center p-3 m-2 text-white text-lg font-bold bg-red-600 hover:text-black hover:bg-red-200",
    success:
      "text-center p-3 m-2 text-white text-lg font-bold bg-green-600 hover:text-black hover:bg-green-200",
    default:
      "text-center p-3 m-2 text-white text-lg font-bold bg-indigo-600 hover:text-black hover:bg-white",
  };

  function getStyle() {
    const style = styles[type];
    return style ? style : styles.default;
  }

  return <button className={getStyle()}>{children}</button>;
};

export default MyButton;
