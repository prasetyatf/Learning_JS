// input: array
const barisAngka = [1,2,3,4]

// FOREACH 
// process: mengaplikasikan fungsi ke setiap nilai
// output: undefined

const forits = barisAngka.forEach((value, index, arr) => {
    return value+1
})
console.log(`forEach: ${forits}`)


// MAP
// process: mengaplikasikan fungsi ke setiap nilai
// output: array

const mep = barisAngka.map((value, index, arr) => {
    return value+1
})
console.log(`map: ${mep}`)


// FILTER
// process: mengecek semua nilai dengan kondisi tertentu
// output: array

const saring = barisAngka.filter((val, index, arr)=>{
    return val<4
})
console.log(`filter: ${saring}`)


// FIND
// process: mengecek nilai-nilai sampai memenuhi kodisi tertentu
// output: value

const cari = barisAngka.find((val, index)=>{
    return val > 2
})
console.log(`find: ${cari}`)


// REDUCE
// process: mengaplikasikan fungsi ke semua elemen untuk memproduksi satu value
// output: value

const REDUCE = barisAngka.reduce((totalPrevValue, value, index, arr)=>{
    return totalPrevValue + value
})
console.log(`reduce: ${REDUCE}`)


// EVERY (analogi logika AND)
// process: mengecek semua nilai sesuai kondisi tertentu
// output: boolean

const semua = barisAngka.every((val, index, arr)=>{
    return val > 1
})
console.log(`every: ${semua}`)


// SOME(analogi logika OR)
// process: mengecek semua nilai sesuai kondisi tertentu
// output: boolean

const beberapa = barisAngka.some((val, index, arr)=>{
    return val > 1
})
console.log(`some: ${beberapa}`)
