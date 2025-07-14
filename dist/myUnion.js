"use strict";
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// arrray
const data = [1, 2, 3, 4];
const data2 = [1, 2, 3, "4"];
let allotment;
allotment = "bach";
// tuple
let tUser;
tUser = ["fas", 111, true];
// enums
var Seatchoice;
(function (Seatchoice) {
    Seatchoice[Seatchoice["Aisle"] = 10] = "Aisle";
    Seatchoice[Seatchoice["Middle"] = 22] = "Middle";
    Seatchoice[Seatchoice["window"] = 23] = "window";
    Seatchoice[Seatchoice["fourth"] = 44] = "fourth";
})(Seatchoice || (Seatchoice = {}));
const hseat = Seatchoice.Middle;
const dave = { email: "d@d.com", id: 73838,
    setTrial: () => {
        return "i am him";
    },
    getCoupon: (name, off) => {
        return 10;
    },
};
