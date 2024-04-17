import React from "react";
import ResumeViewer from "./_sections/resume-viewer";

export default function Page() {
  return (
    <main className=" w-full h-full overflow-hidden z-[900]">
      <article className=" px-[30px]">
        <section className="max-w-4xl mt-[30px] mb-[60px] m-auto">
          <ResumeViewer />
        </section>
      </article>
    </main>
  );
}
