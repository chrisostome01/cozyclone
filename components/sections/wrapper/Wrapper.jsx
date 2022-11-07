export default function Wrapper({ children , className }) {
    return (
        <div className={`mx-auto max-w-87 ${className} px-[20px]`}>
            {children}
        </div>
    );
}