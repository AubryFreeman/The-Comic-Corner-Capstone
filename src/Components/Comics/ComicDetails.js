import React, { useEffect, useState } from "react";
import { getComicDetails } from "../Services/ComicService.js";
import { useParams } from "react-router-dom";

export const ComicDetails = () => {
  const [comicDetails, setComicDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // if (comicId) {
    getComicDetails(id).then((details) => {
      setComicDetails(details);
    });
    // }
  }, [id]);

  //   if (!comicDetails) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="container">
      <h2 className="header-container text-light">{comicDetails?.name}</h2>
      <div className="id-container text-light">
        User ID: {comicDetails?.userId}
      </div>
      <div className="category-container text-light">
        Category: {comicDetails?.categoryId}
      </div>
      <div className="genre-container text-light">
        Genre: {comicDetails?.genreId}
      </div>
      <div className="artstyle-container text-light">
        Art Style: {comicDetails?.artStyleId}
      </div>
      <div className="language-container text-light">
        Language: {comicDetails?.languageId}
      </div>
      <div className="pagelength-container text-light">
        Page Length: {comicDetails?.pageLength}
      </div>
      <div className="agerestriction-container text-light">
        Age Restriction: {comicDetails?.ageRestriction}
      </div>
    </div>
  );
};
