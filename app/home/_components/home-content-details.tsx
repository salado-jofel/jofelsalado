import React, { ReactNode } from "react";

export default function HomeContentDetails({
  details,
}: {
  details?: ReactNode;
}) {
  return <div className="text-white flex-1">{details}</div>;
}
