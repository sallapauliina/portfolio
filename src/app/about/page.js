import "./about.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="title">
      <h1>About me</h1>
      <Image
        className="img"
        src="/photo.jpg"
        alt="Photo"
        width={200}
        height={200}
      />
      <div className="about">
        <p>Something about me..</p>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills2">
            <div className="column1">
              <p>Python</p>
              <p>Python</p>
              <p>Python</p>
            </div>
            <div className="column2">
              <p>Python</p>
              <p>Python</p>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
