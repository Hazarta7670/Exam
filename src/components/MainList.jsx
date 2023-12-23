function MainList({el}) {
    return (
        <ul className="main_list">
            {el[1].map(el_info => 
            <li key={el_info.projectID}>Worked on Project with ID: {el_info.projectID} for {el_info.days} {el_info.days > 1 ? 'days' : 'day'}.</li>)}
        </ul>
    )
}

export default MainList