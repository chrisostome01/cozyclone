export default function Button({ children , className }) {
    return (
        <button className={`font-geomanist leading-[1.1em] bg-cozy-gray-600 bg-hero text-cozy-gray-100 px-[40px] py-[30px] text-lg  font-bold md:text-[20px] uppercase tracking-[2px] rounded-[10px] bg-3.1 ${className}`}>
            {children}
        </button>
    )
}