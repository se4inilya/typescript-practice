import { useRef, useState, useEffect } from "react";

const users = [
    {name: "Sarah", age: 20},
    {name: "Mike", age: 20},
    {name: "Alex", age: 20}
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(!inputRef.current) return;
        inputRef.current.focus()
    }, [])

    const onClick = () => {
        const foundUser = users.find((el) => el.name === name);
        setUser(foundUser);
        
    };
    return <div>
        <h3>User Search</h3>

        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>

        <div>
            {user && user.name}
        </div>
    </div>
}

export default UserSearch;