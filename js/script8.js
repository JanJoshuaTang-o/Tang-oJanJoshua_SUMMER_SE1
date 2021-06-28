let mySchool = {name: "UST", location: "Manila", population: "40000"}
function offer(courses){
    return "UST offers architecture, nursing, information systems, ....";
}
mySchool = offer.bind("courses");
