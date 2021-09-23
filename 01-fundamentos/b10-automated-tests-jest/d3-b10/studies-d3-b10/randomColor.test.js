function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});