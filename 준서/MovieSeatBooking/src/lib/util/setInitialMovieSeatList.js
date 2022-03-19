import { movieSeatList } from "../constants.js";

const setInitialMovieSeatList = (selectedList) => {
  const selectedPosList = selectedList?.map((selected) => {
    const row = Math.floor(selected / 8);
    return {
      row,
      column: (selected - 8 * row) % 8,
    };
  });

  selectedPosList?.forEach((pos) => {
    movieSeatList[pos.row][pos.column] = 2;
  });
};

export default setInitialMovieSeatList;
