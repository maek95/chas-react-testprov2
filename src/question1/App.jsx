// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

import { useState } from "react";

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

function AddComment({handleAddComment}) {
 
  const [comment, setComment] = useState('');


  return (
    <div>
      <input type="text" placeholder="Add Text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => {
        setComment('')
        handleAddComment(comment)
      }}>Add Comment</button>
    </div>
  )
}

function CommentsItems({comments, handleDeleteComment}) {
  console.log("commentsitems: ", comments);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li style={{color: "white"}} key={comment.id}><b>{comment.title}</b>
          <button onClick={() => {
            handleDeleteComment(comment)
          }}>Delete</button>
          </li>
        ))}

      </ul>
    </div>
  )
}
let nextId = 0;

function App() {

  const [comments, setComments] = useState([]);

  function handleAddComment(title) {
    setComments([...comments, {
      id: Date.now(),
      title: title,
    }
    ])
  }
  console.log(comments);

  function handleDeleteComment(clickedComment) {
    const updatedComments = comments.filter((comment) => {
      return comment.id !== clickedComment.id;
    })
    
    setComments(updatedComments)
  }

  return (<div>

    <AddComment handleAddComment={handleAddComment}></AddComment>

    <CommentsItems handleDeleteComment={handleDeleteComment} comments={comments}></CommentsItems>

  </div>);
}

export default App;
