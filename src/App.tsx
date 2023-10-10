import { useEffect, useState } from "react";
import { ListHeroSearch } from "./components/ListHeroSearch";
import "./index.css";
import { SearchSvg } from "./assets/SearchSvg";
import { api } from "./utils/api";
import { HeroData } from "./types/HeroData";
import { Powerstats } from "./components/Powerstats";
import { Biography } from "./components/Biography";
import { Appearence } from "./components/Appearance";
import { Connections } from "./components/Connections";
import { IdContext } from "./contexts/IdContext";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hero, setHero] = useState<HeroData | null>(null);
  const [selectedTab, setSelectedTab] = useState("POWERSTATS");
  const [id, setId] = useState(70);

  const handleApiSearch = async () => {
    if (search === "undefined") return false;
    const response = await api.get(`/search/${search}`);
    const data = response.data.results;
    setSearchResults(data);
  };

  const handleApiId = async () => {
    const response = await api.get(`${id}`);
    const data = response.data;
    console.log(data);
    setHero(data);
  };

  useEffect(() => {
    handleApiId();
  }, [id]);

  useEffect(() => {
    handleApiSearch();
  }, [search]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <IdContext.Provider value={{ id, setId, search, setSearch }}>
      <div className="bg-[#130F16] h-full lg:h-screen w-screen text-white py-8 px-3">
        <header className="mb-6 container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-3xl font-bold mb-5 md:m-0">
            Super<span className="text-red-600">Hero.</span>
          </div>
          <div className="max-w-[256px] sm:max-w-md w-full">
            <div className="px-3 flex justify-center items-center border-2 border-gray-600 rounded-full">
              <input
                className="p-2 bg-transparent placeholder:text-gray-600 outline-none w-full "
                type="search"
                placeholder="Search your superhero here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchSvg />
            </div>
            <ListHeroSearch results={searchResults} searchs={search} />
          </div>
        </header>
        <section className="container mx-auto items-center lg:items-start flex flex-col lg:flex-row gap-10 w-full rounded">
          <div className="rouded">
            <img
              src={hero?.image.url}
              alt=""
              className="lg:max-w-4xl rounded"
            />
          </div>
          <div className="w-full">
            <p className="text-4xl font-semibold mb-6">{hero?.name}</p>
            <div className="w-full mb-6 sm:flex justify-between border-b-2 border-b-gray-800 font-semibold">
              <p
                className={`cursor-pointer py-2 border-b-4 ${
                  selectedTab === "POWERSTATS"
                    ? "border-b-red-600"
                    : "border-b-transparent"
                } hover:opacity-70`}
                onClick={() => handleTabClick("POWERSTATS")}
              >
                POWERSTATS
              </p>
              <p
                className={`cursor-pointer py-2 border-b-4 ${
                  selectedTab === "BIOGRAPHY"
                    ? "border-b-red-600"
                    : "border-b-transparent"
                } hover:opacity-70`}
                onClick={() => handleTabClick("BIOGRAPHY")}
              >
                BIOGRAPHY
              </p>
              <p
                className={`cursor-pointer py-2 border-b-4 ${
                  selectedTab === "APPEARANCE"
                    ? "border-b-red-600"
                    : "border-b-transparent"
                } hover:opacity-70`}
                onClick={() => handleTabClick("APPEARANCE")}
              >
                APPEARANCE
              </p>
              <p
                className={`cursor-pointer py-2 border-b-4 ${
                  selectedTab === "CONNECTIONS"
                    ? "border-b-red-600"
                    : "border-b-transparent"
                } hover:opacity-70`}
                onClick={() => handleTabClick("CONNECTIONS")}
              >
                CONNECTIONS
              </p>
            </div>
            {selectedTab === "POWERSTATS" && <Powerstats hero={hero} />}
            {selectedTab === "BIOGRAPHY" && <Biography hero={hero} />}
            {selectedTab === "APPEARANCE" && <Appearence hero={hero} />}
            {selectedTab === "CONNECTIONS" && <Connections hero={hero} />}
          </div>
        </section>
      </div>
    </IdContext.Provider>
  );
};

export default App;
