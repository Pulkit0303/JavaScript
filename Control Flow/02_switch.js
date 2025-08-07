//Syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 1
switch (month) {
    case 1:
        console.log("1: Janurary")
        break;
    case 2:
        console.log("2: February");
        break;
    case 3:
        console.log("3: March")
        break;

    default:
        console.log("Wrong Input limit is 3!")
        break;
}
const monthWrd = "jan"
switch (monthWrd) {
    case "jan":
        console.log("1: Janurary")
        break;
    case "feb":
        console.log("2: February");
        break;
    case "mar":
        console.log("3: March")
        break;

    default:
        console.log("Wrong Input limit is 3!")
        break;
}