import BlenderIcon from '@mui/icons-material/Blender';
const Nav = () => {
    return(
    <nav className="flex justify-between bg-black/80 px-10 py-2 z-50">
        {/* Left side */}

        <div className="flex space-x-8 py-8 z-50">
        <BlenderIcon className="h-32 w-32 text-green-800"/>

            <p className="font-serif text-sm text-gray-200">HOME</p>
            <p className="font-serif text-sm text-gray-200">HOME</p>
            <p className="font-serif text-sm text-gray-200">HOME</p>
            <p className="font-serif text-sm text-gray-200">HOME</p>

        </div>
        {/* Right side */}

        <div>
            {/* <BlenderIcon className="h-32 w-32 text-green-800"/> */}
        </div>

    </nav>
    )
}

export default Nav