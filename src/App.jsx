import { use } from "react";
import { useState } from "react"

function App() {
  const [activeArticles, setActiveArticeles] = useState([]);
  const [articleTitle, setArtcleTitle] = useState("");
  const [articleAuthor, setArrticleAuthor] = useState("");

  const handleArticleForm = (event) => {
    event.preventDefault();

    const newArticle = {
      id: Date.now(),
      title: articleTitle,
      author: articleAuthor
    };

    const newArray = [...activeArticles, newArticle];

    setActiveArticeles(newArray);

    setArtcleTitle("");
    setArrticleAuthor("");
  };

  const removElem = (toRemove) => {
    const newArray1 = activeArticles.filter((curElem) => curElem.id !== toRemove.id)
    setActiveArticeles(newArray1);
  }

  return (
    <>
      <h2>I nostri articoli</h2>
      {activeArticles.length > 0 ? (
        <div>
          {
            activeArticles.map((curElem) => (<div key={curElem.id}>
              <h4>{curElem.title}</h4>
              <p>{curElem.author}</p>
              <button onClick={() => { removElem(curElem) }}>delete</button>
            </div>
            ))
          }
        </div>
      ) : (
        <p>nessun articolo inserito</p>
      )
      }

      <h2>Aggiungi articolo</h2>
      <form action="" onSubmit={handleArticleForm}>
        <label htmlFor="Titolo">inserire il titolo</label>
        <input id="Titolo" type="text" value={articleTitle} onChange={(event) => {
          setArtcleTitle(event.target.value) }} />
          <button type="submit">Salva</button>
      </form>
    </>
  )
}

export default App
