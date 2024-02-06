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
    console.log("Fetching comic details for id:", id);
    getComicDetails(id).then((details) => {
      console.log(details);
      setComicDetails(details);
    });
  }, [id]);

  useEffect(() => {
    // getAllCategories().then((categories) => {
    //   // console.log(categories);
    //   setCategories(categories);
    // });
    // getAllGenres().then((genres) => {
    //   // console.log(genres);
    //   setGenres(genres);
    // });
    // getAllArtStyles().then((artStyles) => {
    //   // console.log(artStyles);
    //   setArtStyles(artStyles);
    // });
    // getAllLanguages().then((languages) => {
    //   // console.log(languages);
    //   setLanguages(languages);
    // });
  }, []);

  // const getCategoryName = (categoryId) => {
  //   const category = categories.find((category) => category.id === categoryId);
  //   console.log(category);
  //   return category ? category.name : "Category not found";
  // };

  // const getGenreName = (genreId) => {
  //   const genre = genres.find((genre) => genre.id === genreId);
  //   return genre ? genre.name : "Genre not found";
  // };

  // const getArtStyleName = (artStyleId) => {
  //   const artStyle = artStyles.find((artStyle) => artStyle.id === artStyleId);
  //   return artStyle ? artStyle.name : "Art style not found";
  // };

  // const getLanguageName = (languageId) => {
  //   const language = languages.find((language) => language.id === languageId);
  //   return language ? language.name : "Language not found";
  // };

  if (!comicDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="header-container text-light">{comicDetails.title}</h2>
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
    </div>
  );
};
