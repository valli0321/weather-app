export const getWeather = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7aba7015e68a4f639c5515b77f96e4e&units=metric`
  );
};
