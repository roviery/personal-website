export const FetchProject = async (id) => {
    try {
        const response = await fetch("http://localhost:5000/project/" + id)
        return response.json()
    } catch (err) {
        console.log(err)
        return err
    }
}