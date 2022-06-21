import React from "react";

export function Arrows({prevSlide, nextSlide}) {
    return(
        <div>
            <span className="prev" onClick={prevSlide}>1</span>
            <span className="next" onClick={nextSlide}>2</span>
        </div>
    )
}