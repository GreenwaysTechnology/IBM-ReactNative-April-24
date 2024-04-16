import { firstName, lastname } from "./util.js";
import Greeter from "./components/Greeter.js";

function main() {
    console.log(firstName, lastname)
    let greeter = new Greeter()
    console.log(greeter.getMessage())
}
main()