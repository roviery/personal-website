export const FetchProject = async (id, link) => {
    try {
        const response = await fetch("http://localhost:5000/project/" + id)
        return response.json()
    } catch (err) {
        window.location.replace(link)
    }
}