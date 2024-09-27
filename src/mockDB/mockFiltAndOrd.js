import sneakers from "./mockDB";

// export default function filterAndOrder(checked) {
    
//     const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(key => checked.filtrosQuePaso.brands[key]).join(" || ")
//     const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(key => checked.filtrosQuePaso.sports[key]).join(" || ")
//     const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(key => checked.filtrosQuePaso.genders[key]).join(" || ")

//     const filteredSneakers = sneakers.filter(sneaker => {
//         return (
//             [`${sneaker.brand}`].includes(eval(brandsToApply)) && [`${sneaker.sport}`].includes(eval(sportsToApply)) && [`${sneaker.gender}`].includes(eval(gendersToApply))
//         )
//     })
//     console.log(filteredSneakers);
// }

export default function filterAndOrder(checked) {
    
    const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(key => checked.filtrosQuePaso.brands[key])
    const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(key => checked.filtrosQuePaso.sports[key])
    const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(key => checked.filtrosQuePaso.genders[key])

    const filteredSneakers = sneakers.filter(sneaker => {
        return (
            (brandsToApply.length ? brandsToApply.some(brandTA => brandTA === sneaker.brand) : true) && 
            (sportsToApply.length ? sportsToApply.some(sportTA => sportTA === sneaker.sport) : true) &&
            (gendersToApply.length ? gendersToApply.some(genderTA => genderTA === sneaker.gender) : true)
        )
    })

    const orderToApply = checked.ordenQuePaso.order
    let orderedSneakers =[]

    if (orderToApply) {
        orderedSneakers = filteredSneakers.sort((a,b) => {
            return orderToApply === "menor" ? a.price - b.price : b.price - a.price
        })
        console.log(orderedSneakers);
        return
    }

    console.log(filteredSneakers)
    return
}