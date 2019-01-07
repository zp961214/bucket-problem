const TheEnd = [5, 5, 0]
let MaxWater = [10, 7, 3]
let init = [10, 0, 0]
let side = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 0 },
  { from: 1, to: 2 },
  { from: 2, to: 0 },
  { from: 2, to: 1 }
]
function main(nowWater, arr = []) {
  for (let i = 0; i < 6; i++) {
    const nextside = side[i]
    const nextWater = delivery(nowWater, nextside, arr)
    if (nextWater) {
      arr.push(nextWater)
      if (JSON.stringify(nextWater) === JSON.stringify(TheEnd)) {
        console.log(arr)
        console.log('ok')
      } else {
        main(nextWater, arr)
      }
    }
  }
}

function delivery(nowWater, nextside, arr) {
  const nextWater = [...nowWater]
  let fromWater = nextWater[nextside.from]
  let toWater = nextWater[nextside.to]

  let sumWater = fromWater + toWater
  let toMax = MaxWater[nextside.to]
  let flag = sumWater > toMax
  let toWaterEnd = toWater + fromWater
  let finaltoWater = flag ? toMax : toWaterEnd
  let finalFromWater = sumWater - finaltoWater
  nextWater[nextside.from] = finalFromWater
  nextWater[nextside.to] = finaltoWater
  const flags = arr.some(v => JSON.stringify(v) === JSON.stringify(nextWater))
  return flags?'': nextWater;
}

main(init)
