import "./ArticleTemplate.css";

export default function ArticlePage() {
  return (
    <div className="wrapper">
      <header></header>
      <main>
        <div className="article-header">
          <h1>Latest Product Review</h1>
          <p>
            <span className="date">31 July 2023</span>
          </p>
          <p>
            <div className="important-links">
              <a className="social-link">YouTube</a>
              <a className="social-link">Twitter</a>
            </div>
          </p>
        </div>
        <p>
          <span className="intro">
            {" "}
            Integer id posuere velit. Fusce a posuere neque, sed blandit massa.
            Cras et turpis sed lectus aliquam pretium eu sed ante. Ut malesuada
            molestie leo, vitae feugiat sem efficitur quis. Ut molestie iaculis
            quam, at hendrerit tellus vehicula a. Aliquam blandit volutpat
          </span>
        </p>
        <div className="youtube-video">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/GlgmoM7JREA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          <span className="main-body">
            {" "}
            Integer id posuere velit. Fusce a posuere neque, sed blandit massa.
            Cras et turpis sed lectus aliquam pretium eu sed ante. Ut malesuada
            molestie leo, vitae feugiat sem efficitur quis. Ut molestie iaculis
            quam, at hendrerit tellus vehicula a. Aliquam blandit volutpat
          </span>
        </p>

        <div className="article-section">
          <p>
            <h1 className="h4">section</h1>
            <span className="section-body">
              Integer id posuere velit. Fusce a posuere neque, sed blandit
              massa. Cras et turpis sed lectus aliquam pretium eu sed ante. Ut
              malesuada molestie leo, vitae feugiat sem efficitur quis. Ut
              molestie iaculis quam, at hendrerit tellus vehicula a. Aliquam
              blandit volutpat Integer id posuere velit. Fusce a posuere neque,
              sed blandit massa. Cras et turpis sed lectus aliquam pretium eu
              sed ante. Ut malesuada molestie leo, vitae feugiat sem efficitur
              quis. Ut molestie iaculis quam, at hendrerit tellus vehicula a.
              Aliquam blandit volutpat
            </span>
          </p>
          <div className="section-image">
            <figure>
              <img src="src/assets/images/earth.jpg" alt="description needed" />
              <figcaption>description</figcaption>
            </figure>
          </div>
        </div>

        <div className="article-section">
          <p>
            <h1 className="h4">section</h1>
            <span className="section-body">
              Integer id posuere velit. Fusce a posuere neque, sed blandit
              massa. Cras et turpis sed lectus aliquam pretium eu sed ante. Ut
              malesuada molestie leo, vitae feugiat sem efficitur quis. Ut
              molestie iaculis quam, at hendrerit tellus vehicula a. Aliquam
              blandit volutpat Integer id posuere velit. Fusce a posuere neque,
              sed blandit massa. Cras et turpis sed lectus aliquam pretium eu
              sed ante. Ut malesuada molestie leo, vitae feugiat sem efficitur
              quis. Ut molestie iaculis quam, at hendrerit tellus vehicula a.
              Aliquam blandit volutpat
            </span>
          </p>
          <div className="section-image">
            <figure>
              <img src="src/assets/images/earth.jpg" alt="description needed" />
              <figcaption>description</figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}
