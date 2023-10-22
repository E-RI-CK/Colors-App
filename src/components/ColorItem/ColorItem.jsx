import './ColorItem.css'

export const ColorItem = ({ id, name, year, color, pantone_value, setModalDisplay }) => {
    const onOpenModal = () => {
        const $Modal = document.getElementById(id);
        $Modal.style.display = "flex";
        setTimeout(() => {
            $Modal.style.display = "none";
        }, 1500);
    }
    return (
        <button onClick={onOpenModal}>
            <div className="p-2 colorItemContainer" style={{ background: `${color}` }}>
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
