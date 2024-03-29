import { useState, useEffect } from "react";

import '../global.css'

export default function Block({title, thumbnail, tag, minutes, date, content, url, bid}) {

    const [like, setLike] = useState(false)
    const [mark, setMark] = useState(false)

    const markSlug = bid + 'a'
    useEffect(() => {
        const data = window.localStorage.getItem(bid);
        const dataMark = window.localStorage.getItem(markSlug)
        if ( data !== null ) setLike(JSON.parse(data));
        if ( dataMark !== null ) setMark(JSON.parse(dataMark));
    }, []);

    useEffect(() => {
        window.localStorage.setItem(bid, JSON.stringify(like));
        window.localStorage.setItem(markSlug, JSON.stringify(mark))
    }, [like, mark]);

    const handleClick = () => {
        navigator.clipboard?.writeText && navigator.clipboard.writeText('ef-eeec.com'+url);
    };

    return (
    <div className=" border-2 border-black rounded-[33px] h-[350px] grid grid-cols-5 overflow-clip mb-6 font-bruno">
        <div className="col-span-2">
            <a href={url}>
                <img className="min-w-[448.63px] h-full" src={thumbnail}/>
            </a>
        </div>
        <div className="col-span-3 pl-7 pt-7 pb-14">
            <div className="flex flex-row justify-center">
                <div className="relative max-w-[80%] h-full">
                    <span className="text-[14px] text-[#202131B2] tracking-[2px]">
                        {minutes} minutes to read
                    </span>
                    <button className={`w-[100px] h-[30px] rounded-full border-black border-[0.6px] ${tag == 'News' ? "bg-[#E5E2FF]" : "bg-[#DEFFE7]" } ml-2`}>
                        <span className="text-[12px] text-[#63646F] m-auto">
                            {tag}
                        </span>
                    </button>
                    <div className="relative mt-5">
                        <h1 className="font-bruno text-[18px] tracking-[0.2em]">{title}</h1>
                    </div>
                    <p className="text-[11px] text-[#202131B2] mt-6 leading-[1.8em] tracking-[0.15em]">{content}.. <a href={url} className="underline text-black">read more</a></p>
                    <p className="absolute text-[11px] text-[#202131B2] top-[270px]">Published {date}</p>        
                </div>
                <div className=" min-w-[20%] min-h-full flex flex-row justify-center gap-8 items-center mt-20">
                    <svg width="2" height="96" viewBox="0 0 2 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0L1 96" stroke="#A6A6A6" stroke-width="0.5"/>
                    </svg>
                    <div className="flex flex-col justify-center gap-4 items-center">
                        {
                            like ? 
                            <svg onClick={()=> setLike(!like)} className='cursor-pointer like-button duration-[300ms]' width="18" height="18" viewBox="0 0 18 18" fill="rgb(240, 116, 173)" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7663 2.41452C15.3753 1.96607 14.9111 1.61034 14.4002 1.36763C13.8893 1.12492 13.3417 1 12.7887 1C12.2357 1 11.6881 1.12492 11.1772 1.36763C10.6663 1.61034 10.2021 1.96607 9.81116 2.41452L8.9998 3.34476L8.18843 2.41452C7.39874 1.50912 6.32768 1.00047 5.21089 1.00047C4.09409 1.00047 3.02303 1.50912 2.23334 2.41452C1.44365 3.31992 1 4.5479 1 5.82833C1 7.10875 1.44365 8.33674 2.23334 9.24214L3.0447 10.1724L8.9998 17L14.9549 10.1724L15.7663 9.24214C16.1574 8.79391 16.4677 8.26171 16.6794 7.67596C16.891 7.0902 17 6.46237 17 5.82833C17 5.19428 16.891 4.56645 16.6794 3.9807C16.4677 3.39494 16.1574 2.86275 15.7663 2.41452V2.41452Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> :
                            <svg onClick={()=> setLike(!like)} className='like-button cursor-pointer hover:fill-pink-200 duration-[300ms]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7663 2.41452C15.3753 1.96607 14.9111 1.61034 14.4002 1.36763C13.8893 1.12492 13.3417 1 12.7887 1C12.2357 1 11.6881 1.12492 11.1772 1.36763C10.6663 1.61034 10.2021 1.96607 9.81116 2.41452L8.9998 3.34476L8.18843 2.41452C7.39874 1.50912 6.32768 1.00047 5.21089 1.00047C4.09409 1.00047 3.02303 1.50912 2.23334 2.41452C1.44365 3.31992 1 4.5479 1 5.82833C1 7.10875 1.44365 8.33674 2.23334 9.24214L3.0447 10.1724L8.9998 17L14.9549 10.1724L15.7663 9.24214C16.1574 8.79391 16.4677 8.26171 16.6794 7.67596C16.891 7.0902 17 6.46237 17 5.82833C17 5.19428 16.891 4.56645 16.6794 3.9807C16.4677 3.39494 16.1574 2.86275 15.7663 2.41452V2.41452Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                        
                        {
                            mark ? 
                            <svg onClick={()=> setMark(!mark)} className="duration-300 cursor-pointer" id="icon-save" width="15" height="18" viewBox="0 0 15 18" fill="#11007C" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 17L7.5 12.5556L1 17V2.77778C1 2.30628 1.19566 1.8541 1.54394 1.5207C1.89223 1.1873 2.3646 1 2.85714 1H12.1429C12.6354 1 13.1078 1.1873 13.4561 1.5207C13.8043 1.8541 14 2.30628 14 2.77778V17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> :
                            <svg onClick={()=> setMark(!mark)} className="cursor-pointer hover:fill-blue-100 duration-300" id="icon-save" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 17L7.5 12.5556L1 17V2.77778C1 2.30628 1.19566 1.8541 1.54394 1.5207C1.89223 1.1873 2.3646 1 2.85714 1H12.1429C12.6354 1 13.1078 1.1873 13.4561 1.5207C13.8043 1.8541 14 2.30628 14 2.77778V17Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        }

                        <svg onClick={handleClick} id="icon-share" className="cursor-pointer" width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.27944 11.9345L12.73 15.7155M12.7206 5.28451L6.27944 9.06551M18 3.85C18 5.42401 16.7315 6.7 15.1667 6.7C13.6019 6.7 12.3333 5.42401 12.3333 3.85C12.3333 2.27599 13.6019 1 15.1667 1C16.7315 1 18 2.27599 18 3.85ZM6.66667 10.5C6.66667 12.074 5.39814 13.35 3.83333 13.35C2.26853 13.35 1 12.074 1 10.5C1 8.92599 2.26853 7.65 3.83333 7.65C5.39814 7.65 6.66667 8.92599 6.66667 10.5ZM18 17.15C18 18.724 16.7315 20 15.1667 20C13.6019 20 12.3333 18.724 12.3333 17.15C12.3333 15.576 13.6019 14.3 15.1667 14.3C16.7315 14.3 18 15.576 18 17.15Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}