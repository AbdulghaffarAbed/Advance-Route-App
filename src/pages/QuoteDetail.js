import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote'

import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const qouteData = DUMMY_QUOTES.find(quote=> quote.id === params.quoteId);

  if(!qouteData){
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={qouteData.text} author={qouteData.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
