import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Articles';
import articles from './components/data.json';

function App() {
  const [upvote,setUpvote] = useState(true);
  
  useEffect(()=>{
    if(upvote === true)
    {
      articles.sort((a,b) => (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0))
    }
    else{
      articles.sort((a,b) => (b.time > a.time) ? 1 : ((a.time> b.time) ? -1 : 0))
    }
  },[]);

  return (
    <div className="App table-dark">
      <button className="btn btn-success" onClick={()=>setUpvote(false)}>sort by Upvote</button>
      <button className="btn btn-primary" onClick={()=>setUpvote(true)}>sort by Time</button>
      <Article articles={articles}/>
    </div>
  );
}

export default App;
