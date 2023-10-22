import { useState, useEffect } from "react";
import { Pagination } from "../Pagination";
import { Color } from "../ColorItem/ColorItem";
import './ColorList.css'

export const ColorsList = () => {
    const [colors, setColors] = useState([]);
    const [colorsPerPage, setColorsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    const colorList = async () => {
        const data = await fetch(`https://reqres.in/api/colors?per_page=${colorsPerPage}&page=${currentPage}`);
        const json = await data.json();
        setColors(json.data);
        console.log(json.data);
        console.log(json);
    }

    useEffect(() => {
        colorList();
    }, []);

    return (
        <>
            <div className="colorsListContainer">
                <div className="colorsContainer">
                    {
                        colors.map(color => (
                            <Color key={color.id} {...color} />
                        ))
                    }
                </div >
            </div>
            <Pagination />
        </>
    )
}
