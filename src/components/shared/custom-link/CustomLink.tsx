import { Link } from "react-router-dom";

import { CustomLinkProps } from "@interfaces/component";

import { CustomLinkContainer } from "./CustomLink.style";

const CustomLink = ({
  label,
  link,
  linkLabel,
}: CustomLinkProps): JSX.Element => {
  return (
    <CustomLinkContainer>
      <label>{label}</label>
      <Link to={link}>{linkLabel}</Link>
    </CustomLinkContainer>
  );
};

export default CustomLink;
