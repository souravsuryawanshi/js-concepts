const SearchComponent = ({searchHandler}) => {
    const searchChangeHandler = (e) => {
        searchHandler(e.target.value);
    }
    return (
        <>
        <input type="text" onChange={(e)=>searchChangeHandler(e)}/>
      </>
    );

}

export default SearchComponent;