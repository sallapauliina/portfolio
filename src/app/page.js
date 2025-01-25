import "./about.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="title">
      <h1 className="text-2xl">About me</h1>
      <Image
        className="img"
        src="/photo.jpg"
        alt="Photo"
        width={200}
        height={200}
      />
      <div className="about">
        <p>
          I am a MSc student in Human-Computer Interaction at Aalto University,
          graduating this spring. I am looking for a challenging and interesting
          internship where I can use my skills in UI/UX design, front-end
          development, service design, and interaction design while expanding my
          skills in software engineering and full-stack development.
        </p>
      </div>
      <div className="skills">
        <h2 className="text-xl">Programming</h2>
        <div className="skills2">
          <div className="column1">
            <p>Javascript</p>
            <p>Python</p>
            <p>React</p>
            <p>SQL</p>
            <p>C</p>
          </div>
          <div className="column2">
            <p>CSS</p>
            <p>Node</p>
            <p>HTML</p>
            <p>Docker</p>
          </div>
        </div>
        <h2 className="text-xl">Skills</h2>
        <div className="skills2">
          <div className="column1">
            <p>Service design</p>
            <p>Prototyping</p>
            <p>Usability testing</p>
            <p>Wireframing</p>
          </div>
          <div className="column2">
            <p>Design systems</p>
            <p>Sketch</p>
            <p>Adobe XD</p>
            <p>Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
