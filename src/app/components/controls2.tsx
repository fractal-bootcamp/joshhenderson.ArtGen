import { Dispatch, SetStateAction } from "react";

type Controls2Props = {
    setIntensity: Dispatch<SetStateAction<number>>,
    setBackgroundColor: Dispatch<SetStateAction<string>>,
    setColor: Dispatch<SetStateAction<string>>,
    setTitle: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
}

function Controls2(props: Controls2Props) {

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-md shadow-md">
            <label className="flex flex-col">
                <span className="font-semibold">Intensity 0-1</span>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    className="mt-1"
                    onChange={(e) => props.setIntensity(Number(e.target.value))}
                />
            </label>
            <label className="flex flex-col">
                <span className="font-semibold">Background Color</span>
                <input
                    type="color"
                    className="mt-1"
                    onChange={(e) => {
                        props.setBackgroundColor(e.target.value)
                        console.log(e.target.value)
                    }}
                />
            </label>
            <label className="flex flex-col">
                <span className="font-semibold">Color</span>
                <input
                    type="color"
                    className="mt-1"
                    onChange={(e) => props.setColor(e.target.value)}
                />
            </label>
            <label className="flex flex-col">
                <span className="font-semibold">Title</span>
                <input
                    type="text"
                    className="mt-1 p-1 border rounded text-black"
                    onChange={(e) => props.setTitle(e.target.value)}
                />
            </label>
            <label className="flex flex-col">
                <span className="font-semibold">Description</span>
                <input
                    type="text"
                    className="mt-1 p-1 border rounded text-black"
                    onChange={(e) => props.setDescription(e.target.value)}
                />
            </label>
        </div>
    );
}

export default Controls2;