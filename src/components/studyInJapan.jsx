import React from "react";

export const StudyInJapan = () => {
//   const benefits = [
//     {
//       icon: "fa-graduation-cap",
//       title: "Quality Education",
//       text: "Get guidance to choose the right Japanese language school, vocational school, or university for your future."
//     },
//     {
//       icon: "fa-language",
//       title: "Japanese Language",
//       text: "Prepare for your journey with Japanese language learning and guidance for JLPT and JFT examinations."
//     },
//     {
//       icon: "fa-file-text-o",
//       title: "Application Support",
//       text: "We assist you with school applications, documentation, and the admission process."
//     },
//     {
//       icon: "fa-id-card-o",
//       title: "Visa Assistance",
//       text: "Get professional guidance throughout the Certificate of Eligibility and student visa process."
//     },
//     {
//       icon: "fa-briefcase",
//       title: "Career Opportunities",
//       text: "Explore opportunities for further education, skills development, and career growth in Japan."
//     }
//   ];

  return (
    <div id="study-japan" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Study in Japan</h2>
          <p>
            Start your journey toward quality education and a brighter future
            in Japan.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="study-japan-image">
              <img
                src="/img/study-japan.jpg"
                className="img-responsive"
                alt="Study in Japan"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="study-japan-content">
              <h3>Your Journey to Japan Starts Here</h3>

              <p>
                Step Nepal Business Center provides comprehensive support to
                students who wish to pursue their education in Japan. From
                selecting the right institution to visa processing and
                pre-departure guidance, we are here to support you at every
                step.
              </p>

              <p>
                Whether you are planning to study Japanese language, pursue
                vocational education, or continue your higher education, our
                team can help you make informed decisions about your future.
              </p>

              <a href="#contact" className="btn btn-custom btn-lg">
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* <div className="row study-japan-services">
          {benefits.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="study-japan-box">
                <i className={`fa ${item.icon}`}></i>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};