import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editComic, getComicById } from "../Services/ComicService.js";

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
    ageRestriction: "",
  });
  const { comicId } = useParams();

  useEffect(() => {
    getComicById(comicId).then((res) => {
      setComic(res);
    });
  }, [comicId]);

  const navigate = useNavigate();

  const handleEditComic = (event) => {
    event.preventDefault();
    const updatedComic = {
      title: comic.title,
      author: comic.author,
      description: comic.description,
      userId: +comic.userId,
      categoryId: +comic.categoryId,
      genreId: +comic.genreId,
      artStyleId: +comic.artStyleId,
      languageId: +comic.languageId,
      pageLength: comic.pageLength,
      ageRestriction: comic.ageRestriction,
    };
    editComic(comicId, updatedComic).then(() => {
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
                onChange={(event) => {
                  const comicCopy = { ...comic };
                  comicCopy.author = event.target.value;
                  setComic(comicCopy);
                }}
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
                onChange={(event) => {
                  const comicCopy = { ...comic };
                  comicCopy.description = event.target.value;
                  setComic(comicCopy);
                }}
              ></input>
            </div>
          </fieldset>
          <fieldset className="category">
            <div className="category-list">
              <h3>Category</h3>
              <div className="category-option">
                <input
                  type="radio"
                  name="category"
                  value={comic.categoryId}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.categoryId = event.target.value;
                    setComic(comicCopy);
                  }}
                />
                <label htmlFor="category">category:</label>
              </div>
            </div>
          </fieldset>
          <fieldset className="genre">
            <div className="genre-list">
              <h3>Genre</h3>

              <div className="genre-option">
                <input
                  type="radio"
                  name="genre"
                  value={comic.genreId}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.genreId = event.target.value;
                    setComic(comicCopy);
                  }}
                />
                <label htmlFor="genre">Genre:</label>
              </div>
            </div>
          </fieldset>
          <fieldset className="artStyle">
            <div className="artStyle-list">
              <h3>Art Style</h3>

              <div className="artStyle-option">
                <input
                  type="radio"
                  name="artStyle"
                  value={comic.artStyleId}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.artStyleId = event.target.value;
                    setComic(comicCopy);
                  }}
                />
                <label htmlFor="artStyle">Art Style:</label>
              </div>
            </div>
          </fieldset>
          <fieldset className="language">
            <div className="language-list">
              <h3>Language</h3>

              <div className="language-option">
                <input
                  type="radio"
                  name="language"
                  value={comic.languageId}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.languageId = event.target.value;
                    setComic(comicCopy);
                  }}
                />
                <label htmlFor="language">Language:</label>
              </div>
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
                onChange={(event) => {
                  const comicCopy = { ...comic };
                  comicCopy.pageLength = event.target.value;
                  setComic(comicCopy);
                }}
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
                  value={comic.ageRestriction}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.ageRestriction = event.target.value;
                    setComic(comicCopy);
                  }}
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
                  value={comic.ageRestriction}
                  onChange={(event) => {
                    const comicCopy = { ...comic };
                    comicCopy.ageRestriction = event.target.value;
                    setComic(comicCopy);
                  }}
                />
                <label htmlFor="ageRestrictionNo" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <button className="edit-button" onClick={handleEditComic}>
              Update
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};
