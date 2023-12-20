function MainList({data}) {
    return (
        <ul className="main_list">
            {data[0][1].map(el => 
            <li key={el.projectID}>Worked on Project with ID: {el.projectID} for {el.days} {el.days > 1 ? 'days' : 'day'}.</li>)}
        </ul>
    )
}

export default MainList