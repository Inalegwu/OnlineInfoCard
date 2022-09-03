import React from "react";
import "./MainCard.css";

interface ICardProps {
  children?: React.ReactNode;
}

function MainCard({ children }: ICardProps): React.ReactElement {
  return <div className="card">{children}</div>;
}

export default MainCard;
