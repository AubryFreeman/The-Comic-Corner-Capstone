import React, { useEffect, useState } from "react";
import { getAllComics } from "../Services/ComicService.js";
import { ComicDetails } from "./ComicDetails.js";
import "./Comics.css";
import { Link } from "react-router-dom";

export const Comics = () => {
  const [allComics, setAllComics] = useState([]);
  const [selectedComicId, setSelectedComicId] = useState(null);

  useEffect(() => {
    getAllComics().then((comicsArray) => {
      setAllComics(comicsArray);
    });
  }, []);

  useEffect(() => {
    document.body.classList.remove("welcome", "create", "profile", "logout");
    document.body.classList.add("comics");
  }, []);

  const handleComicClick = (comicId) => {
    setSelectedComicId(comicId);
  };

  return (
    <div className="comics-container">
      <h2 className="comics-header text-light">
        Comics Created from Users Around The World
      </h2>
      {allComics.map((comic) => (
        <Link className="comic-link" to={`/Comics/${comic.id}`}>
          <section
            className="comic"
            key={comic.id}
            onClick={() => handleComicClick(comic.id)}
          >
            <header className="comic-info">{comic.title}</header>
          </section>
        </Link>
      ))}
      {selectedComicId && <ComicDetails comicId={selectedComicId} />}
    </div>
  );
};
