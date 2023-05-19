import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
  text: string;
};

/** props (color, fontsize, text) */
export const Text: FC<Props> = (props) => {
  const { color, fontSize, text } = props;
  return <p style={{ color, fontSize }}>{text}</p>;
};
