import { Image } from "./image";
import React, { useState } from "react";

export const Gallery = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6); // how many images to show

  const handleShowMore = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(6); // reset
    } else {
      setVisibleCount(data.length); // show all
    }
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.slice(0, visibleCount).map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>

        {data && data.length > 6 && (
          <button
            onClick={handleShowMore}
            className="btn btn-custom btn-lg"
            style={{ marginTop: "20px" }}
          >
            {visibleCount >= data.length ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};
