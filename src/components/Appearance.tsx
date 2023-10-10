import { StarSvg } from "../assets/StarSvg";
import { HeroData } from "../types/HeroData";

const capitalizeFirstLetter = (str: string | undefined) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

export const Appearence = (props: { hero: HeroData | null }) => {
  const { hero } = props;
  const eyeColor = hero?.appearance["eye-color"];
  const hairColor = hero?.appearance["hair-color"];
  return (
    <div>
      <ul>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>GENDER</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {hero?.appearance.gender}
          </p>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>RACE</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {hero?.appearance.race}
          </p>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>HEIGHT</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {hero?.appearance.height[1]}
          </p>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>WEIGHT</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {hero?.appearance.weight[1]}
          </p>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>EYE-COLOR</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {capitalizeFirstLetter(eyeColor)}
          </p>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex gap-5 font-bold">
            <StarSvg />
            <p>HAIR-COLOR</p>
          </div>
          <p className="bg-red-600 px-3 rounded-full font-bold">
            {capitalizeFirstLetter(hairColor)}
          </p>
        </li>
      </ul>
    </div>
  );
};
