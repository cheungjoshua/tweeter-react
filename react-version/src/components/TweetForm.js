function TweetForm() {
  const placeHolder = "What are you humming about?";

  return (
    <section className="newtweet">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        method="post"
        action="/tweets"
        className="newtweet__form"
      >
        <textarea
          className="form__textarea"
          name="text"
          placeholder={placeHolder}
        ></textarea>
        <input
          onClick={(event) => {
            event.preventDefault();
          }}
          type="submit"
          value="Tweet"
          className="form__input"
        />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
