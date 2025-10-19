import Image from "next/image";
import Link from "next/link";
import "./design.css";

export default function Design() {
  return (
    <div className="title2">
      <h1>AskareAppi</h1>
      <Image
        className="image"
        src="/askare_appi.png"
        alt="Project 1"
        width={600}
        height={600}
      />
      <div className="text2">
        AskareAppi was developed together with my friend for our course. It is a
        personal task management solution for a clean and organized home. You
        can add new tasks, mark them as completed and keep track of your
        progress.
      </div>
      <h1>Carbon companion</h1>
      <Image
        className="image"
        src="/carbon_companion.png"
        alt="Project 2"
        width={600}
        height={600}
      />
      <div className="text2">
        This is another group project that I did with my friends. Carbon
        companion is a mobile application, which helps users to track and reduce
        their carbon footprint. It offers a variety of features, such as
        tracking, achievements, and tips. You can view the Figma prototype{" "}
        <Link
          className="underline"
          href="https://www.figma.com/proto/5pXyva6sVL3UlVMXkRO63j/UIC-projekti?node-id=0-1&p=f&t=qVCHIvCZPFtdR4xS-0&scaling=contain&content-scaling=fixed&starting-point-node-id=54%3A582&show-proto-sidebar=1"
        >
          here
        </Link>
        .
      </div>
      <h1>Recipe recommender</h1>
      <Image
        className="image"
        src="/recipeNew.png"
        alt="Project 3"
        width={600}
        height={600}
      />
      <div className="text2">
        Recipe recommender is a personal project to help users find new recipes
        based on their preferences. The application asks question such as
        allergies, diets, and ingredients that the user has. Based on the
        inputs, the application suggests different recipes. You can view the
        Figma prototype{" "}
        <Link
          className="underline"
          href="https://www.figma.com/proto/hORQsropo0XW8oCDIH1FgD/Portfolio?node-id=0-1&p=f&viewport=189%2C-913%2C0.18&t=xbysC1CpvCjzhf5v-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2016&show-proto-sidebar=1"
        >
          here
        </Link>
        .
      </div>
    </div>
  );
}
