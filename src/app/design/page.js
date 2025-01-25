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
        AskareAppi was developed together with my friend for our course. It is a
        personal task management solution for a clean and organized home. You
        can add new tasks, mark them as completed, and keep track of your
        progress.
      </div>
      <h1>Carbon companion</h1>
      <Image
        className="image2"
        src="/carbon_companion.png"
        alt="Project 1"
        width={600}
        height={600}
      />
      <div className="textt">
        This is another group project that I did with my friends. Carbon
        companion is a mobile application, which helps users to track and reduce
        their carbon footprint. It offers a variety of features, such as
        tracking, achievements, and tips.
      </div>
    </div>
  );
}
