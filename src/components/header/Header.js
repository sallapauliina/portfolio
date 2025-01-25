import Link from "next/link";
import "./header.css";
export default function Header() {
  return (
    <nav>
      <Link className="title1" href={"/"}>
        Salla Lyytikäinen
      </Link>

      <div>
        <Link className="link" href={"/design"}>
          {" "}
          Projects
        </Link>
        <Link className="link" href={"/contact"}>
          {" "}
          Contact
        </Link>
      </div>
    </nav>
  );
}
