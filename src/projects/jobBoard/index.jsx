import { useEffect, useState } from 'react';
import './jobBoard.css'

const JobBoard = () => {

    const [postIDs, setPostIDs] = useState([]);
    const [postMetadata, setPostMetadata] = useState([]);

    const getData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.error('Error: ', err);
        }
    }

    const getFormattedDate = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        const formtedDate = `${month}/${day}/${year}`;
        return formtedDate;
    }

    const getJobTitle = (text) => {
        const arr = text.split(/\((YC [^)]+)\)/);
        if (arr.length > 1) {
            const part1 = arr[0];
            const part2 = arr[1];
            return `${part1} ${part2}`;
        }
        return "N/A";
    }

    const getJobInfo = (text) => {
        const arr = text.split(/\((YC [^)]+)\)/);
        if (arr.length > 2) {
            return arr[2];
        }
        return "N/A";
    }
    const fetchPostMetadata = async (ids) => {//[1,2,3];
        const apiCalls = ids.map((id) => {
            const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            return getData(url);
        });

        const results = await Promise.all(apiCalls);

        if (results.length) {
            const newArr = results.map((item) => {
                const obj = {
                    jobTitle: getJobTitle(item.title),
                    jobInfo: getJobInfo(item.title),
                    date: getFormattedDate(item.time),
                    url: item.url || `https://news.ycombinator.com/item?id=${item.id}`
                }
                return obj;
            })

            let copyPostMetadata = [...postMetadata];
            copyPostMetadata = [...copyPostMetadata, ...newArr];
            setPostMetadata(copyPostMetadata);
        }
    }

    const fetchPostIDs = async () => {
        const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
        const data = await getData(url);
        const ids = data.splice(0, 9);
        setPostIDs(data);
        fetchPostMetadata(ids);
    }

    useEffect(() => {
        fetchPostIDs();
    }, [])

    const handleLoadMore = () => {
        const copyIds = [...postIDs];
        if (copyIds.length > 0) {
            const ids = copyIds.splice(0, 6);
            fetchPostMetadata(ids);
            setPostIDs(copyIds);
        }
    }

    return (
        <div className="container">
            <h1>Job Board</h1>
            <div className='cards'>
                {
                    postMetadata?.length === 0 ?
                        <h1>Loading...</h1> :
                        postMetadata.map((post) => (
                            <a className='card'
                                href={post.url}
                                target='_blank'
                            >
                                <div className='company-info'>
                                    {post.jobTitle}
                                </div>
                                <div className='hiring-info'>
                                    {post.jobInfo}
                                </div>
                                <div className='date'>
                                    {post.date}
                                </div>
                            </a>
                        ))
                }
            </div>
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    );
}

export default JobBoard;