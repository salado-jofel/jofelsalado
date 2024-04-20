import React from "react";
import resume from "../../../public/assets/images/jofelsalado.png";
import ResumeFrame from "../_components/resume-frame";

export default function ResumeViewer() {
  return <ResumeFrame resumePath={resume} />;
}
