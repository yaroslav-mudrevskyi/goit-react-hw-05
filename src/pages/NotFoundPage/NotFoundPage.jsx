import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <img
        className={s.image}
        src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp"
        alt="notFound"
      />
      <h1>
        <Link className={s.link} to="/">
          Back to Home Page
        </Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
