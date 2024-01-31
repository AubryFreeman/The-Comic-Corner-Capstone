export const getAllComics = () => {
  return fetch("http://localhost:8088/comics").then((res) => res.json());
};

export const getComicDetails = (comicId) => {
  return fetch(`http://localhost:8088/comics/${comicId}`).then((res) =>
    res.json()
  );
};

// export const getComicDetails = (comicId) => {
//   return fetch(
//     `http://localhost:8088/comics/${comicId}?_expand=category&_expand=genre&_expand=artStyle&_expand=language`
//   ).then((res) => res.json());
// };
