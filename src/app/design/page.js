import Image from "next/image";
import "./design.css";

export default function Design() {
  return (
    <div className="title">
      <h1>These are my projects</h1>
      <Image
        className="image1"
        src="/project1.jpg"
        alt="Project 1"
        width={600}
        height={600}
      />
      <p>Project 1</p>
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
