import React from 'react'

const SearchButton = () => {
    return (
        <form class="min-w-[90vw] sm:min-w-[34rem]">
            <div class="relative">
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-3 ps-10 text-sm font-light text-[#717171] border border-[#ebebeb] rounded-full bg-white hover:bg-[#ebebeb] shadow-md focus:bg-white focus:outline-none"
                    placeholder="Explora destinos"
                    required
                />
                <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2 bg-[#ebebeb] font-medium rounded-full px-2 py-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#ffffff"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default SearchButton