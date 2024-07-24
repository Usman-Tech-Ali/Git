function Random() {
  let num = Math.floor(Math.random() * 10) + 1;

  return (
    <h1 style={{ "background-color": "yellow" }}>Random Number is {num}</h1>
  );
}
export default Random;
