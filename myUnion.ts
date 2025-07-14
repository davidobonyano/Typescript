function getId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}
// arrray

const data:number[] = [1,2,3,4];
const data2:(string| number)[] = [1,2,3,"4"]


let allotment:"bach" | "frr" | "gsgsb"

allotment = "bach"


// tuple


let tUser: [string, number, boolean]

tUser = ["fas", 111, true]

// enums
enum Seatchoice {
    Aisle = 10,
    Middle = 22,
    window,
    fourth = 44
}

const hseat = Seatchoice.Middle


// interface

interface User {
    email: string,
    id: number,
    setTrial: () => string,
    getCoupon(Couponname:string, value: number): number 
}

const dave:User ={email: "d@d.com", id: 73838,
    setTrial: () => {
        return "i am him"
    }   ,
    getCoupon:(name:"dave", off:10) => {
        return  10
    },
    }
