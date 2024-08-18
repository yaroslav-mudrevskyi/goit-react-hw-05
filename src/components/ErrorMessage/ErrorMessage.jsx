import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ title }) => {
  return <div className={s.title}>{title}</div>;
};

export default ErrorMessage;
