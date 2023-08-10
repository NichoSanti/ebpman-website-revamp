import "./index.css";

export default function HomePage() {
  const teamMembers = [
    {
      name: "Milton Santiago",
      role: "CEO",
      image: "src/assets/images/empty-user.png",
    },
    {
      name: "Nilda Santiago",
      role: "CFO",
      image: "src/assets/images/empty-user.png",
    },
    {
      name: "Milton Santiago",
      role: "Engineer",
      image: "src/assets/images/empty-user.png",
    },
  ];

  const testimonials = [
    {
      companyName: "Company",
      quote: "Amazing",
      image: "src/assets/images/empty-user.png",
    },
    {
      companyName: "Company",
      quote: "Amazing",
      image: "src/assets/images/empty-user.png",
    },
    {
      companyName: "Company",
      quote: "Amazing",
      image: "src/assets/images/empty-user.png",
    },
  ];

  return (
    <div className="home-wrapper">
      <header>
        <h1>Ebpman Tech Reviews</h1>
        <small>Technology Made Simple</small>
        <div className="important-links">
          <a className="social-link" href="https://www.youtube.com/@ebpman">
            YouTube
          </a>
          <a className="social-link" href="https://twitter.com/EBPMANReview">
            Twitter
          </a>
          <a
            className="social-link"
            href="https://www.tiktok.com/@ebpmanreviews?lang=en"
          >
            TikTok
          </a>
          <a className="contact-form" href="mailto:example@example.com">
            Contact Us
          </a>
        </div>
      </header>
      <main>
        <span className="intro">
          <h2 className="h4">Who are we?</h2>{" "}
          <p>
            Integer id posuere velit. Fusce a posue8utG7LJhQgQre neque, sed
            blandit massa. Cras et turpis sed lectus aliquam pretium eu sed
            ante. Ut malesuada molestie leo, vitae feugiat sem efficitur quis.
            Ut molestie iaculis quam, at hendrerit tellus vehicula a. Aliquam
            blandit volutpat
          </p>
          <h2 className="h4">What do we do?</h2>{" "}
          <p>
            Integer id posuere velit. Fusce a posue8utG7LJhQgQre neque, sed
            blandit massa. Cras et turpis sed lectus aliquam pretium eu sed
            ante. Ut malesuada molestie leo, vitae feugiat sem efficitur quis.
            Ut molestie iaculis quam, at hendrerit tellus vehicula a. Aliquam
            blandit volutpat
          </p>
        </span>

        <div className="team-header">
          <h2 className="h4">Our Team</h2>
        </div>
        <div className="team-members">
          {teamMembers.map(function (member) {
            return (
              <figure
                className="team-member"
                key={`${member.name}-${member.role}`}
              >
                <img
                  className="team-member-photo"
                  src={member.image}
                  alt={member.name}
                />
                <figcaption>
                  <h3 className="h6">{member.name}</h3>
                  <small>{member.role}</small>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </main>
      <aside className="video-section">
        <a className="subscribe-button" href="https://www.youtube.com/@ebpman">
          subscribe to ebpman tech reviews
        </a>
        <div className="youtube-video-wrapper">
          <figure className="youtube-video">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
        <div className="testimonials-header">
          <h3>Testimonials</h3>
        </div>
        <div className="testimonials">
          {testimonials.map(function (testimonial) {
            return (
              <figure
                className="testimonial"
                key={`${testimonial.name}-${testimonial.role}`}
              >
                <figcaption>
                  <h3 className="h6">{testimonial.companyName}</h3>
                </figcaption>
                <img
                  className="company-logo"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </figure>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
