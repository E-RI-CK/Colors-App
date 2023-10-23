//Fetch to Color API to obtain the data in json format
export const getColors = async (colorsPerPage, currentPage) => {
    const data = await fetch(`https://reqres.in/api/colors?per_page=${colorsPerPage}&page=${currentPage}`);
    const colors = await data.json();
    return colors;
}
