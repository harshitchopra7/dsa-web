import React from 'react';
import './Home.css';
import CategoryCard from './CategoryCard';
import { categories } from './categories';
 
function Home () {
    return (
        <div className="home">

            {categories.map((categories) => (
                <CategoryCard 
                    category={categories.category}
                    image={categories.image}
                    url={categories.url}
                />
            ))
            }
            
        </div>
    )
}
export default Home;