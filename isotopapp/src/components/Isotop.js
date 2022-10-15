import React, { useState } from "react";
import Data from "./Mock/Main";

const Isotop = () => {
  const [items, setItem] = useState(Data);
  const [search, setSearch] = useState("");
  const FilterJS = (name) => {
    const update = Data.filter((index) => index.name === name);
    setItem(update);
    console.log(update);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alingItems: "center",
          gap: 25,
          margin: "30px 0px",
        }}
      >
        <button
          style={{
            padding: "10px 12px",
            border: "none",
            borderRadius: 10,
            color: "blue",
            backgroundColor: "lightblue",
          }}
          onClick={() => setItem(Data)}
        >
          All
        </button>
        <button
          style={{
            padding: "10px 12px",
            border: "none",
            borderRadius: 10,
            color: "blue",
            backgroundColor: "lightblue",
          }}
          onClick={() => FilterJS("Stomatoloq")}
        >
          hekim
        </button>
        <button
          style={{
            padding: "10px 12px",
            border: "none",
            borderRadius: 10,
            color: "blue",
            backgroundColor: "lightblue",
          }}
          onClick={() => FilterJS("USM-həkimi")}
        >
          cerrah
        </button>
        <button
          style={{
            padding: "10px 12px",
            border: "none",
            borderRadius: 10,
            color: "blue",
            backgroundColor: "lightblue",
          }}
          onClick={() => FilterJS("Həkim-laborant")}
        >
          laborant
        </button>
      </div>

      <div className="container">
        <div className="row">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="enter the name"
          />
          {items
            .filter((el) => {
              if (search === " ") {
                return el;
              } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
                return el;
              }
            })
            .map((el, id) => (
              <div className="col-lg-12 mt-5" key={id}>
                <div className="card_item">
                  <div className="card_photo">
                    <img src={el.images} />
                  </div>
                  <div className="texts">
                    <p>
                      <b>{el.name}</b>
                    </p>
                    <div className="flex_items">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cursor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                        </svg>
                      </div>
                      <div>
                        <p>{el.adress}</p>
                      </div>
                    </div>
                    <p>{el.title}</p>
                  </div>
                </div>
                {/* <div className="oclock">
                  <span>{el.time}</span>
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Isotop;
