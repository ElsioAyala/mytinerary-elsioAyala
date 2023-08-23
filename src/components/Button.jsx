import { Link as ButtonLink } from "react-router-dom";
function Button({ text, customStyle, icon, padding, link }) {
  return (
    <ButtonLink to={link} className={`${customStyle} ${padding} button bg-primary-color  text-white transition-colors hover:bg-indigo-900 inline-flex items-center`}>
      {icon ? <span className="mr-1">{icon}</span> : null}
      {text}
    </ButtonLink>
  );
}

export default Button;
