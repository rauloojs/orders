import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination as PaginationRS,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight
} from 'react-icons/fa';

const MAX_PAGES = 5;

const Pagination = ({ totalCount, itemsPerPage, activePage, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const middle = Math.floor(MAX_PAGES / 2);

  let start;
  let end;

  if (MAX_PAGES >= totalPages) {
    start = 1;
    end = totalPages;
  } else {
    start = activePage - middle <= 0 ? 1 : activePage - middle;
    end = start + MAX_PAGES >= totalPages ? totalPages : start + MAX_PAGES;

    if (end - start < MAX_PAGES) {
      start = end - MAX_PAGES;
    }
  }

  const pages = Array.from(new Array(end - start + 1), (_, i) => i + start);

  return (
    <PaginationRS className="justify-content-end float-right">
      <PaginationItem disabled={activePage - 1 === 0}>
        <PaginationLink
          style={{
            cursor: 'pointer'
          }}
          previous
          onClick={() => onPageChange(1)}
        >
          <FaAngleDoubleLeft />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={activePage - 1 === 0}>
        <PaginationLink
          style={{
            cursor: 'pointer'
          }}
          previous
          onClick={() => onPageChange(activePage - 1)}
        >
          <FaAngleLeft />
        </PaginationLink>
      </PaginationItem>
      {pages.map(page => (
        <PaginationItem key={page} active={page === activePage}>
          <PaginationLink
            style={{
              cursor: 'pointer'
            }}
            onClick={page === activePage ? null : () => onPageChange(page)}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={activePage === totalPages}>
        <PaginationLink
          style={{
            cursor: 'pointer'
          }}
          next
          onClick={() => onPageChange(activePage + 1)}
        >
          <FaAngleRight />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={activePage === totalPages}>
        <PaginationLink
          style={{
            cursor: 'pointer'
          }}
          next
          onClick={() => onPageChange(totalPages)}
        >
          <FaAngleDoubleRight />
        </PaginationLink>
      </PaginationItem>
    </PaginationRS>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
