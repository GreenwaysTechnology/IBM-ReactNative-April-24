import { Hello } from '../hello/Hello'
import { Hai } from '../hai/Hai'

const Greeter = () => {
    return <>
        <Hello />
        <Hai />
    </>
}

export { Greeter }