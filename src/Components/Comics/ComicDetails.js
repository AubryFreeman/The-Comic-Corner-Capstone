import React, { useEffect, useState } from "react";
import {
  getComicDetails,
  getAllCategories,
  getAllGenres,
  getAllArtStyles,
  getAllLanguages,
} from "../Services/ComicService.js";
import { useParams } from "react-router-dom";

export const ComicDetails = () => {
  const [comicDetails, setComicDetails] = useState(null);
  const [categories, setCategories] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artStyles, setArtStyles] = useState([]);
  const [languages, setLanguages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getComicDetails(id).then((details) => {
      setComicDetails(details);
    });
  }, [id]);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
    getAllGenres().then((genres) => {
      setGenres(genres);
    });
    getAllArtStyles().then((artStyles) => {
      setArtStyles(artStyles);
    });
    getAllLanguages().then((languages) => {
      setLanguages(languages);
    });
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "Category not found";
  };

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Genre not found";
  };

  const getArtStyleName = (artStyleId) => {
    const artStyle = artStyles.find((artStyle) => artStyle.id === artStyleId);
    return artStyle ? artStyle.name : "Art style not found";
  };

  const getLanguageName = (languageId) => {
    const language = languages.find((language) => language.id === languageId);
    return language ? language.name : "Language not found";
  };

  if (!comicDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="header-container text-light">{comicDetails.name}</h2>
      <div className="id-container text-light">
        {/* User ID: {comicDetails.userId} */}
      </div>
      <div className="category-container text-light">
        Category: {getCategoryName(comicDetails.categoryId)}
      </div>
      <div className="genre-container text-light">
        Genre: {getGenreName(comicDetails.genreId)}
      </div>
      <div className="artstyle-container text-light">
        Art Style: {getArtStyleName(comicDetails.artStyleId)}
      </div>
      <div className="language-container text-light">
        Language: {getLanguageName(comicDetails.languageId)}
      </div>
      <div className="pagelength-container text-light">
        Page Length: {comicDetails.pageLength}
      </div>
      <div className="agerestriction-container text-light">
        Age Restriction: {comicDetails.ageRestriction}
      </div>
    </div>
  );
};
