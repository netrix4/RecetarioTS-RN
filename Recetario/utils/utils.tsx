const getRandomColor = () => {
    const colorPallett = ["#10A5B2", "#B7E3FA", "#F8F6F1", "#EDDFA6", "#F7A173"];
    const result = colorPallett[Math.floor(Math.random() * (4 - 0))];
    return result;
  };
export {getRandomColor}