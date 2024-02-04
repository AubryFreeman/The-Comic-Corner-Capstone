export const getAllComics = () => {
  return fetch("http://localhost:8088/comics").then((res) => res.json());
};

export const getComicDetails = (comicId) => {
  return fetch(`http://localhost:8088/comics/${comicId}`).then((res) =>
    res.json()
  );
};

export const getComicBooks = () => {
  return fetch(
    "http://localhost:8088/comics/?_expand=category&_expand=genre&_expand=artStyle&_expand=language"
  ).then((res) => res.json());
};

export const getAllCategories = () => {
  return fetch("http://localhost:8088/categories").then((res) => res.json());
};

export const getAllGenres = () => {
  return fetch("http://localhost:8088/genres").then((res) => res.json());
};

export const getAllArtStyles = () => {
  return fetch("http://localhost:8088/artstyles").then((res) => res.json());
};

export const getAllLanguages = () => {
  return fetch("http://localhost:8088/languages").then((res) => res.json());
};

export const saveComic = async (comicObject) => {
  const postOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(comicObject),
  };
  let res = await fetch("http://localhost:8088/comics", postOptions);
  let comic = res.json();
  return comic;
};

export const addNewComicCategory = (categoryObject) => {
  return fetch("http://localhost:8088/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryObject),
  });
};

export const addNewComicGenre = (genreObject) => {
  return fetch("http://localhost:8088/genres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(genreObject),
  });
};

export const addNewComicArtStyle = (artStyleObject) => {
  return fetch("http://localhost:8088/artstyles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artStyleObject),
  });
};

export const addNewComicLanguage = (languageObject) => {
  return fetch("http://localhost:8088/languages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(languageObject),
  });
};
