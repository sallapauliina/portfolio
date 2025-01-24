import Link from "next/link";
import "./header.css";
export default function Header() {
  return (
    <nav>
      <Link className="title" href={"/"}>
        Salla Lyytikäinen
      </Link>

      <div>
        <Link className="link" href={"/about"}>
          About
        </Link>
        <Link className="link" href={"/design"}>
          {" "}
          Design
        </Link>
        <Link className="link" href={"/contact"}>
          {" "}
          Contact
        </Link>
      </div>
    </nav>
  );
}
