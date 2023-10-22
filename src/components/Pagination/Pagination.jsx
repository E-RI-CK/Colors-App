import './Pagination.css'

export const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const onPreviousClick = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  }

  const onNextClick = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="paginationContainer">
      <span className="pagination-btn "><button onClick={onPreviousClick}>&lt;Anterior</button></span>
      <span className="pagination-btn"><button>{currentPage}</button></span>
      <span className="pagination-btn"><button onClick={onNextClick}>Siguiente&gt;</button></span>
    </div>
  )
}
