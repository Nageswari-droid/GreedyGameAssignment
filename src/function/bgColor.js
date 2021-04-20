function bgColor() {
  const r = Math.floor(Math.random(220) * 250);
  const g = Math.floor(Math.random(220) * 250);
  const b = Math.floor(Math.random(220) * 250);

  return `rgb(${r}, ${g}, ${b})`;
}

export default bgColor;
