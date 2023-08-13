import { useContext } from "react";
import { MovieContext } from "../context/MainReducer";
import Movietile from "../components/Movietile";
const WatchlistPage = () => {
  const { WatchLater } = useContext(MovieContext);
  const displayData = [...WatchLater];
  return (
    <>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {displayData.map((val) => (
          <Movietile movieItem={val} removeButton={true}></Movietile>
        ))}
      </div>
    </>
  );
};

export default WatchlistPage;
