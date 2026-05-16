import Image from "next/image";
const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    className="hover:scale-110 object-cover transition h-full w-full"
                    fill
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    src="/beach.png"
                    alt="beach"
                >

                </Image>
            </div>
            <div className="mt-2">
                <p className="text-lg font-bold">Property name</p>

            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">200$ per night</p>

            </div>
        </div>
    )
}
export default PropertyListItem;