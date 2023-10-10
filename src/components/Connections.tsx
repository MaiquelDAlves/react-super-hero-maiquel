import { HeroData } from "../types/HeroData";

export const Connections = (props: { hero: HeroData | null }) => {
  const { hero } = props;
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-1 w-7 bg-yellow-600"></div>{" "}
          <p className="font-semibold text-gray-600">GROUP--AFFILIATION</p>
        </div>
        <p>{hero?.connections["group-affiliation"]}</p>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-1 w-7 bg-yellow-600"></div>{" "}
          <p className="font-semibold text-gray-600">RELATIVES</p>
        </div>
        <p>{hero?.connections.relatives}</p>
      </div>
    </>
  );
};
