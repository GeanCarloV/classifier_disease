const formatDate = (BP) => {
    let bpFormat = BP.map(item => {
        let format = item.atDate.split("-").join("/")
        return { ...item, atDate: format }
    })
    return bpFormat
}

export default formatDate; 