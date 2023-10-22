import { useState, useEffect, useMemo } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ColorItem } from "../ColorItem/ColorItem";
import './ColorList.css'
import { Modal } from "../Modal/Modal";

export const ColorsList = () => {
    const [totalPages, setTotalPages] = useState(null);
    const [colors, setColors] = useState([]);
    const colorsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const colorList = async () => {
        const data = await fetch(`https://reqres.in/api/colors?per_page=${colorsPerPage}&page=${currentPage}`);
        const json = await data.json();
        setColors(json.data);
        setTotalPages(json.total_pages);
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
            {
                colors.map(color => (
                    <Modal key={color.id}  {...color} />
                ))
            }

            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}
