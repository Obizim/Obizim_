const Card = ({data}) => {
  return (
    <a href={data.url} target="blank" className="hover:bg-burger-bg relative border-b border-header_bg flex justify-between items-end py-8 cursor-pointer">
      <div className="flex items-end space-x-2">
        <p className="number text-2xl self-start">0{data.id}.</p>
        <div className="space-y-4 text-lg">
        <h2 className="lg:text-6xl text-3xl">{data.title}</h2>
        <p>{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
