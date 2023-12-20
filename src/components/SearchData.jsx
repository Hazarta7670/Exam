function SearchData({EndSearchData}) {

    return (
        <>
            {EndSearchData.length > 0 ? 
                <div className="search_data">
                    <h2 className="search_h2">{EndSearchData[1]} with ID: {EndSearchData[0]} has 
                    {EndSearchData[1] === 'Project' ? 'been': ''} worked on {EndSearchData[1] === 'Project' ? 'by': ''}:</h2>
                    <ul className="search_list">
                        {EndSearchData[2].map(el => 
                            <li key={el[0]}>{EndSearchData[1] === 'Project' ? 'Employee' : 'Project'} with ID: 
                            {el[0]} for {el[1]} {el[1] > 1 ? 'days' : 'day'}.</li>
                        )}   
                    </ul>
                </div>   
            : ''}
        </>
    )
}

export default SearchData