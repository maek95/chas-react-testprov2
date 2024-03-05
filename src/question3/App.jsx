// 3. Välj Favoritfärg via Dropdown 3p
// Skapa två React-komponenter: ParentComponent och ChildComponent.
// ChildComponent ska innehålla en dropdown-lista (select i html) där
// användaren kan välja sin favoritfärg.
// När en färg väljs, skicka detta val till ParentComponent genom en callback-funktion.
// ParentComponent ska visa användarens valda favoritfärg.

import { useState } from "react";

// I ChildComponent, implementera ett <select>-element med några färgalternativ.
// Använd en callback-funktion för att meddela ParentComponent om användarens val.
// ParentComponent ska ta emot och visa det valda färgalternativet.

function ParentComponent({selectedColor}) {

  return (<div>
    <p>Selected Color: {selectedColor}</p>
  </div>)
}

function ChildComponent({handleSelectedColor}) {

  /* console.log(selectedColor); */

  return (
    <div className="color">
    {/*   <p> selected color: {selectedColor}</p> */}
      <label htmlFor="colorSelect">Choose a color</label>
      <select onChange={(e) => {
        handleSelectedColor(e.target.value) // dont need to define value
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

function App() {

  const [selectedColor, setSelectedColor] = useState('');

  function handleSelectedColor(color) {
    setSelectedColor(color);
  }

  return (<div>
    <ParentComponent selectedColor={selectedColor} ></ParentComponent>
    <ChildComponent handleSelectedColor={handleSelectedColor} ></ChildComponent>
  </div>);
}

export default App;
