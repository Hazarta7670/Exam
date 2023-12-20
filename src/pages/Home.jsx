import { useState } from 'react';
import { convertFileToArray, filteringArray, convertArrayToMAtrix, cleanMatrix, WarningNotEnougthRows } from '../utils/dataUtils'
import { SettingDates } from '../utils/dateUtils';
import { ComplexCalculations } from '../utils/calculationsUtils';
import FileForm from '../components/FileForm';
import MainData from '../components/MainData';

function Home() {
    const [data, setData] = useState()
    const [dataForSearch, setDataForSearch] = useState()

    function handleFileInput(e) {
        e.preventDefault()
        if (!e.target.files[0]) {
            return alert('Something went wrong while Uploading the File!')
        }
        const file = e.target.files[0]
        
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function() {
            const array = convertFileToArray(reader.result)
            const filteredArray = filteringArray(array)
            const matrix = convertArrayToMAtrix(filteredArray)
            const cleanedMatrix = cleanMatrix(matrix)
            WarningNotEnougthRows(cleanedMatrix)
            const fixedDates = SettingDates(cleanedMatrix)
            setDataForSearch(fixedDates)
            const resultOfCalculations = ComplexCalculations(fixedDates)
            setData(resultOfCalculations)
        }
    }

    return (
        <>
            <FileForm handleFileInput={handleFileInput}/>
            <MainData  data={data} dataForSearch={dataForSearch}/>
        </>
    )
}

export default Home