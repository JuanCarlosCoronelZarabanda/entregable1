import "./QuoteCard.css"

const QuoteCard = ({ quote, handleChangeQuote }) => {
  return (
    <section className="quoteCard">
      <article className="quoteCard__container">
        <h1 className="quoteCard__title">Infogalletas</h1>

        <h2 className="quoteCard__phrase">{quote.phrase}</h2>

        <button className="quoteCard__btn" onClick={handleChangeQuote}>
          Change
        </button>
      </article>

      <footer className="quoteCard__footer">Author: {quote.author}</footer>
    </section>
  );
};
export default QuoteCard;