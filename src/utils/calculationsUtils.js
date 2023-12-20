function ManipulateSearchData(dataForSearch, option, id) {
    let DataAsObject = {}
    let returnData = [id, option, []]
    if (option === "Employee") {
        dataForSearch.forEach(el => {
            if (el[0] ===id) {
                if (!DataAsObject[el[1]]) {
                    DataAsObject[el[1]] = 0
                }
                DataAsObject[el[1]] += Math.floor((new Date(el[3]) - new Date(el[2])) / 86400000) + 1
            }
        })
    }
    else if (option === "Project") {
        dataForSearch.forEach(el => {
            if (el[1] === id) {
                if (!DataAsObject[el[0]]) {
                    DataAsObject[el[0]] = 0
                }
                DataAsObject[el[0]] += Math.floor((new Date(el[3]) - new Date(el[2])) / 86400000) + 1
            }
        })
    }

    for(let[k,v] of Object.entries(DataAsObject)) {
        returnData[2].push([k, v])
    }

    if (returnData.length === 0) {
        return alert(`No ${option} with this ID in the Submitted File!`)
    }
    
    return returnData
}

function ComplexCalculations(data) {
    let employeesInProjects = {}
    let employeesSameTimeInProjects = {}
    let employeesSpendTimeInSameProject = {}
    let sortingByCouples = {}
    let finalCount = []

    data.forEach(el => {
        if (!employeesInProjects[el[1]]) {
            employeesInProjects[el[1]] = []
            employeesSameTimeInProjects[el[1]] = []
            employeesSpendTimeInSameProject[el[1]] = []
        }
        employeesInProjects[el[1]].push([el[0], el[2], el[3]])
    })

    for (let[k,v] of Object.entries(employeesInProjects)) {
        let sorted_v = v.sort((a,b) => new Date(a[1]) - new Date(b[1]))
        while(sorted_v.length > 1) {
            let f_emp = v.shift()
            sorted_v.forEach(emp => {
                if (new Date(f_emp[2]) >= new Date(emp[1])) {
                    employeesSameTimeInProjects[k].push([f_emp, emp])
                }
            })
        }
    }

    for (let[k,v] of Object.entries(employeesSameTimeInProjects)) {
        for (let couple of v) {
            let timeSpend = new Date(couple[0][2]) - new Date(couple[1][1])
            let days = Math.floor(timeSpend / 86400000) + 1
            employeesSpendTimeInSameProject[k].push([couple[0][0], couple[1][0], days ])
        }
        employeesSpendTimeInSameProject[k].sort((a,b) => b[2] - a[2])
        
    }

    for (let[k,v] of Object.entries(employeesSpendTimeInSameProject)) {
        v.forEach(couple => {
            if (!sortingByCouples[`${couple[0]}, ${couple[1]}`] && !sortingByCouples[`${couple[1]}, ${couple[0]}`]) {
                sortingByCouples[`${couple[0]}, ${couple[1]}`] = {}
            }
            if (sortingByCouples[`${couple[0]}, ${couple[1]}`]) {
                if (!sortingByCouples[`${couple[0]}, ${couple[1]}`][k]) {
                    sortingByCouples[`${couple[0]}, ${couple[1]}`][k] = 0
                }
                sortingByCouples[`${couple[0]}, ${couple[1]}`][k] += couple[2]
            }
            else if (sortingByCouples[`${couple[1]}, ${couple[0]}`]) {
                if (!sortingByCouples[`${couple[1]}, ${couple[0]}`][k]) {
                    sortingByCouples[`${couple[1]}, ${couple[0]}`][k] = 0
                }
                sortingByCouples[`${couple[1]}, ${couple[0]}`][k] += couple[2]
            }
        })
    }

    for (let[k,v] of Object.entries(sortingByCouples)) {
        let summary = 0
        let arrayForPush = [k, []]
        for (let[k1,v1] of Object.entries(v)) {
            summary += v1
            arrayForPush[1].push({'projectID': k1, 'days': v1})
        }
        arrayForPush.push(summary)
        finalCount.push(arrayForPush)
    }

    return finalCount.sort((a,b) => b[2] - a[2])
}

export { ComplexCalculations, ManipulateSearchData};