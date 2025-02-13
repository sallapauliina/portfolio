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
        <div className="about2">
          <p>
            Hi! I am Salla, a MSc student in Human-Computer Interaction at Aalto
            University, graduating this spring. My passion lies in creating
            meaningful, user-centered digital experiences through UI/UX design,
            programming, and service design.
          </p>
          <p>
            Over the past few years, I have developed my skills in designing and
            building intuitive interfaces, translating user needs into
            functional solutions, and collaborating in multidisciplinary teams.
            I am proficient in tools and technologies such as Python,
            JavaScript, React, SQL, Next.js and I am eager to deepen my
            knowledge in software engineering and full-stack development.
          </p>
          <p>
            I am currently seeking an exciting and challenging trainee
            opportunity where I can expand my skills, gain hands-on experience,
            and continue learning from experts. I thrive in environments that
            challenge me to think creatively, work collaboratively, and solve
            complex problems.
          </p>
          <p>
            Beyond my studies, I enjoy having an active lifestyle through
            dancing, running, tennis and gym, while also cherishing time with
            friends and family. Additionally, I enjoy attending to various
            culture events such as concerts, operas, musicals, and ballet. Lets
            connect and create something impactful together! You can check out
            my portfolio for some of my recent projects and contact me.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="pt-8 text-xl">Programming</h2>
        <div className="skills2">
          <div className="column1">
            <p>JavaScript</p>
            <p>Python</p>
            <p>Next.js</p>
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
