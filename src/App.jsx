import './App.css'
import { useState } from 'react';

function App() {

  let [ textTitle, setTextTitle ] = useState(['Recommend mens coat', 'Recommend childruns coat', 'Recommend react course']); 
  let [ thumbsUp, setThumbsUp ] = useState([0, 0, 0]);
  let [ modal, setModal ] = useState(false);

/*   function handleThumb() {
    setThumbsUp( [thumbsUp + 1] );
  } */

  function handleTitle() {
    const copyTitel = [...textTitle];
    copyTitel[0] = 'Recommend womens coat';
    setTextTitle(copyTitel);
  }

  function handleSorting() {
    const sortAlphabet = [...textTitle];
    const sorting = sortAlphabet.sort();
    setTextTitle(sorting);
  }

  return (
  <div className="App">
    <div className="black-nav">
      <h4>ReactBlog</h4>
    </div>

    <button onClick={handleSorting}>sort alphabetically</button>
    <button onClick={handleTitle}>Change title</button>
{/* 
      <div className = "list"> 
        <h4>{ textTitle[0] } <span onClick={handleThumb}>👍</span> {thumbsUp} </h4>
        <p>2/17</p>
    </div>
    <div className = "list"> 
        <h4>{ textTitle[1] }</h4>
        <p>2/17</p>
    </div>
    <div className = "list"> 
        <h4 onClick={() => {setModal(!modal)}}>{ textTitle[2] }</h4>
        <p>2/17</p>
    </div>
 */}

    {
      textTitle.map(function(btn, i) {
        return (
          <div className="list" key={i}> 
          <h4 onClick={() => {setModal(!modal)}}>{ textTitle[i] }
            <span onClick={ () => {
              let copy = [...thumbsUp];
              copy[i] = copy[i] + 1;
              setThumbsUp(copy)
            }}>👍</span> {thumbsUp[i]} </h4>
          <p>2/17</p>
          </div>
        );
      })
    }
    
    {
      modal ? <Modal textTitle={textTitle} color={"skyblue"} /> : null
    }
  </div>
  );
}

function Modal(props) {
  return(
    <div className = "modal" style={{background: props.color}}> 
      <h4>{props.textTitle[0]}</h4>
      <p>Date</p>
      <p>Description</p>
      <button>edit</button>
    </div>

  );
}

export default App
