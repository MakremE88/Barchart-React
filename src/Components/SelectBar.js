import React, {useState} from "react";

const SelectBar = () => {
    let div = [];
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [selecting, setSelecting] = useState(false);
  
    let beginSelection = i => {
      setSelecting(true);
      setStart(i);
      updateSelection(i);
    };
  
    function endSelection(i = end) {
        setSelecting(false);
        updateSelection(i);
    }
  
    let updateSelection = i => {
      if (selecting) {
        setEnd(i);
      }
    };
    for (let i = 0; i < 31; i++) {
      let a = (
        <span
          key={i}
          className={
            (end <= i && i <= start) || (start <= i && i <= end) ? "selected" : ""
          }
          onMouseDown={() => beginSelection(i)}
          onMouseUp={() => endSelection(i)}
          onMouseMove={() => updateSelection(i)}
        >
          {i}
        </span>
      );
      div.push(a);
    }
  

    return div;
}

export default SelectBar