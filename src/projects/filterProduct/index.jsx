import React, { useEffect, useState } from 'react';
import { items } from './data';
import './filter.css';

const FilterProduct = () => {
    const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
    const [filteredData, setFilteredData] = useState(items);
    const [activeFilters, setActiveFilters] = useState([]);

    const handleFilterClick = (e) => {
        const category = e.target.id;
        const filterData = (prevFilters) => (
            prevFilters.includes(category)
                ? prevFilters.filter((el) => el !== category)
                : [...prevFilters, category])
        setActiveFilters(filterData);
    };

    useEffect(() => {
        if (activeFilters.length) {
            setFilteredData(items.filter((item) => activeFilters.includes(item.category)));
        } else {
            setFilteredData(items);
        }
    }, [activeFilters]);

    return (
        <div className='container'>
            <div className='filters' onClick={handleFilterClick}>
                {filters.map((filter) => (
                    <button
                        className={activeFilters.includes(filter) ? 'selected' : ''}
                        key={filter}
                        id={filter}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className='product-list'>
                {filteredData.map((item) => (
                    <div className='item' key={item.name}>
                        <p>{item.name}</p>
                        <p className='category'>{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterProduct;








// using useMemo

// import React, { useMemo, useState } from 'react';
// import { items, filters } from './data';
// import './filter.css';

// const FilterProduct = () => {
//     const [activeFilters, setActiveFilters] = useState([]);

//     const filteredData = useMemo(() => {
//         if (activeFilters.length === 0) return items;
//         return items.filter(item => activeFilters.includes(item.category));
//     }, [activeFilters]);

//     const handleFilterClick = (category) => {
//         setActiveFilters((prevFilters) =>
//             prevFilters.includes(category)
//                 ? prevFilters.filter((el) => el !== category) // Remove filter
//                 : [...prevFilters, category] // Add filter
//         );
//     };

//     return (
//         <div className='container'>
//             <div className='filters'>
//                 {filters.map((filter) => (
//                     <button
//                         className={activeFilters.includes(filter) ? 'selected' : ''}
//                         key={filter}
//                         onClick={() => handleFilterClick(filter)}
//                     >
//                         {filter}
//                     </button>
//                 ))}
//             </div>
//             <div className='product-list'>
//                 {filteredData.map((item) => (
//                     <div className='item' key={item.name}>
//                         <p>{item.name}</p>
//                         <p className='category'>{item.category}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FilterProduct;
