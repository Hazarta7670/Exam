import { useEffect, useState } from "react"
import MainList from "./MainList"
import { ManipulateSearchData } from "../utils/calculationsUtils"
import SearchForm from "./SearchForm"
import SearchData from "./SearchData"

function MainData({data, dataForSearch}) {
    const [EndSearchData, setEndSearchData] = useState([])
    const [id, setId] = useState('')
    const [option, setOption] = useState('')
    const [emp, setEmp] = useState([])
    const [proj, setProj] = useState([])

    function Search(e) {
        e.preventDefault()
        if (id.trim() === '' || option.trim() === '') {
            return alert('All Fields in Search Form are Required!')
        }
        console.log(dataForSearch)
        const SearchDataResults = ManipulateSearchData(dataForSearch, option, id)
        setEndSearchData(SearchDataResults)
        setOption('')
        setId('')
        setEmp([])
        setProj([])
    }

    useEffect(() => {
        setEndSearchData([])
        setOption('')
        setId('')
    }, [data])

    useEffect(() => {
        if (option === 'Employee') {
            setProj([])
            setEmp(Array.from(new Set(dataForSearch.map(el => el[0]).sort((a, b) => a - b))))
        }
        else if (option === 'Project') {
            setEmp([])
            setProj(Array.from(new Set(dataForSearch.map(el => el[1]).sort((a, b) => a - b))))
        }
        else {
            setProj([])
            setEmp([])
        }

    }, [option, dataForSearch])

    return (
        <>
            {data ? 
                <>
                    {data.map(el => 
                        <div className='main_data' key={el[0]}>
                            <h2 className='main_h2'>Employees with IDs: {el[0]} have worked together for the 
                            longest: {el[2]} {el[2] > 1 ? 'days': 'day'}.</h2>
                            <MainList el={el} />
                        </div>
                    )}
                    <SearchForm id={id} setId={setId} option={option} setOption={setOption} Search={Search} emp={emp} proj={proj}/>
                    <SearchData EndSearchData={EndSearchData} />
                </>
            : <p className='main_p'>Place your file to find the pair of employees who have worked together on common projects for the longest period of time and the time for each of those projects.</p>}
        </>
    )
}

export default MainData