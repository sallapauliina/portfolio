import Image from "next/image";
import "./design.css";

export default function Design() {
  return (
    <div className="title2">
      <h1>AskareAppi</h1>
      <Image
        className="image1"
        src="/askare_appi.png"
        alt="Project 1"
        width={600}
        height={600}
      />
      <p>
        AskareAppi was developed together with my friend Eveliina Ahonen for our
        course. It is a personal task management solution for a clean and
        organized home. You can add new tasks, mark them as completed, and keep
        track of your progress.
      </p>
      <h1>AskareAppi</h1>
      <Image
        className="image2"
        src="/project1.jpg"
        alt="Project 1"
        width={600}
        height={600}
      />
      <p>Project 2</p>
    </div>
  );
}
