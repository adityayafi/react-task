import { useEffect, useState } from "react";
import NavBar from "./component/navbar";
import Search from "./component/search";
import Card from "./component/card";
const apiKey = '9bb46d41ed5946ab85e0c9cf90b5bdbe';

const NewsRef = () => {
    const [data, setData] = useState([])

    async function fetchInitialData() {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
            const response = await fetch(url);
            const News = await response.json();
            setData(d => News.articles);  
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchSearchData(value) {
        try {
            const url = `https://newsapi.org/v2/everything?q=${value}&language=id&apiKey=${apiKey}`
            const response = await fetch(url);
            const getNews = await response.json();
            setData(d => getNews.articles)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchInitialData();
    }, [])

    // console.log(data)
    
    return (
        <div>
            <NavBar />
            <Search handleSearch={fetchSearchData}/>
            <div className="container mx-auto max-w-7xl lg:px-8 mt-6 mb-8 justify-center flex">
                <div className="grid grid-rows-1 grid-cols-3 gap-8">
                {
                    data.map(news => {
                        return <Card 
                        key={news.url} 
                        img={news.urlToImage}
                        url={news.url}
                        title={news.title}
                        date={news.publishedAt}
                        author={news.author}
                        desc={news.description}/>
                    })
                } 
                </div>
            </div>
        </div>
    )
    

}

export default NewsRef;