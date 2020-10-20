import movies from "../Components/movies";

export const filterMovieName = (item) => movies.filter(movies => movies.title.toLocaleLowerCase().includes(item.toLowerCase()));
