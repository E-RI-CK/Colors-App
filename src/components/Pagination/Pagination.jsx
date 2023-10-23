import './Pagination.css'

export const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {

  //onClick Function to go to previous page
  const onPreviousClick = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
    let $colorsListContainer = document.querySelector(".colorsListContainer");
    $colorsListContainer.classList.add("animate__rotateIn")

    setTimeout(() => {
      $colorsListContainer.classList.remove("animate__rotateIn");
      $colorsListContainer = null;
    }, 1000);
  }

  //onClick Function to go to next page
  const onNextClick = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);

    let $colorsListContainer = document.querySelector(".colorsListContainer");
    $colorsListContainer.classList.add("animate__rotateIn")

    setTimeout(() => {
      $colorsListContainer.classList.remove("animate__rotateIn");
      $colorsListContainer = null;
    }, 1000);
  }

  return (
    <div className="paginationMainContainer">
      <div className='paginationContainer bg-info bg-opacity-10 border border-info border-start-0'>
        <span className="pagination-btn "><button className='btn btn-primary' onClick={onPreviousClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg> Anterior</button></span>
        <span className="pagination-btn fs-4"><button>{currentPage}</button></span>
        <span className="pagination-btn"><button className='btn btn-primary' onClick={onNextClick}>Siguiente <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button></span>
      </div>
    </div>
  )
}
