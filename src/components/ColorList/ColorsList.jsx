import { useState, useEffect, useMemo } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ColorItem } from "../ColorItem/ColorItem";
import './ColorList.css'

export const ColorsList = () => {
    const [totalPages, setTotalPages] = useState(null);
    const [colors, setColors] = useState([]);
    const [colorsPerPage, setColorsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    const colorList = async () => {
        const data = await fetch(`https://reqres.in/api/colors?per_page=${colorsPerPage}&page=${currentPage}`);
        const json = await data.json();
        setColors(json.data);
        setTotalPages(json.total_pages);
        console.log(json);
    }

    useEffect(() => {
        colorList();
    }, [currentPage]);

    return (
        <>
            <div className="colorsListContainer">
                <div className="colorsContainer">
                    {
                        colors.map(color => (
                            <ColorItem key={color.id} {...color} />
                        ))
                    }
                </div >
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}
