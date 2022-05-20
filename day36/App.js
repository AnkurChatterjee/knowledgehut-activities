import logo from './logo.svg';
import './App.css';
import { Comment } from './components/posts';

function App() {
  let comment1 = {
    text: 'An idea is the most dangerous bug in mmind',
    profile: {
      name: 'Leonardo Dicaprio',
      image: 'https://th.bing.com/th?q=Leonardo+DiCaprio+Cut+Face&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
    },
    likes: 12
  }
  let comment2 ={
    text: `One day the people who didn't believe in you, will tell everyone how they met you.`,
    profile: {
      name: 'Johny Depp',
      image: 'https://th.bing.com/th?q=Johnny+Depp+Model&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
    },
    likes: 56
  }
  return (
    <div>
      <Comment arg = {comment1}/>
      <Comment arg = {comment2}/>
    </div>
  );
}

export default App;
