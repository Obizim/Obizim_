const Card = () => {
  return (
    <div className="relative border-b border-header_bg flex justify-between items-end py-8 cursor-pointer">
      <div className="flex items-end space-x-2">
        <p className="number text-2xl self-start italic">01.</p>
        <p className="lg:text-6xl text-3xl">FLAXO BOOKSTORE</p>
      </div>

      {/* <a href="/">VIEW LIVE PROJECT</a> */}
    </div>
  );
};

export default Card;
