import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1>© Salla Lyytikäinen</h1>
      <Link href="mailto:salla.lyytikainen@outlook.com">
        salla.lyytikainen@outlook.com
      </Link>
    </div>
  );
}
