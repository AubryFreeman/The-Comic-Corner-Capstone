import React, { useEffect, useState } from "react";
import {
  deleteComic,
  getAllComics,
  getComicDetails,
} from "../Services/ComicService.js";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ComicDetails = ({ currentUser }) => {
  const [comicDetails, setComicDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getComicDetails(id).then((details) => {
      setComicDetails(details);
    });
  }, [id]);

  const handleDeleteComic = (comicId) => {
    deleteComic(comicId).then(() => {
      getAllComics().then((comicsArray) => {
        setComicDetails(null);
      });
    });
  };

  const navigate = useNavigate();

  if (!comicDetails) {
    return <div>Loading...</div>;
  }

  const isOwner = currentUser && comicDetails.userId === currentUser.id;

  return (
    <div className="container">
      <h1 className="header-container text-light">{comicDetails.title}</h1>
      <h3 className="header-container text-light">{comicDetails.author}</h3>
      <h5 className="header-container text-light">
        {comicDetails.description}
      </h5>
      <div className="id-container text-light"></div>
      <div className="category-container text-light">
        Category: {comicDetails.category.name}
      </div>
      <div className="genre-container text-light">
        Genre: {comicDetails.genre.name}
      </div>
      <div className="artStyle-container text-light">
        Art Style: {comicDetails.artStyle.name}
      </div>
      <div className="language-container text-light">
        Language: {comicDetails.language.name}
      </div>
      <div className="pageLength-container text-light">
        Page Length: {comicDetails.pageLength}
      </div>
      <div className="ageRestriction-container text-light">
        Age Restriction: {comicDetails.ageRestriction}
      </div>
      {isOwner && (
        <fieldset>
          <button
            className="edit-button"
            onClick={() => navigate(`/EditComic/${id}`)}
          >
            Edit
          </button>
          <Link className="delete-link" to={`/Comics`}>
            <button
              className="delete-button"
              onClick={() => handleDeleteComic(comicDetails.id)}
            >
              Delete
            </button>
          </Link>
        </fieldset>
      )}
    </div>
  );
};
