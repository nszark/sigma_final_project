import React, { useState } from "react";

function WhatWeDo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const handleclick1 = () => {
    setCount1(count1 + 1);
    if (count1 === 0) {
      setCount2(0);
      setCount3(0);
      setCount4(0);
    }
  };
  const handleclick2 = () => {
    setCount2(count2 + 1);
    if (count2 === 0) {
      setCount1(0);
      setCount3(0);
      setCount4(0);
    }
  };
  const handleclick3 = () => {
    setCount3(count3 + 1);
    if (count3 === 0) {
      setCount2(0);
      setCount1(0);
      setCount4(0);
    }
  };
  const handleclick4 = () => {
    setCount4(count4 + 1);
    if (count4 === 0) {
      setCount2(0);
      setCount1(0);
      setCount3(0);
    }
  };

  let json = [
    {
      id: 123,
      "interior_design": [
        {
          "src": "/src/icon/what_we_do_1.png",
          "title":
            "Interior Design 1",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_1.png",
          "title": "Interior Design 2",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_1.png",
          "title": "Interior Design 3",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_1.png",
          "title": "Interior Design 4",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
      ],
    },
    {
      "id": 124,
      "architecture": [
        {
          "src": "/src/icon/what_we_do_2.png",
          "title": "Architecture 1",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_2.png",
          "title": "Architecture 2",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_2.png",
          "title": "Architecture 3",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_2.png",
          "title": "Architecture 4",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_2.png",
          "title": "Architecture 5",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
      ],
    },

    {
      "id": 125,
      "planning": [
        {
          "src": "/src/icon/what_we_do_3.png",
          "title": "Planning 1",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_3.png",
          "title": "Planning 2",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        {
          "src": "/src/icon/what_we_do_3.png",
          "title": "Planning 3",
          "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa.`,
        },
        
      ],
    },
  ];
  
  let lastItems = json.map(function (item) {
    let key = Object.keys(item)[1];
    let values = item[key];
    let lastItem = values[values.length - 1];
    return lastItem;
  });

  return (
    <div id="services" className="what-we-do">
      <div className="what-we-do__wrapper _container">
        <div className="what-we-do__wrap">
          <div className="pre-title">WHAT WE DO</div>
          <div className="title">Our Service</div>
          <div className="what-we-do__buttom-block">
            <button
              onClick={() => handleclick1()}
              className={count1 === 1 ? "what-we-do-button-active" : "what-we-do-button"}
            >
              ALL
            </button>
            <button
              onClick={() => handleclick2()}
              className={count2 === 1 ? "what-we-do-button-active" : "what-we-do-button"}
            >
              INTERIOR DESIGN
            </button>
            <button
              onClick={() => handleclick3()}
              className={count3 === 1 ? "what-we-do-button-active" : "what-we-do-button"}
            >
              ARCHITECTURE
            </button>
            <button
              onClick={() => handleclick4()}
              className={count4 === 1 ? "what-we-do-button-active" : "what-we-do-button"}
            >
              PLANNING
            </button>
          </div>
        </div>
        {count1 === 0 &&
         count2 === 0 &&
         count3 === 0 &&
         count4 === 0 && (
          <div className="what-we-do__cards-block-wh">
            {
              <>
                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[0].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[0].title}</div>
                    <div className="card_description-wh">{lastItems[0].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card">
                  <div className="card-img">
                    <img src={lastItems[1].src} alt="value.src" />
                  </div>
                  <div className="card-block-right">
                    <div className="card_title">{lastItems[1].title}</div>
                    <div className="card_description">{lastItems[1].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[2].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[2].title}</div>
                    <div className="card_description-wh">{lastItems[2].description}</div>
                  </div>
                </div>
              </>
            }
          </div>
        )}

        {count1 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {
              <>
                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[0].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[0].title}</div>
                    <div className="card_description-wh">{lastItems[0].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card">
                  <div className="card-img">
                    <img src={lastItems[1].src} alt="value.src" />
                  </div>
                  <div className="card-block-right">
                    <div className="card_title">{lastItems[1].title}</div>
                    <div className="card_description">{lastItems[1].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[2].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[2].title}</div>
                    <div className="card_description-wh">{lastItems[2].description}</div>
                  </div>
                </div>
              </>
            }
          </div>
        )}
        {count2 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {json
              .map((value) => value.interior_design)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card-wh">
                      <div className="card-img-wh">
                        <img src={value.src} alt="value.src" />
                      </div>
                      <div className="card-block-right-wh">
                        <div className="card_title-wh">{value.title}</div>
                        <div className="card_description-wh">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
        {count3 > 0 && (
          <div className="what-we-do__cards-block">
            {json
              .map((value) => value.architecture)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card">
                      <div className="card-img">
                        <img src={value.src} alt="value.src" />
                      </div>
                      <div className="card-block-right">
                        <div className="card_title">{value.title}</div>
                        <div className="card_description">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
        {count4 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {json
              .map((value) => value.planning)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card-wh">
                      <div className="card-img-wh">
                        <img src={value.src} alt="value.src" />
                      </div>
                      <div className="card-block-right-wh">
                        <div className="card_title-wh">{value.title}</div>
                        <div className="card_description-wh">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>
      <div className="what-we-do__design_element_-img">
        <img src="/src/img/design_element_2.png" alt="" />
      </div>
    </div>
  );
}

export default WhatWeDo;
