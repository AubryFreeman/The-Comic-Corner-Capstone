import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editComic,
  getAllArtStyles,
  getAllCategories,
  getAllGenres,
  getAllLanguages,
  getComicById,
} from "../Services/ComicService.js";

export const EditComics = () => {
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
    ageRestriction: "No",
  });
  const [categoryArray, setCategoryArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [artStyleArray, setArtStyleArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getComicById(id).then((res) => {
      setComic(res);
    });
  }, [id]);

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

  const navigate = useNavigate();

  const handleEditComic = (event) => {
    const updatedComic = structuredClone(comic);
    switch (event.target.name) {
      case "title":
        updatedComic.title = event.target.value;
        setComic(updatedComic);
        break;
      case "author":
        updatedComic.author = event.target.value;
        setComic(updatedComic);
        break;
      case "description":
        updatedComic.description = event.target.value;
        setComic(updatedComic);
        break;
      case "category":
        updatedComic.categoryId = +event.target.value;
        setComic(updatedComic);
        break;
      case "genre":
        updatedComic.genreId = +event.target.value;
        setComic(updatedComic);
        break;
      case "artStyle":
        updatedComic.artStyleId = +event.target.value;
        setComic(updatedComic);
        break;
      case "language":
        updatedComic.languageId = +event.target.value;
        setComic(updatedComic);
        break;
      case "pageLength":
        updatedComic.pageLength = +event.target.value;
        setComic(updatedComic);
        break;
      case "ageRestriction":
        updatedComic.ageRestriction = event.target.value;
        setComic(updatedComic);
        break;

      default:
        break;
    }
  };

  const handleUpdateComic = (event) => {
    event.preventDefault();
    editComic(id, comic).then(() => {
      navigate(`/comics`);
    });
  };

  return (
    <form className="create text-light">
      <h2>Edit Comic</h2>
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
                value={comic.title}
                onChange={(event) => {
                  const comicCopy = { ...comic };
                  comicCopy.title = event.target.value;
                  setComic(comicCopy);
                }}
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
                value={comic.author}
                onChange={handleEditComic}
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
                value={comic.description}
                onChange={handleEditComic}
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
                    checked={category.id === comic.categoryId ? true : false}
                    onChange={handleEditComic}
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
                    checked={genre.id === comic.genreId ? true : false}
                    onChange={handleEditComic}
                  />
                  <label htmlFor={`genre${genre.id}`}>{genre.name}</label>
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
                    checked={artStyle.id === comic.artStyleId ? true : false}
                    onChange={handleEditComic}
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
                    checked={language.id === comic.languageId ? true : false}
                    onChange={handleEditComic}
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
                value={comic.pageLength}
                onChange={handleEditComic}
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
                  value="Yes"
                  checked={comic.ageRestriction === "Yes" ? true : false}
                  onChange={handleEditComic}
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
                  value="No"
                  checked={comic.ageRestriction === "No" ? true : false}
                  onChange={handleEditComic}
                />
                <label htmlFor="ageRestrictionNo" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <button className="edit-button" onClick={handleUpdateComic}>
              Update
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};
