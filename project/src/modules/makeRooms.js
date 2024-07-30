const makeRooms = (lines) => {
  const rooms = [];

  for (let i = 0; i < lines.length; i++) {
    rooms.push(new Array(lines[i]));
  }

  return rooms;
};

export default makeRooms;
