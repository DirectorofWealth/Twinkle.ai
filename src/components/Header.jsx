function Header(){
    return(
        <>
        <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
            <h1 className="font-bold">Twikle.ai</h1>
            <ul className="flex justify-align items-center gap-6">
                <li><a href="">Platform</a></li>
                <li><a href="">Customers</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Resources</a></li>
            </ul>

            <ul className="flex justify-align items-center gap-6">
                <li><a href="">Sign In</a></li>
                <li><a href="" className="bg-black rounded-full px-4 py-2 text-white">Get a Demo</a></li>
            </ul>
        </nav>
        </>
    )
}
export default Header