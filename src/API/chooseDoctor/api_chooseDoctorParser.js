const api_chooseDoctorParser = (data) => {
    return data.reduce((acc, item) => { 

        acc.push({
            value: `${item.value}`, 
            label: `${item.label}`, 
        })
        return acc

    }, [])    
}

export default api_chooseDoctorParser