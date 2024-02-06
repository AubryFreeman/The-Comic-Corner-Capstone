import React, { useEffect, useState } from "react";
import "./CreateComic.css";
import {
  getAllArtStyles,
  getAllCategories,
  getAllGenres,
  getAllLanguages,
  saveComic,
} from "../Services/ComicService.js";
import { useNavigate } from "react-router-dom";

export const CreateComics = () => {
  const [comic, setComic] = useState({
    title: "",
    author: "",
    description: "",
    userId: 0,
    categoryId: 0,
    genreId: 0,
    artStyleId: 0,
    languageId: 0,
    pageLength: 0,
    ageRestriction: "",
  });
  const [categoryArray, setCategoryArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [artStyleArray, setArtStyleArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategoryArray(res);
    });
  }, []);
  useEffect(() => {
    getAllGenres().then((res) => {
      setGenreArray(res);
    });
  }, []);
  useEffect(() => {
    getAllArtStyles().then((res) => {
      setArtStyleArray(res);
    });
  }, []);
  useEffect(() => {
    getAllLanguages().then((res) => {
      setLanguageArray(res);
    });
  }, []);

  const handleChange = (event) => {
    const comicObject = structuredClone(comic);
    switch (event.target.name) {
      case "title":
        comicObject.title = event.target.value;
        setComic(comicObject);
        break;
      case "author":
        comicObject.author = event.target.value;
        setComic(comicObject);
        break;
      case "description":
        comicObject.description = event.target.value;
        setComic(comicObject);
        break;
      case "category":
        comicObject.categoryId = +event.target.value;
        setComic(comicObject);
        break;
      case "genre":
        comicObject.genreId = +event.target.value;
        setComic(comicObject);
        break;
      case "artStyle":
        comicObject.artStyleId = +event.target.value;
        setComic(comicObject);
        break;
      case "language":
        comicObject.languageId = +event.target.value;
        setComic(comicObject);
        break;
      case "pageLength":
        comicObject.pageLength = +event.target.value;
        setComic(comicObject);
        break;
      case "ageRestriction":
        comicObject.ageRestriction = event.target.value;
        setComic(comicObject);
        break;

      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleCreateComic = (event) => {
    event.preventDefault();
    saveComic(comic).then(() => {
      navigate(`/comics`);
    });
  };

  return (
    <form className="create text-light">
      <h2>Create your own Comic</h2>
      <div className="createComic-container">
        <div className="comic-details">
          <fieldset>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Comics Title"
                name="title"
                onChange={handleChange}
              ></input>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                placeholder="Authors Name"
                name="author"
                onChange={handleChange}
              ></input>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Comics Description"
                name="description"
                onChange={handleChange}
              ></input>
            </div>
          </fieldset>
          <fieldset className="category">
            <div className="category-list">
              <h3>Category</h3>
              {categoryArray.map((category) => (
                <div key={category.id} className="category-option">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={`category${category.id}`}>
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset className="genre">
            <div className="genre-list">
              <h3>Genre</h3>
              {genreArray.map((genre) => (
                <div key={genre.id} className="genre-option">
                  <input
                    type="radio"
                    name="genre"
                    value={genre.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={`category${genre.id}`}>{genre.name}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset className="artStyle">
            <div className="artStyle-list">
              <h3>Art Style</h3>
              {artStyleArray.map((artStyle) => (
                <div key={artStyle.id} className="artStyle-option">
                  <input
                    type="radio"
                    name="artStyle"
                    value={artStyle.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={`artStyle${artStyle.id}`}>
                    {artStyle.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset className="language">
            <div className="language-list">
              <h3>Language</h3>
              {languageArray.map((language) => (
                <div key={language.id} className="language-option">
                  <input
                    type="radio"
                    name="language"
                    value={language.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={`language${language.id}`}>
                    {language.name}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <div className="comicLength">
              <label>Comic Length</label>
              <input
                type="number"
                className="form-control"
                placeholder="Comic Length"
                name="pageLength"
                onChange={handleChange}
              ></input>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Age Restricted?</label>
              <div>
                <input
                  type="radio"
                  id="ageRestrictionYes"
                  name="ageRestriction"
                  className="form-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ageRestrictionYes" className="radio-label">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="ageRestrictionNo"
                  name="ageRestriction"
                  className="form-radio"
                  onChange={handleChange}
                />
                <label htmlFor="ageRestrictionNo" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <button className="create-button" onClick={handleCreateComic}>
              Create
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};
