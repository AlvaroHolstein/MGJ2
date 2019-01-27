console.log(new Date().getTime()
)
console.log(new Date("2019/02/17").getTime()
)

console.log(new Date("2019/02/17").getTime() - new Date().getTime()
)

let agora = new Date().getTime()
let depois = new Date("2019/02/17").getTime()

console.log(agora - depois)
let dias = depois-agora
console.log(Math.ceil(dias/86400000))