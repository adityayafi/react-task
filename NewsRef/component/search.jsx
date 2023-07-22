import { useState } from "react";

const Search = ({handleSearch}) => {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(keyword)
    }

    return (
            <div className="container flex mx-auto max-w-7xl lg:px-8 mt-8">
                <form onSubmit={handleSubmit}>
                    <div className="relative"> 
                        <input 
                        type="text" 
                        className="h-12 w-96 pl-3 pr-20 rounded-lg border focus:shadow focus:outline-none" 
                        placeholder="Search news..."
                        onChange={e => setKeyword(e.target.value)}
                        required
                        />
                        <div className="absolute top-2 right-2">
                            
                            <button type="submit" className="h-8 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button>
                            
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default Search;