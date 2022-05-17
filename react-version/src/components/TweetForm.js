import React from 'react'; //optional

function TweetForm(){
  return (
    <main className="container">
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" value="Tweet" className="form__input"/>
        <span className="form__counter">140</span>
      </form>
    </section>
    </main>
  );
}

export default TweetForm;