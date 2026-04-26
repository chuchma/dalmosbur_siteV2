import { Children } from "react";
import { Phone } from "./icons"

type PhoneIconProp = {
  children: React.ReactElement
  info: string
}

export default function IconText({info, children }: PhoneIconProp) {
  return (
    <div className="flex gap-fluid-small items-center">
      {children}
      <div className="flex flex-col gap">
        <p>{info}</p>
      </div>
    </div>
  );
}