const Search = ({ searchHandel }) => {
    return (
        <input
            className='search-box'
            type="search"
            placeholder='Search Cats'
            onChange={searchHandel} />
    )
}
export default Search;