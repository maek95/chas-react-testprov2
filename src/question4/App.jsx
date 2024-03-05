// 4. Dela Favoritfärg med Context 3p
// Skapa en applikation som använder React Context för att hantera och
// dela en användares val av favoritfärg mellan komponenter.
// Applikationen ska bestå av två huvudkomponenter: ColorSelector och ColorDisplay.

import { useContext } from "react";
import { ColorContext, ColorProvider, useColors } from "./ColorContext";

// Steg 1: Skapa en ColorContext med React Context. Denna context ska innehålla
// användarens valda favoritfärg.

// Steg 2: ColorSelector-komponenten ska innehålla en dropdown-lista (select)
// där användaren kan välja en färg. När en färg väljs, uppdatera ColorContext
// med det nya värdet.

// Steg 3: ColorDisplay-komponenten ska använda ColorContext för att visa den valda
// favoritfärgen. Den ska lyssna på ändringar i context och uppdatera visningen
// automatiskt när en ny färg väljs.

// Genom att använda React Context kan du skapa en tät koppling mellan
// ColorSelector och ColorDisplay utan att direkt skicka props eller använda callbacks.

function ColorSelector() {

  /* useColors(); */
  const {state, dispatch} = useContext(ColorContext)

  return (
  
    <div className="color">
    {/*   <p> selected color: {selectedColor}</p> */}
      <label htmlFor="colorSelect">Choose a color</label>
      <select onChange={(e) => {
        dispatch({
          type: "selectFavourite",
          color: e.target.value
        }) // dont need to define value
      }} name="color" id="colorSelect" required>
        <option value="">Please choose a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  )
}

function ColorDisplay() {
  const {state, dispatch} = useContext(ColorContext)

  return (<div>
    <p>selected color: {state.color}</p>
  </div>)
}

function App() {

  return (<div>

    <ColorProvider>
      <ColorDisplay></ColorDisplay>
      <ColorSelector></ColorSelector>
    </ColorProvider>
    

  </div>);
}

export default App;
