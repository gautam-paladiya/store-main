import React from "react";
export default function PaginationAndExport(props) {
    const {currentPage,setCurrentPage,changePage} = props;
    return (
        <div className="Pagination">
            <div className="d-flex flex-column flex-sm-row justify-content-between bg-white pt-3 px-4 rounded align-items-sm-center">
                <p className="currentEntries mb-3">Showing 1 to 1 of 50 entries</p>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-sm-end">
                        <li className="page-item">
                            <a className="page-link PrevNext" href="javascript:void(0);" onClick={()=>changePage("prev",currentPage)}>Prev</a>
                        </li>
                        <li className="page-item active"><a className="page-link pageNumber" href="#">{currentPage}</a></li>
                        <li className="page-item">
                            <a className="page-link PrevNext"  href="javascript:void(0);" onClick={()=>changePage("next",currentPage)} >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="exportButton">
                <a href="#" class="btn my-2 export__pdf"><img src='/assets/images/pdf_icon.png' />  Export to PDF</a>
                <a href="#" class="btn my-2 export__excel"><img src='/assets/images/excel_icon.png' />  Export to Excel</a>
            </div>
        </div>

    )
}