// import { Hello } from '../hello/Hello'
import { Hai } from '../hai/Hai'
// import { Hai } from '../hai' // just folder name only
import { Hello } from '../hello'
const Greeter = () => {
    return <>
        <Hello />
        <Hai />
    </>
}

export { Greeter }