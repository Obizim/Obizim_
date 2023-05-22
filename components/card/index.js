const Card = ({data}) => {
  return (
    <a href={data.url} target="blank" className="hover:bg-burger-bg relative border-b border-header_bg flex justify-between items-end py-4 px-2 cursor-pointer">
      <div className="flex items-end space-x-2">
        <p className="number text-xl self-start text-gray-300">0{data.id}.</p>
        <div className="space-y-2">
        <h2 className="text-3xl">{data.title}</h2>
        <p>{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
