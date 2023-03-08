import React from "react";

function SuccessfullyDone() {
  return (
    <div className="successfulyDone">
      <div className="successfulyDone__wrapper _container">
        {/* A heading for the section */}
        <h2>3000+ Completed Work <br/> That WE have Successfully Done</h2>
        
        {/* A block containing the statistics */}
        <div className="successfulyDone__card-block">
          {/* First card */}
          <div className="successfulyDone__card-block_card">
            <h3>980</h3>
            <section>Project</section>
          </div>
          
          {/* Spacers */}
          <div></div>
          <div></div>
          
          {/* Second card */}
          <div className="successfulyDone__card-block_card successfulyDone__card-block_card-even">
            <h3>520</h3>
            <section>Happy Clients</section>
          </div>
          
          {/* Spacers */}
          <div></div>
          <div></div>
          
          {/* Third card */}
          <div className="successfulyDone__card-block_card">
            <h3>330</h3>
            <section>Winners</section>
          </div>
          
          {/* Spacers */}
          <div></div>
          <div></div>
          
          {/* Fourth card */}
          <div className="successfulyDone__card-block_card successfulyDone__card-block_card-even">
            <h3>120</h3>
            <section>Recommended</section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfullyDone;