import './App.css'
import { useState } from 'react';

function App() {

  let [ textTitle, setTextTitle ] = useState(['Recommend mens coat', 'Recommend childruns coat', 'Recommend react course']); 
  let [ thumbsUp, setThumbsUp ] = useState([0, 0, 0]);
  let [ modal, setModal ] = useState(false);
  let [ title, setTitle ] = useState(0);
  let [ input, setInput ] = useState("");

    function handlePostBlog () {
      const addBlog = [...textTitle];
      addBlog.unshift(input); 
      setTextTitle(addBlog);
    }

  function handleSorting() {
    const sortAlphabet = [...textTitle];
    const sorting = sortAlphabet.sort();
    setTextTitle(sorting);
  }

  return (
  <div className="App">
    <div className="black-nav">
      <h4>Yeong's Blog</h4>
    </div>

    <button onClick={handleSorting}>sort alphabetically</button>


    {
      textTitle.map(function(btn, i) {
        return (
          <div className="list" key={i}> 
          <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{ textTitle[i] }
            <span onClick={ (e) => {
              e.stopPropagation();
              let copy = [...thumbsUp];
              copy[i] = copy[i] + 1;
              setThumbsUp(copy)
            }}>👍</span> {thumbsUp[i]} </h4>
            <button onClick={() => {      
              let deleteText = [...textTitle];
              deleteText.splice(i,1);
              setTextTitle(deleteText);
              }}>delete</button>
          <p>2/17</p>
          </div>
        );
      })
    }

   <input onChange={(e)=>{setInput(e.target.value); console.log(input)}} type="text" />
   <button onClick={handlePostBlog}>add</button>

    
    {
      modal ? <Modal title={title} textTitle={textTitle} color={"light grey"} /> : null
    }
  </div>
  );
}

function Modal(props) {
  return(
    <div className = "modal" style={{background: props.color}}> 
      <h4>{props.textTitle[props.title]}</h4>
      <p>Date</p>
      <p>Description</p>
      <button >edit</button>
    </div>

  );
}

export default App
