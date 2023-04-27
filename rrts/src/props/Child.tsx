interface ChildProps {
    color: string,
    onClick: () => void,
}

export const Child: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
}