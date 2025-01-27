import Image from "next/image";
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
        can add new tasks, mark them as completed, and keep track of your
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
        tracking, achievements, and tips.
      </div>
      <h1>Recipe recommender</h1>
      <Image
        className="image"
        src="/recipe.png"
        alt="Project 3"
        width={600}
        height={600}
      />
      <div className="text2">
        Recipe recommender is a personal project to help users find new recipes
        based on their preferences. The application asks question such as
        allergies, diets, and ingredients that the user has at home. Based on
        the answers, the application suggests recipes.
      </div>
    </div>
  );
}
