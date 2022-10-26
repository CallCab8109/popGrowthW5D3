function nbYear (population, percentage, newPeople, goalPeople) {
    let p1 = population
    let years = 0
    while(p1 < goalPeople) {
         let p2 = p1 + p1 * (percentage / 100) + newPeople 
         p1 = p2
        years ++
 }
         return years
}

console.log(nbYear(1500, 2.5, 100, 99999999999999999999999999999))