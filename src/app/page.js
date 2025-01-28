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
          development and service design while expanding my skills in software
          engineering and full-stack development.
        </p>
      </div>
      <div className="skills">
        <h2 className="text-xl">Programming</h2>
        <div className="skills2">
          <div className="column1">
            <p>JavaScript</p>
            <p>Python</p>
            <p>React</p>
            <p>SQL</p>
            <p>C</p>
          </div>
          <div className="column2">
            <p>CSS</p>
            <p>Node.js</p>
            <p>HTML</p>
            <p>Docker</p>
            <p>Github</p>
          </div>
        </div>
        <h2 className="text-xl">Skills</h2>
        <div className="skills2">
          <div className="column1">
            <p>Service design</p>
            <p>Prototyping</p>
            <p>Wireframing</p>
            <p>Customer service</p>
          </div>
          <div className="column2">
            <p>Website design</p>
            <p>Debugging</p>
            <p>Figma</p>
            <p>MS Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}
