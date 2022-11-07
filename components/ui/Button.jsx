export default function Button({ children }) {
    return (
        <button className="bg-[#b55730] text-[#e4ded5] px-[40px] py-[30px] leading-4 font-bold text-[20px] uppercase tracking-[2px] rounded-[10px]">
            {children}
        </button>
    )
}