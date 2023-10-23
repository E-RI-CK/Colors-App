import { useState, useEffect } from "react";
import { getColors } from "../helpers/getColors";

export const useFetchColors = () => {
    const colorsPerPage = 9;                                //Number of colors per page
    const [currentPage, setCurrentPage] = useState(1);      //Current Page
    const [totalPages, setTotalPages] = useState(null);     //Total pages of the Colors API
    const [colors, setColors] = useState([]);               //All the colors of the Colors API

    const getColorsFunction = async () => {
        const colors = await getColors(colorsPerPage, currentPage);
        setColors(colors.data);
        setTotalPages(colors.total_pages);
    }

    //Secundary Effect to Fetch API
    useEffect(() => {
        getColorsFunction();
    }, [currentPage]);

    return {
        colors,
        currentPage,
        totalPages,
        setCurrentPage
    }
}
