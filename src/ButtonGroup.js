import React from "react";
import {store} from "./store";
import {setTechnology} from "./actions";

const ButtonGroup = ({ techs }) => {
  return (
    <div className="actions">
      {
        techs.map((el, idx) => (
          <button
            data-tech={el}
            key={`btn-${idx}`}
            className="hello-btn"
            onClick={() => store.dispatch(setTechnology(el))}
          >
            {el}
          </button>
        ))
      }
    </div>
  );
};

export default ButtonGroup;
