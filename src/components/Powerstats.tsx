import { ShieldSvg } from "../assets/ShieldSvg";
import { HeroData } from "../types/HeroData";

export const Powerstats = (props: { hero: HeroData | null }) => {
  const { hero } = props;
  return (
    <div className="">
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between p-4 bg-gray-900 rounded ">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">INTELLIGENCE</p>
          </div>

          <p className="font-bold text-yellow-500">
            {hero?.powerstats.intelligence}
          </p>
        </li>
        <li className="flex justify-between p-4 bg-gray-900 rounded">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">STRENGTH</p>
          </div>

          <p className="font-bold text-yellow-500">
            {hero?.powerstats.strength}
          </p>
        </li>
        <li className="flex justify-between p-4 bg-gray-900 rounded">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">SPEED</p>
          </div>

          <p className="font-bold text-yellow-500">{hero?.powerstats.speed}</p>
        </li>
        <li className="flex justify-between p-4 bg-gray-900 rounded">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">DURABILITY</p>
          </div>

          <p className="font-bold text-yellow-500">
            {hero?.powerstats.durability}
          </p>
        </li>
        <li className="flex justify-between p-4 bg-gray-900 rounded">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">POWER</p>
          </div>

          <p className="font-bold text-yellow-500">{hero?.powerstats.power}</p>
        </li>
        <li className="flex justify-between p-4 bg-gray-900 rounded">
          <div className="flex gap-3">
            <ShieldSvg />
            <p className="text-gray-400 font-semibold">COMBAT</p>
          </div>

          <p className="font-bold text-yellow-500">{hero?.powerstats.combat}</p>
        </li>
      </ul>
    </div>
  );
};
