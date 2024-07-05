import { Dispatch, SetStateAction } from "react";

type Controls2Props = {
    setIntensity: Dispatch<SetStateAction<number>>,
    setBackgroundColor: Dispatch<SetStateAction<string>>,
    setColor: Dispatch<SetStateAction<string>>,
}

function Controls2(props: Controls2Props) {

    return (
        <div className="flex flex-col gap-2">
            <label>Intensity 0-1
                <input type="range" min="0" max="1" step="0.01" onChange={(e) => props.setIntensity(Number(e.target.value))} />
            </label>
            <label>Background Color
                <input type="color" onChange={(e) => {
                    props.setBackgroundColor(e.target.value)
                    console.log(e.target.value)
                }} />
            </label>
            <label>Color
                <input type="color" onChange={(e) => props.setColor(e.target.value)} />
            </label>
        </div>
    );
}

export default Controls2;