function ModernInterior() {
  return (
    // The outermost div represents the whole modern interior design section and has an id of "home".
    <div id="home" className="modern-interior">
      {/* The modern-interior__wrapper div contains the left and right sections of the design. */}
      <div className="modern-interior__wrapper _container">
        {/* The modern-interior__left div contains the heading, description, and contact button of the design. */}
        <div className="modern-interior__left">
          <span>MODERN INTERIOR</span>
          <h1>Create Your Interior Design.</h1>
          <div>
            {/* A placeholder text for the design description. */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa. Donec mollis volutpat est, id volutpat elit. Suspendisse varius nec arcu vitae sollicitudin. Mauris vitae scelerisque lorem, et lacinia ligula. Duis libero mi, lobortis nec maximus quis, consectetur viverra sapien. Nam in dolor suscipit, auctor dolor ac, blandit risus. Integer porta faucibus augue.
          </div>
          {/* The section containing the contact button. */}
          <section>
            <button className="modern-interior-button">CONTACT</button>
          </section>
        </div>
        {/* The modern-interior__right div contains an image of the interior design. */}
        <div className="modern-interior__right">
          <img src="src/img/modern_interior.jpg" alt="" />
          {/* A placeholder div for any additional elements in the right section. */}
          <div></div>
        </div>
      </div>
      {/* The modern-interior__design_element_ div contains an image of a design element. */}
      <div className="modern-interior__design_element_">
        <img src="/src/img/design_element_1.png" alt="design_element_" />
      </div>
    </div>
  );
}

export default ModernInterior;
