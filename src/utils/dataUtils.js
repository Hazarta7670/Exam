function convertFileToArray(string) {
    let array = string.split(/(\r\n|\r|\n)/g)
    return array
}

function filteringArray(array) {
    return array.filter((el) => 
        el.trim() !== '' && el.trim() !== '\r\n' && el.trim() !== '\n' && el.trim() !== '\r'   
    )
}

function convertArrayToMAtrix(array) {
    if (array[0].includes(';')) {
        return array.map((row) => row.split(';'))
    }
    else if (array[0].includes(',')) {
        return array.map((row) => row.split(','))
    }
    else if (array[0].includes(' ')) {
        return array.map((row) => row.split(' '))
    }
}

function cleanMatrix(matrix) {
    return matrix.map((row) => row.filter((el) => el.trim() !== ''))
}

function WarningNotEnougthRows(matrix) {
    let row_number = 0
    matrix.map((row) => {
        row_number += 1
        if (row.length < 3) {
            return alert(`Invalid data on row ${row_number}`)
        }
        return row
    })
}

export { convertFileToArray, filteringArray, convertArrayToMAtrix, cleanMatrix, WarningNotEnougthRows}