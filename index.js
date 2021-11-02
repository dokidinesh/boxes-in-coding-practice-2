function Box(props) {
  // Write your code here.
  const { text, className } = props;
  return (
    <div className={className}>
      <p className="box-title">{text}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="app-container">
    <h1 className="app-heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
