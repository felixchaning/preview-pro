import Mock from "@tenbyten/mockjs"

export const dataA = [
  { type: "分类一", value: 27 },
  { type: "分类二", value: 25 },
  { type: "分类三", value: 18 },
  { type: "分类四", value: 15 },
  { type: "分类五", value: 10 },
  { type: "其他", value: 5 }
]

export const dataB = [
  {
    year: "1991",
    value: 3,
    type: "男"
  },
  {
    year: "1992",
    value: 4,
    type: "男"
  },
  {
    year: "1993",
    value: 3.5,
    type: "男"
  },
  {
    year: "1994",
    value: 5,
    type: "男"
  },
  {
    year: "1995",
    value: 4.9,
    type: "男"
  },
  {
    year: "1996",
    value: 6,
    type: "男"
  },
  {
    year: "1997",
    value: 7,
    type: "男"
  },
  {
    year: "1998",
    value: 9,
    type: "男"
  },
  {
    year: "1999",
    value: 13,
    type: "男"
  },
  {
    year: "1991",
    value: 3,
    type: "女"
  },
  {
    year: "1992",
    value: 4,
    type: "女"
  },
  {
    year: "1993",
    value: 3.5,
    type: "女"
  },
  {
    year: "1994",
    value: 5,
    type: "女"
  },
  {
    year: "1995",
    value: 4.9,
    type: "女"
  },
  {
    year: "1996",
    value: 6,
    type: "女"
  },
  {
    year: "1997",
    value: 7,
    type: "女"
  },
  {
    year: "1998",
    value: 9,
    type: "女"
  },
  {
    year: "1999",
    value: 13,
    type: "女"
  }
]

export const dataC = [
  {
    type: "街道一",
    sales: 38
  },
  {
    type: "街道二",
    sales: 52
  },
  {
    type: "街道三",
    sales: 61
  },
  {
    type: "街道四",
    sales: 145
  },
  {
    type: "街道五",
    sales: 48
  },
  {
    type: "街道六",
    sales: 38
  },
  {
    type: "街道七",
    sales: 38
  },
  {
    type: "街道八",
    sales: 38
  }
]

export const makeTableData = () => {
  const arr = []
  for (let i = 0; i < 5; i++) {
    arr.push({
      rank: Mock.Random.increment(),
      name: Mock.Random.cname(),
      level: Mock.Random.ctitle(2),
      area: Mock.Random.ctitle(),
      count: Mock.Random.integer(0, 100)
    })
  }
  return arr
}

export const dataSourceA = makeTableData()

export const dataSourceB = makeTableData()
