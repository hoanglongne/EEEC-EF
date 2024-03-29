import {useState} from "react"


export default function Counter({ page }) {
    return (
        <div className="flex justify-center gap-5 items-center">
            <div>
                <a href={`/blog/`}>
                    <svg width="20" height="16" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 7L7.5 4L10.5 1M4.5 7L1.5 4L4.5 1" stroke="#151515"/>
                    </svg>
                </a>
            </div>
            <div className="flex items-center justify-center gap-2">
                {page.url.prev ? <a className="font-bruno text-[12px]" href={page.url.prev}><svg className="inline-block" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L5 6L7 4M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#151515"/>
                </svg></a> : <a className="font-bruno text-[12px"><svg className="inline-block" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L5 6L7 4M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#6b7280"/>
                </svg></a>}
            </div>

            <p className="font-bruno">{page.currentPage}</p>

            <div className="flex items-center justify-center gap-2">
                {page.url.next ? <a className="font-bruno text-[12px]" href={page.url.next}><svg className="inline-block" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4L7 6L5 8M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#151515"/>
                </svg></a> : <a className="font-bruno text-[12px"><svg className="inline-block" width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4L7 6L5 8M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#6b7280"/>
                </svg></a>}
            </div>
            <div>
                <a href={`/blog/${page.lastPage}`}>
                    <svg width="20" height="16" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 1L9.5 4L6.5 7M0.5 1L3.5 4L0.5 7" stroke="#151515"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}