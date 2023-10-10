import { IdContext } from "../contexts/IdContext";
import { HeroData } from "../types/HeroData";
import { useContext, useState, useEffect } from "react";

type Props = {
  results: HeroData[];
  searchs: string;
};

export const ListHeroSearch = ({ results, searchs }: Props) => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const id = useContext(IdContext);

  const handleIdHero = (idHero: number) => {
    id?.setId(idHero);
    setVisibleSearch(false);
    id?.setSearch("");
  };

  useEffect(() => {
    setVisibleSearch(true);
  }, [searchs]);

  return (
    <>
      {results && searchs && visibleSearch && (
        <div className="bg-[#130F16] absolute mt-2  max-h-48 w-64 sm:max-w-[448px] sm:w-full overflow-y-scroll font-bold scrollbar-thin scrollbar-thumb-red-600">
          <ul className="flex flex-col gap-2">
            {results.map((item) => (
              <li
                onClick={() => handleIdHero(+item.id)}
                key={item.id}
                className="flex justify-start items-center gap-3 max-w-md cursor-pointer hover:bg-slate-800"
              >
                <img
                  className="w-12 h-16"
                  src={item.image.url}
                  alt={item.name}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
