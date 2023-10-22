import './ColorItem.css'

export const Color = ({ name, year, color, pantone_value }) => {
    return (
        <div className="p-2 colorItemContainer" style={{ background: `${color}` }}>
            <div >
                <span>{year}</span>
            </div>
            <div className=' text-center'>
                <p className='name-padding'>{name}</p>
                <p><b>{color}</b></p>
            </div>
            <div className=' text-end'>
                <span>{pantone_value}</span>
            </div>
        </div>
    )
}
