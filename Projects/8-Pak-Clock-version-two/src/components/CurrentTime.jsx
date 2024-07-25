function CurrentTime() {
  let s = new Date();
  return (
    <p className="lead">
      This is the currrent time: ${s.toLocaleDateString()} -{" "}
      {s.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
