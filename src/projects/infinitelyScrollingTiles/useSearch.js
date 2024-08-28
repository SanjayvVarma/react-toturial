import { useEffect, useState } from 'react';

const useSearch = (pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    const fetchItems = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`);
            const data = await response.json();
            setItems((prevItems) => {
                const newItems = data.map((b) => b.title);
                const uniqueItems = Array.from(new Set([...prevItems, ...newItems]));
                return uniqueItems;
            });
            setHasMore(data.length === 10);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [pageNumber]);

    return { loading, error, items, hasMore };
}

export default useSearch;
