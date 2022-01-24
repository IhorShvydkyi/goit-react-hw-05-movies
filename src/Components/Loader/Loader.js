import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderPosition } from "./Loader.styled";

const Spiner = () => {
  return (
    <LoaderPosition>
      <Loader
        type="ThreeDots"
        color=" #3f51b5"
        height={100}
        width={100}
        timeout={4000}
      />
    </LoaderPosition>
  );
};
export default Spiner;
