import Card from "./Card";

const Download = ({ content }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 bg-slate-800 rounded p-5">
        {content.map((nft) => (
          // eslint-disable-next-line react/jsx-key
          <Card model={nft} />
        ))}
      </div>
    </>
  );
};

export default Download;
