import React, { useState, useEffect } from 'react';
import useSearch from './useSearch';
import './scroll.css';

const InfiniteScroll = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const { items, hasMore, loading, error } = useSearch(pageNumber);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 10 && hasMore && !loading) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <div className='con-main'>
        <h1>Infinite Scrolling</h1>
      </div>
      <div>
        {
          items?.map((item) => (
            <div
              className="book-title"
              key={item}
            >
              {item}
            </div>
          ))
        }

        {loading && <div className="loader"></div>}
        <div>{error && 'Error'}</div>
      </div>
    </div>
  );
}


export default InfiniteScroll;