import React, { useEffect, useState } from 'react';


const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect (() => {
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-30&sortBy=publishedAt&apiKey=c19e1bea1d4d430c92777dd1d4c877b6')
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;