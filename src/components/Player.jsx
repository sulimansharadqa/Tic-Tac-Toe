import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [currentName, setCurrentName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);


    function handleNameChange(e) {
        setCurrentName(e.target.value);
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ?
                    <input type="text" placeholder={currentName} required value={currentName} onChange={handleNameChange} />
                    :
                    <span className="player-name">{currentName}</span>
                }

                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={() => {
                setIsEditing((wasEditing) => !wasEditing)
                if (isEditing) {
                    onChangeName(symbol, currentName)
                }
            }
            }>{isEditing ? "Save" : "Edit"}</button>


        </li>
    )
}