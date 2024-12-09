import React, { useState } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const [pageNumber, setPageNumber] = useState<string>('');

    const paginationItems = [1, 2, 3, '...', totalPages - 1, totalPages];

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number | string) => {
        if (typeof page === 'number') {
            onPageChange(page);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const pageNum = parseInt(pageNumber, 10);
        if (pageNum >= 1 && pageNum <= totalPages) {
            onPageChange(pageNum);
            setPageNumber('');
        }
    };

    return (
        <nav
            aria-label="Pagination"
            className="flex gap-7 justify-between items-center text-sm text-center whitespace-nowrap max-w-[399px] flex-wrap lg:flex-nowrap"
        >
            <div className="flex justify-between items-start self-stretch my-auto font-medium leading-6 text-slate-700 w-[236px]">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 disabled:opacity-50 h-7 w-7"
                >
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13b99a2bfa1d4d0557c2aa8d447959c3d71588c4924fea2647b2a7f2bfeb4f17?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        alt=""
                        className="object-contain shrink-0 w-7 h-7"
                    />
                </button>
                {paginationItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(item)}
                        className={`px-3 py-0.5 tracking-normal border border-solid border-zinc-200 w-[30px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 ${
                            currentPage === item
                                ? 'text-gray-50 bg-amber-300'
                                : 'text-slate-700'
                        }`}
                        aria-current={currentPage === item ? 'page' : undefined}
                    >
                        {item}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 disabled:opacity-50 h-7 w-7"
                >
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/267f579f64d4a05aa965fa79a674d1426ec819e797333ab3ffefcdb953ff6615?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        alt=""
                        className="object-contain shrink-0 w-7 h-7"
                    />
                </button>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex gap-1.5 items-start self-stretch my-auto"
            >
                <label
                    htmlFor="pageInput"
                    className="px-3 py-0.5 font-medium tracking-normal leading-6 rounded-md text-slate-400 w-[30px]"
                >
                    /
                </label>
                <div className="flex items-start">
                    <input
                        type="number"
                        id="pageInput"
                        value={pageNumber}
                        onChange={(e) => setPageNumber(e.target.value)}
                        min="1"
                        max={totalPages}
                        className="gap-2.5 self-stretch px-2 py-0.5 rounded-md border border-solid border-zinc-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
                        placeholder="Get"
                        aria-label={`Enter page number (1-${totalPages})`}
                    />
                    <button
                        type="submit"
                        className="gap-2.5 self-stretch px-2 py-0.5 rounded-none border border-solid border-zinc-200 text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    >
                        Go
                    </button>
                </div>
            </form>
        </nav>
    );
};

export default Pagination;
