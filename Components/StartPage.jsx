const StartPage = ({ buttonHandler }) => {
  return (
    <div className="startpage-container">
      <h1>Welcome to Stumped Ya!!</h1>
      <p className="description">
        Feeling smart today? Or do you just want to have some conversation
        starters at your next hang out? Beef up your random knowledge with this
        quick 5 question quiz. Hit start quiz below!
      </p>
      <button className="buttonStyle" onClick={buttonHandler}>
        Start quiz
      </button>
      <p className="footer">Made using the 🧠 of Will Lee</p>
      <p>© 2023 Will Lee Design</p>
    </div>
  );
};

export default StartPage;
