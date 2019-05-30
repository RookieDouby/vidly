import React from 'react';
import _ from 'lodash'

const Pagination = (props) => {
    const { itemsCount, pageSize,onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);    //生成[1,2,3]这样的连续数组

    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li className={page === currentPage ? 'page-item active': 'page-item'} key={page} onClick={() => onPageChange(page)}><a className="page-link" href="#">{page}</a></li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;
 