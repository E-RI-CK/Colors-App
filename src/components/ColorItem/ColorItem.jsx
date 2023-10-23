import './ColorItem.css';

export const ColorItem = ({ id, name, year, color, pantone_value, onMouseEnter }) => {

    //Function to open and close the modal component
    const onOpenModal = () => {
        let $modal = document.getElementById(id),
            $title = document.querySelector(".title"),
            $pagination = document.querySelector(".paginationMainContainer"),
            $colorsContainer = document.querySelector(".colorsListContainer");
        $title.style.opacity = 0.3;
        $pagination.style.opacity = 0.3;
        $colorsContainer.style.opacity = 0.3;
        $modal.style.display = "flex";
        navigator.clipboard.writeText(color);

        setTimeout(() => {
            $modal.style.display = "none";
            $title.style.opacity = 1;
            $pagination.style.opacity = 1;
            $colorsContainer.style.opacity = 1;
            $title = null;
            $pagination = null;
            $colorsContainer = null;
        }, 1400);

    }
    return (
        <button onClick={onOpenModal}>
            <div className="p-2 colorItemContainer animate__animated" style={{ background: `${color}` }} onMouseEnter={onMouseEnter}>
                <div className='text-start'>
                    <span>{year}</span>
                </div>
                <div className=' text-center'>
                    <p className='name-padding'>{name}</p>
                    <p><b>{color}</b></p>
                </div>
                <div className='text-end'>
                    <span>{pantone_value}</span>
                </div>
            </div>
        </button>
    )
}
