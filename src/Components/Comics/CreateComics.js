import React, { useEffect, useState } from "react";
import "./CreateComic.css";
import {
  addNewComicArtStyle,
  addNewComicCategory,
  addNewComicGenre,
  addNewComicLanguage,
  getAllArtStyles,
  getAllCategories,
  getAllGenres,
  getAllLanguages,
  saveComic,
} from "../Services/ComicService.js";
import { useParams } from "react-router-dom";

export const CreateComics = () => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [artStyleArray, setArtStyleArray] = useState([]);
  const [languageArray, setLanguageArray] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedArtStyle, setSelectedArtStyle] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [createdComicId, setCreatedComicId] = useState(0);

  const { comicId } = useParams();

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

  useEffect(() => {
    if (createdComicId !== 0) {
      selectedCategory.map((category) => {
        const comicCategoryObject = {
          comicId: createdComicId,
          categoryId: category.id,
        };
        return addNewComicCategory(comicCategoryObject);
      });
    }
  }, [createdComicId, selectedCategory]);

  useEffect(() => {
    if (createdComicId !== 0) {
      selectedGenre.map((genre) => {
        const comicGenreObject = {
          comicId: createdComicId,
          genreId: genre.id,
        };
        return addNewComicGenre(comicGenreObject);
      });
    }
  }, [createdComicId, selectedGenre]);

  useEffect(() => {
    if (createdComicId !== 0) {
      selectedArtStyle.map((artStyle) => {
        const comicArtStyleObject = {
          comicId: createdComicId,
          artStyleId: artStyle.id,
        };
        return addNewComicArtStyle(comicArtStyleObject);
      });
    }
  }, [createdComicId, selectedArtStyle]);

  useEffect(() => {
    if (createdComicId !== 0) {
      selectedLanguage.map((language) => {
        const comicLanguageObject = {
          comicId: createdComicId,
          languageId: language.id,
        };
        return addNewComicLanguage(comicLanguageObject);
      });
    }
  }, [createdComicId, selectedLanguage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevArray) => {
      if (prevArray.includes(category)) {
        return prevArray.filter((choice) => choice !== category);
      } else {
        return [...prevArray, category];
      }
    });
  };
  const handleGenreChange = (genre) => {
    setSelectedGenre((prevArray) => {
      if (prevArray.includes(genre)) {
        return prevArray.filter((choice) => choice !== genre);
      } else {
        return [...prevArray, genre];
      }
    });
  };
  const handleArtStyleChange = (artStyle) => {
    setSelectedArtStyle((prevArray) => {
      if (prevArray.includes(artStyle)) {
        return prevArray.filter((choice) => choice !== artStyle);
      } else {
        return [...prevArray, artStyle];
      }
    });
  };
  const handleLanguageChange = (language) => {
    setSelectedLanguage((prevArray) => {
      if (prevArray.includes(language)) {
        return prevArray.filter((choice) => choice !== language);
      } else {
        return [...prevArray, language];
      }
    });
  };

  const handleCreateButtonCLick = async (event) => {
    event.preventDefault();
    const comicObject = {
      categoryId: selectedCategory,
      genreId: selectedGenre,
      artStyleId: selectedArtStyle,
      languageId: selectedLanguage,
      comicId: +comicId,
    };
    await saveComic(comicObject).then((res) => {
      setCreatedComicId(res.id);
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
              ></input>
            </div>
          </fieldset>
          <fieldset className="category">
            <div className="category-list">
              <h3>Category</h3>
              {categoryArray.map((category) => (
                <div key={category.id} className="category-option">
                  <input
                    type="checkbox"
                    name="Category"
                    value={category.id}
                    onChange={() => {
                      handleCategoryChange(category);
                    }}
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
                    type="checkbox"
                    name="Genre"
                    value={genre.id}
                    onChange={() => {
                      handleGenreChange(genre);
                    }}
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
                    type="checkbox"
                    name="Art Style"
                    value={artStyle.id}
                    onChange={() => {
                      handleArtStyleChange(artStyle);
                    }}
                  />
                  <label htmlFor={`category${artStyle.id}`}>
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
                    type="checkbox"
                    name="Language"
                    value={language.id}
                    onChange={() => {
                      handleLanguageChange(language);
                    }}
                  />
                  <label htmlFor={`category${language.id}`}>
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
              ></input>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Age Restriction</label>
              <div>
                <input
                  type="radio"
                  id="ageRestrictionYes"
                  name="ageRestriction"
                  value="yes"
                  className="form-radio"
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
                  value="no"
                  className="form-radio"
                />
                <label htmlFor="ageRestrictionNo" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <button className="create-button" onClick={handleCreateButtonCLick}>
              Create
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};
