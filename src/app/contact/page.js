import "./contact.css";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function Contact() {
  return (
    <div className="title">
      <h1 className="pb-5">Contact me</h1>
      <Link href="mailto:salla.lyytikainen@outlook.com">
        salla.lyytikainen@outlook.com
      </Link>
      <div className="wrapper">
        <Link href="https://www.linkedin.com/in/salla-lyytik%C3%A4inen-5381691a1/">
          <LinkedInIcon href="https://www.linkedin.com/in/salla-lyytik%C3%A4inen-5381691a1/"></LinkedInIcon>
        </Link>
        <Link href="https://github.com/sallapauliina">
          <GitHubIcon href="https://github.com/sallapauliina"></GitHubIcon>
        </Link>
      </div>
    </div>
  );
}
