export default function Wrapper({ children , className }) {
    return (
        <div className={`mx-auto max-w-87  px-5 ${className}`}>
            {children}
        </div>
    );
}