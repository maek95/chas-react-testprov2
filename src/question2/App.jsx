// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from "react";

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

function EmailItem({email, handleUpdateEmail}) {
  const [hasEdited, setHasEdited] = useState(false);

  const [input, setInput] = useState("")

  return (
    <div style={{display:"flex"}}>
      <p>{email}</p>
       {hasEdited ? (<div>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
        }}/>
        <button onClick={() => {
        setHasEdited(false)
        handleUpdateEmail(input)
       }}>Save</button>
       </div>) :  (<button onClick={() => {
        setHasEdited(true)
       }}>Edit</button>)}
    </div>
  )
}

function App() {

  const [email, setEmail] = useState("marcuschas@email.se");

  function handleUpdateEmail(newEmail) {
    setEmail(newEmail)
  }

  return (<div>
    <EmailItem handleUpdateEmail={handleUpdateEmail} email={email}></EmailItem>
  </div>);
}

export default App;
