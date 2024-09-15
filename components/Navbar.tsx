import Link from "next/link"
function Navbar(){
    return(
        <>
        <ul className="flex justify-center items-center gap-4">
            <li>
                <Link href='/category/home'className="bg-blue-400">Home</Link>
                </li>
            <li>
                <Link href='/category/about'className="bg-purple-400">About</Link>
                </li>
            <li>
                <Link href='/category/contact'className="bg-orange-400">Contact</Link>
                </li>
            <li>
                <Link href='/category/feedback'className="bg-green-400">Feedback</Link>
                </li>
        </ul>
        </>
    );
};

export default Navbar;