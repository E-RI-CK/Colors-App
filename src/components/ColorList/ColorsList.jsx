import { Pagination } from "../Pagination/Pagination";
import { ColorItem } from "../ColorItem/ColorItem";
import './ColorList.css';
import { Modal } from "../Modal/Modal";
import { useFetchColors } from "../../hooks";

export const ColorsList = () => {

    //Fetch to Color API to obtain the data in json format
    const { colors, currentPage, setCurrentPage, totalPages } = useFetchColors();

    //Event to obtain the node where did a hover 
    const onMouseEnter = (event) => {
        let $colorItem = event.target;
        $colorItem.classList.add("animate__bounce");
        setTimeout(() => {
            $colorItem.classList.remove("animate__bounce");
            $colorItem = null;
        }, 1000);
    }

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
