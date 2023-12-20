function SearchForm({id, setId, option, setOption, Search, emp, proj}) {
    return (
        <form className="search-form">
            <select
                value={option} 
                onChange={e => setOption(e.target.value)}>
                    <option></option>   
                    <option>Employee</option>
                    <option>Project</option>
            </select>
            <select
                value={id}
                onChange={e => setId(e.target.value)}>
                    <option></option>
                    {emp.length > 0 ?
                    emp.map(el => <option key={el}>{el}</option>)
                    : proj.length > 0 ? proj.map(el => <option key={el}>{el}</option>)
                    : '' }
            </select>
                
            <button onClick={e => {Search(e)}}>Search</button>
        </form>
    )
}

export default SearchForm