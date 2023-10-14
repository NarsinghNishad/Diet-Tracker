import React from 'react'

const Home = () => {
  return (
    <div>
      <>
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="">Diet Tracker</h1>
                <p className="lead text-body-secondary">
                 Diet Tracker is commonly use for the all people.
                 It is mostly used by the <b> Bodybuilder and Deases persons</b>.


                </p>
                <p >
                  <a href="http://localhost:3000/Signup" className="btn btn-primary my-2">
                    Signup
                  </a>
                  <a href="http://localhost:3000/Login" className="btn btn-primary my-2 ms-2">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg" alt="" />
                    <div className="card-body">
                      <p className="card-text">
                      This nutritious fruit offers multiple health benefits. Apples may lower your chance
                       of developing cancer, diabetes, and heart disease. Research says apples may also 
                       help you lose weight while improving your gut and brain health.
                      </p>
                      <p>Calories: 104,
                         Carbs: 28 g,
                         Fiber: 5 g
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                     <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/03/9b067cecd8283b56117c8ce8eae1529b_8.jpg?impolicy=abp_cdn&imwidth=640" alt="" />
                    <div className="card-body">
                      <p className="card-text">
                      Oranges are a nutritional powerhouse, packed with vitamins and minerals.
                       The most noteworthy of these is vitamin C,
                        a water-soluble antioxidant that prevents cell damage.
                      </p>
                      <p>
                      60 calories,
                       3 grams of fiber,
                       1 gram of protein
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={225}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="text-body-secondary py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">
              Album example is © Bootstrap, but please download and customize it for
              yourself!
            </p>
            <p className="mb-0">
              New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
              <a href="../getting-started/introduction/">getting started guide</a>.
            </p>
          </div>
        </footer>
      </>

    </div>
  )
}

export default Home;