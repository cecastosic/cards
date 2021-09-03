import React, { useEffect, useState } from "react";
import "./App.css";
import { Card, CardData } from "./components/Card";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { useFetch } from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(searchQuery, 500);
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: allCards } = useFetch("/cards");
  const { data } = useFetch(`/cards?_page=${currentPage}&_limit=8`);

  console.log(totalItems);

  useEffect(() => {
    if (debouncedQuery !== "") {
      const filteredCards: CardData[] = allCards.filter((card: CardData) =>
        card.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setCards(filteredCards);
    }
    if (debouncedQuery === "") setCards(null);
  }, [debouncedQuery, allCards]);

  useEffect(() => {
    if (allCards) {
      setTotalItems(allCards.length);
    }
  }, [allCards]);

  if (cards) {
    return (
      <div className="app">
        <Header value={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container">
          {cards.length > 0 ? (
            cards.map((card: CardData) => {
              return <Card data={card} key={card.imagePath} />;
            })
          ) : (
            <p>No card matches the search criteria</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header value={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container" role="main">
        {data && data.length > 0 ? (
          <>
            {data.map((card: CardData) => {
              return <Card data={card} key={card.imagePath} />;
            })}
            <Pagination
              totalItems={totalItems}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </>
        ) : (
          <p>No cards</p>
        )}
      </div>
    </div>
  );
}

export default App;
