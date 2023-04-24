import {sum, Button} from "./ui";

function App() {
    const handleClick = () => {
        sum(4, 2);
    }

    return (
        <>
            <Button onClick={handleClick} color='red'>Vite</Button>
        </>
    )
}

export default App
