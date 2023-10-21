import './ColorItem.css'

export const Color = ({ name, year, color, pantone_value }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 justify-content-between colorItemContainer" style={{ background: `${color}` }}>
            <div >
                <span>{year}</span>
            </div>
            <div className=' text-center'>
                <p>{name}</p>
            </div>
            <div className=' text-center'>
                <p><b>{color}</b></p>
            </div>
            <div className=' text-end'>
                <p>{pantone_value}</p>
            </div>
        </div>
    )
}
