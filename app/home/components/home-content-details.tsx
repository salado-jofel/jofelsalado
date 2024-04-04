import React from "react";

export default function HomeContentDetails({ details }: { details?: string }) {
  return <p className="text-white flex-1">{details}</p>;
}
