import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function App() {

  const [facts,setFacts] = useState([]);

  // We use this to display cat facts when component gets mounted to the DOM.
  useEffect(() => {
    console.log("fetching")
    Axios.get("https://cat-fact.herokuapp.com/facts")
      .then(res => setFacts(res.data.all))
      .catch(err => console.log(err))
  },[])


  // We use this to get facts when user click the button.
  // const getFacts = () => {
  //   Axios.get("https://cat-fact.herokuapp.com/facts")
  //     .then(res => setFacts(res.data.all))
  //     .catch(err => console.log(err))
  // }
  return (
    <div >
      <button className="btn btn-primary" onClick={getFacts}>Click for Cat Facts</button>
      {
        facts.map((cat,i) => {
          return <p key={i}>{cat.text}</p>
        })
      }
    </div>
  );
}

export default App;
