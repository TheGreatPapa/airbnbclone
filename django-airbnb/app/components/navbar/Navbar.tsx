import Image from 'next/image';
import Link from 'next/link';

import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import AddPropertyButton from './AddPropertyButton';

const Navbar = () => {
    return(
        <nav className="w-full sticky top-0 py-6 border-b-2 border-gray-100 bg-white z-10">
            <div className="max-w-[1500] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                    <Image
                    src="/images.jpg"
                    alt="cj sonriendo"
                    width={180}
                    height={38}
                    />
                    </Link>
                <div className="flex space-x-6">
                    <SearchFilters/>
                </div>

                <div className="flex items-center space-x-6">
                    <AddPropertyButton/>
                    <UserNav/>
                </div>

                </div>
            </div>
        </nav>

    )
}
export default Navbar;
