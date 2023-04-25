import {sum, Button} from "./ui";

import fish from '/fish.svg';
function App() {
    const handleClick = () => {
        console.log(sum(4, 2))
    }

    return (
        <>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <Button onClick={handleClick} color='red'>Viteeeeee</Button>
            <img src={fish} width={50} height={50}/>
            <img src={fish} width={50} height={50}/>
            <img src={fish} width={50} height={50}/>
        </>
    )
}

export default App
