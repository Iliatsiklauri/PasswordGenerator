import './strength.css';

type propType = {
  count: number;
};
const Strength = ({ count }: propType) => {
  return (
    <div className="wrapper">
      <h2>STRENGTH</h2>
      {/* ვიცი ქვემოთ ოქროს წესს ვარღვევ მაგრამ გამოვასწორებ :)  */}
      {count === 0 ? (
        <div className="flex ml-[100px]">
          <div className="flex w-[60px] h-[28px] justify-between">
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
          </div>
        </div>
      ) : null}
      {count === 1 ? (
        <div className="flex w-[170px] justify-between">
          <h1 className="gg">TOO WEAK!</h1>
          <div className="flex w-[60px] h-[28px] justify-between">
            <div className="w-[10px] h-[28px] bg-red-600"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
          </div>
        </div>
      ) : null}
      {count === 2 ? (
        <div className="flex w-[160px] justify-between">
          <h1 className="gg">WEAK</h1>
          <div className="flex w-[60px] h-[28px] justify-between">
            <div className="w-[10px] h-[28px] bg-orange-400"></div>
            <div className="w-[10px] h-[28px] bg-orange-400"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
          </div>
        </div>
      ) : null}
      {count === 3 ? (
        <div className="flex w-[160px] justify-between">
          <h1 className="gg">MEDIUM</h1>
          <div className="flex w-[60px] h-[28px] justify-between">
            <div className="w-[10px] h-[28px] bg-yellow-500"></div>
            <div className="w-[10px] h-[28px] bg-yellow-500"></div>
            <div className="w-[10px] h-[28px] bg-yellow-500"></div>
            <div className="w-[10px] h-[28px] bg-transparent border-2 border-white"></div>
          </div>
        </div>
      ) : null}
      {count === 4 ? (
        <div className="flex w-[160px] justify-between">
          <h1 className="gg">STRONG</h1>
          <div className="flex w-[60px] h-[28px] justify-between">
            <div className="w-[10px] h-[28px] bg-green-400"></div>
            <div className="w-[10px] h-[28px] bg-green-400"></div>
            <div className="w-[10px] h-[28px] bg-green-400"></div>
            <div className="w-[10px] h-[28px] bg-green-400"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Strength;
