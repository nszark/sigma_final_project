import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

function Testimonials(props) {
  let users = [
    {
      id: 227,
      src: "/src/img/man.jpg",
      title: "Louis Saville",
      work: "/ CEO at Google inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.`,
    },
    {
      id: 228,
      src: "/src/img/woman.jpg",
      title: "Rekha Varadwaz ",
      work: "/ Manager at Nike inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.`,
    },
    {
      id: 229,
      src: "/src/img/woman.jpg",
      title: "Olena Romanivska",
      work: " / PM at Google inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 230,
      src: "/src/img/man.jpg",
      title: "Oleksandr Istambulov",
      work: "/ CEO at Google inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 231,
      src: "/src/img/man.jpg",
      title: "Mykola Semkiv",
      work: "/ CEO at Google inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
    {
      id: 232,
      src: "/src/img/woman.jpg",
      title: "Mariia Dombrovska",
      work: "/  Manager at Nike inc",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.`,
    },
  ];

function Cards({ selectedItem }) {
  return (
    // Wrapping card content inside a div with class "cards_wrap"
    <div className="cards_wrap">
      <div className="testimonials_card">
        <div>
          <img src={selectedItem.src} alt="" /> {/* Displaying image of the selected item */}
        </div>
        <div className="testimonials_card__description-block">
          <h6>
            {selectedItem.title} <span>{selectedItem.work}</span> {/* Displaying title and work of the selected item */}
          </h6>
          <div>{selectedItem.description}</div> {/* Displaying description of the selected item */}
        </div>
      </div>
    </div>
  );
}

  return (
    // Wrapping testimonials content inside a div with class "testimonials"
    <div className="testimonials">
      <div className="testimonials__wrapper _container">
        <section>TESTIMONIALS</section> {/* Displaying testimonials section */}
        <h2>Client says about us</h2> {/* Displaying heading */}
        <div className="testimonials__cards-block">
          <div className="button_block">
            <button className="prev_button">
              <img src="/src/icon/arrow.svg" alt="vector" /> {/* Displaying previous button */}
            </button>
            <button className="next_button">
              <img src="/src/icon/arrow.svg" alt="vector" /> {/* Displaying next button */}
            </button>
          </div>
          <Swiper
            className="swiper-wrap"
            modules={[Navigation, EffectCube]} // Adding required Swiper modules
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup={2}
            speed={1000}
            loop={true}
            navigation={{
              prevEl: ".prev_button",
              nextEl: ".next_button",
            }} // Adding navigation options
          >
            {/* Mapping over users array to display all cards */}
            {users.map((item, index) => {
              return (
                <SwiperSlide key={`${item}_${index}`}>
                  <Cards selectedItem={item} /> {/* Displaying card of the selected item */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
