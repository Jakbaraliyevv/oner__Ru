import { Skeleton } from "antd";
import "./loader.scss";
const LoaderApi = () => {
  const cardProductLoader = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image className="skeleton-image " active={true} />
        <Skeleton.Input className="input__skaleton" active={true} />
        <Skeleton.Input className="input__skaleton2" active={true} />
        <Skeleton.Input className="input__skaleton3" active={true} />
      </div>
    ));
  };

  return { cardProductLoader };
};

export default LoaderApi;
