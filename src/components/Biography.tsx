import { HeroData } from "../types/HeroData";

export const Biography = (props: { hero: HeroData | null }) => {
  const { hero } = props;

  return (
    <div>
      <ul>
        <li className="flex gap-3 mb-8 text-xl">
          <p className="text-gray-600 font-semibold">Full-Name:</p>{" "}
          <p>{hero?.biography["full-name"]}</p>
        </li>
        <li className="flex gap-3 mb-8">
          <p className="text-gray-600 font-semibold text-xl">Alert-Egos:</p>{" "}
          <p>{hero?.biography["alter-egos"]}</p>
        </li>
        <li className="flex gap-3 mb-8">
          <p className="text-gray-600 font-semibold text-xl">Aliases:</p>{" "}
          <p>{hero?.biography.aliases.join(", ")}</p>
        </li>
        <li className="flex gap-3 mb-8">
          <p className="text-gray-600 font-semibold text-xl">Place-of-Birth:</p>{" "}
          <p>{hero?.biography["place-of-birth"]}</p>
        </li>
        <li className="flex gap-3 mb-8">
          <p className="text-gray-600 font-semibold text-xl">
            First-Appearance:
          </p>{" "}
          <p>{hero?.biography["first-appearance"]}</p>
        </li>
        <li className="flex gap-3 mb-8">
          <p className="text-gray-600 font-semibold text-xl">Publisher:</p>{" "}
          <p>{hero?.biography.publisher}</p>
        </li>
      </ul>
    </div>
  );
};
