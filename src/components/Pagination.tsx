import React, { useState } from "react";

const ArrowIconNext = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className="inline-block"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill="#fff"
      />
    </svg>
  );
};

const ArrowIconPrevious = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      className="inline-block"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        fill="#fff"
      />
    </svg>
  );
};

export const Pagination = ({
  totalItems,
  itemsPerPage = 8,
  currentPage = 1,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange: (pageNumber: number) => void;
}) => {
  const [current, setCurrent] = useState(currentPage);
  const countPages: number = Math.ceil(totalItems / itemsPerPage);

  const pages: number[] = [];
  for (let i = 1; i <= countPages; i++) {
    pages.push(i);
  }
  return (
    <nav
      className="paginate-container"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className="pagination">
        <li>
          {current === 1 ? (
            <span className="disable">
              <ArrowIconPrevious />
            </span>
          ) : (
            <span
              onClick={() => {
                setCurrent(current - 1);
                onPageChange(current - 1);
              }}
              role="link"
            >
              <ArrowIconPrevious />
            </span>
          )}
        </li>
        {pages.map((page, index) => {
          return (
            <li
              key={index}
              className={current - 1 === index ? "current-page" : ""}
            >
              <span
                onClick={() => {
                  setCurrent(index + 1);
                  onPageChange(index + 1);
                }}
                role="link"
              >
                {page}
              </span>
            </li>
          );
        })}
        <li>
          {current === countPages ? (
            <span className="disable">
              <ArrowIconNext />
            </span>
          ) : (
            <span
              onClick={() => {
                setCurrent(current + 1);
                onPageChange(current + 1);
              }}
              role="link"
            >
              <ArrowIconNext />
            </span>
          )}
        </li>
      </ul>
      <p>
        Showing {(current - 1) * itemsPerPage + 1}-
        {itemsPerPage * current > totalItems
          ? totalItems
          : itemsPerPage * current}{" "}
        of {totalItems}
      </p>
    </nav>
  );
};
