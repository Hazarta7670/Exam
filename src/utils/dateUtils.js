function setNullDate() {
    let today = new Date();
    let dd = String(today.getDate())
    let mm = String(today.getMonth() +1)
    let yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    console.log(today)
    return today
}

function setOtherDates(date) {
    let today = new Date(date);
    let dd = String(today.getDate())
    let mm = String(today.getMonth() +1)
    let yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    console.log(today)
    return today
}

function SettingDates(cleanedMatrix) {
    return cleanedMatrix.map((row) => {
        row[2] = setOtherDates(row[2])
        if (row[3].toLowerCase() === 'null') {
            row[3] = setNullDate()
        }
        else if (row.length === 3 ) {
            row.push(setNullDate())
        }
        else {
            row[3] = setOtherDates(row[3])
        }
        return row
    })
}

export { SettingDates }