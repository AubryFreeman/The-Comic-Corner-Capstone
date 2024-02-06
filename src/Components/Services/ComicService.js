export const getAllComics = () => {
  return fetch("http://localhost:8088/comics").then((res) => res.json());
};

export const getComicById = (comicId) => {
  return fetch(`http://localhost:8088/comics/${comicId}`).then((res) =>
    res.json()
  );
};

export const getComicDetails = (comicId) => {
  return fetch(
    `http://localhost:8088/comics/${comicId}?_expand=category&_expand=genre&_expand=artStyle&_expand=language`
  ).then((res) => res.json());
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

export const saveComic = (comic) => {
  return fetch("http://localhost:8088/comics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comic),
  });
};

export const deleteComic = (comicId) => {
  return fetch(`http://localhost:8088/comics/${comicId}`, {
    method: "DELETE",
  });
};

export const editComic = (comicId, updatedComic) => {
  return fetch(`http://localhost:8088/comics/${comicId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedComic),
  });
};

// export const addNewComicCategory = (categoryObject) => {
//   return fetch("http://localhost:8088/categories", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(categoryObject),
//   });
// };

// export const addNewComicGenre = (genreObject) => {
//   return fetch("http://localhost:8088/genres", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(genreObject),
//   });
// };

// export const addNewComicArtStyle = (artStyleObject) => {
//   return fetch("http://localhost:8088/artstyles", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(artStyleObject),
//   });
// };

// export const addNewComicLanguage = (languageObject) => {
//   return fetch("http://localhost:8088/languages", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(languageObject),
//   });
// };
