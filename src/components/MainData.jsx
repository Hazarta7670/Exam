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
    }, [dataForSearch])

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
                    <div className='main_data'>
                        <h2 className='main_h2'>Employees with IDs: {data[0][0]} have worked together for the 
                        longest: {data[0][2]} {data[0][2] > 1 ? 'days': 'day'}.</h2>
                        <MainList data={data} />
                    </div>
                    <SearchForm id={id} setId={setId} option={option} setOption={setOption} Search={Search} emp={emp} proj={proj}/>
                    <SearchData EndSearchData={EndSearchData} />
                </>
            : <p className='main_p'>No Data Yet! Load Your File First.</p>}
        </>
    )
}

export default MainData