const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <h1 className="box-title">{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="Medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
