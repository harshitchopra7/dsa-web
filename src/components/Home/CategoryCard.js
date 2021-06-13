import React from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard({ category, image, url }) {

    return (
        <Link className="link" to={url}>
        <div className="categorycard">
            <div className="categorycard_name">
                <p>{category}</p>
            </div>
            {/* <div className="categorycard_img">
                <img src={image} alt="" />
            </div> */}
            {/* <div className="categorycard_btn">
                <button>Go To Arrays</button>
            </div> */}
        </div>
        </Link>
    )
}

export default CategoryCard;
