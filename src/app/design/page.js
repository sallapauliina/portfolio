import Image from "next/image";
import "./design.css";

export default function Design() {
  return (
    <div className="title2">
      <h1>Shopping list</h1>
      <Image
        className="image1"
        src="/askare_appi.png"
        alt="Project 1"
        width={600}
        height={600}
      />
      <div className="textt">
        Shopping list is an application which allows users to create shopping
        lists, add items to these lists, mark items as collected, and maintain
        active and inactive lists.
      </div>
      <h1>AskareAppi</h1>
      <Image
        className="image2"
        src="/askare_appi.png"
        alt="Project 1"
        width={600}
        height={600}
      />
      <div className="textt">
        AskareAppi was developed together with my friend Eveliina for our
        course. It is a personal task management solution for a clean and
        organized home. You can add new tasks, mark them as completed, and keep
        track of your progress.
      </div>
    </div>
  );
}
