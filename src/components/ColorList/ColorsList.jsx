import { useState, useEffect, useMemo } from "react";
import { Pagination } from "../Pagination/Pagination";
import { ColorItem } from "../ColorItem/ColorItem";
import './ColorList.css'
import { Modal } from "../Modal/Modal";

export const ColorsList = () => {
    const [totalPages, setTotalPages] = useState(null); //Total pages of the Colors API
    const [colors, setColors] = useState([]);           //All the colors of the Colors API
    const colorsPerPage = 9;                            //Number of colors per page
    const [currentPage, setCurrentPage] = useState(1);  //Current Page

    //Fetch to Color API to obtain the data in json format
    const colorList = async () => {
        const data = await fetch(`https://reqres.in/api/colors?per_page=${colorsPerPage}&page=${currentPage}`);
        const json = await data.json();
        setColors(json.data);
        setTotalPages(json.total_pages);
    }

    //Event to obtain the node where did a hover 
    const onMouseEnter = (event) => {
        let $colorItem = event.target;
        $colorItem.classList.add("animate__bounce");
        setTimeout(() => {
            $colorItem.classList.remove("animate__bounce");
            $colorItem = null;
        }, 1000);
    }

    //Secundary Effect to Fetch API
    useEffect(() => {
        colorList();
    }, [currentPage]);


    return (
        <>
            <div className="colorsListContainer animate__animated">
                <div className="colorsContainer ">
                    {
                        colors.map(color => (
                            <ColorItem key={color.id} {...color} onMouseEnter={onMouseEnter} />
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
