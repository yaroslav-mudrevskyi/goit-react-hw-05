import { DNA } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <DNA
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
