import React from 'react'
import { getPagesArray } from '../../../utils/pages'
const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="wrapper__page">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page current__page' : 'page'}>{p}</span>
            )}
        </div>

    )
}

export default Pagination