function Hello() {
  let myName = "Usman";

  let fullName = () => {
    return "Usman Ali";
  };
  return <h3>This is the future speaking. I am learner {fullName()}</h3>;
}

export default Hello;
