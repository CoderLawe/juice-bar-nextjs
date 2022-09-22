
const MenuItem = () => {
    return(
        <div className="flex-col ">
            {/* Menu Item */}
            <div className="flex space-x-8 justify-between items-center lg:max-w-[550px]">
                <p className="text-lightYellow font-Cormorant text-[18px] lg:text-[25px]">Mango Smoothie on Ice</p>

                <div className="w-[140px] h-[0.02em] bg-lightYellow"/>

                <p className="text-gray-300 font-Cormorant text-[25px]">$32</p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[18px] text-sm font-serif mt-6  leading-6 font-light">Mango smoothie with a touch of whipped cream</p>
        </div>
    )
}

export default MenuItem