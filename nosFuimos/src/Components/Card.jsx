import React from 'react'

const Card = () => {
    return (
        <div>
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 sm:h-3/4">
                <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                    alt=""
                    class="h-full w-full object-cover object-center"
                />
            </div>
            <div>
                <div class="mt-4">
                    <div class="">
                        <div class="flex justify-between">
                            <h3 class="text-base text-[#222222] font-semibold truncate">
                                La Calera, Colombia
                            </h3>
                            <div class="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="12"
                                    width="13.5"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="#222222"
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                    />
                                </svg>
                                <p class="text-base font-medium text-gray-900">4.5</p>
                            </div>
                        </div>

                        <p class="text-base font-light text-[#717171] truncate">
                            A 20 kilómetros de distancia
                        </p>
                        <p class="text-base font-light text-[#717171] truncate">
                            18 - 23 de feb
                        </p>
                        <p class="text-base font-medium text-[#222222] mt-1 truncate">
                            $292.000 COP noche
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card