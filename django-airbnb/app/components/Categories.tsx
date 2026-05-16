import Image from 'next/image';

const Categories = () => {
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition hover:border-gray-200">
                <svg width="50" height="50" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M17.553 16.75a7.5 7.5 0 0 0-10.606 0M18 3.804A6 6 0 0 0 9.804 6l10.392 6A6 6 0 0 0 18 3.804z"/>
                        <path d="M16.732 10C18.39 7.13 18.957 4.356 18 3.804C17.043 3.252 14.925 5.13 13.268 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 0 1 4 19a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 1 .25"/>
                    </g>
                </svg>
                Beach
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition hover:border-gray-200">
                <svg width="50" height="50" viewBox="0 0 15 15">
                    <path fill="currentColor" d="m13 5.76l.59.43c.78.57.38 1.81-.59 1.81v1c.55 0 1 .45 1 1s-.45 1-1 1v1c.55 0 1 .45 1 1s-.45 1-1 1H9v-4H6v4H2c-.55 0-1-.45-1-1s.45-1 1-1v-1c-.55 0-1-.45-1-1s.45-1 1-1V8c-.97 0-1.37-1.24-.59-1.81l5.5-4c.35-.25.83-.25 1.18 0L11 4.31V1h2zM3 8v1h9V8zm9 3h-2v1h2zm-9 0v1h2v-1zm4.5-6.76L5.08 6h4.84z"/>
                </svg>
                Cabin
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition hover:border-gray-200">
                <svg width="50" height="50" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9 21v-9h8q0-.825.588-1.413T19 10q.825 0 1.413.588T21 12v9h-5v-5h-2v5H9Zm-6 0V8l13-5v7H7v11H3Z"/>
                </svg>
                Villas
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition hover:border-gray-200">
                <svg width="50" height="50" viewBox="0 0 1024 1025">
                    <path fill="currentColor" d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H640V737q0-13-9.5-22.5T608 705H416q-13 0-22.5 9.5T384 737v288H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19q20-20 49-19q29-1 49 19l444 444q19 19 19 46.5t-19.5 47z"/>
                </svg>
                Tiny Homes
            </div>


        </div>
    )
}
export default Categories;