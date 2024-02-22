
import React from "react";

 const  App = ()=> {

  const repeatLog = (n, action) => {
    for (let i = 0; i < n; i++) {
      // console.log('actionI', i)
      action(i);
    }
  };

  let labels = [];
  repeatLog(5, (i) => {
    // console.log('i',i)
    labels.push(`Unit${i + 1}`);
  });

  // --------------------------------------------------

  const taskList = [
    {
      id: 0,
      title: "Buy Avocado",
      status: "pending",
      dueDate: "2020-05-31",
    },
    {
      id: 1,
      title: "Clean house",
      status: "complete",
      dueDate: "2020-05-21",
    },
    {
      id: 2,
      title: "Implement js Array filter",
      status: "pending",
      dueDate: "2019-05-21",
    },
  ];

  const Filter = (array, fn) => {
    let filterTask = [];
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        filterTask.push(array[i]);
      }
    }
    return filterTask;
  };
  const filter1 = Filter(
    taskList,
    (list) => list.status === "pending" && list.dueDate === "2020-05-31"
  );

  const filter2 = Filter(taskList, (list)=> list.id === 1)

  // console.log("filter1", filter1);
  // console.log("filter2", filter2);

  let array = [1, 2, 3];
  const a = array.reduce((accr, current) => console.log(accr, current));

  // console.log("a", a);

  const arr = [5, 7, 8, 1, 4]
  const sum =  arr.reduce((accr, current)=>{
    return accr + current
  },10)
  
  // console.log('sum',sum)

  const persons = [
    {
    name:'pp',
    age:16
    },
    {
      name:'aa',
      age:18
      },
    {
        name:'cc',
        age:27
    },
]
const filter = persons.filter((i)=>i.age >= 18 )
console.log('filter',filter)

const birthYear = [1975, 1997, 2002,1995, 1985]
const age = birthYear.map((i)=>2023 - i)
console.log('age',age)

const arr1 = [1,2,3]
const d = arr1.map((i)=>i*2)
console.log('d', d)

  
const data = [
  129561,
  125433,
  97919,
]
  
const result = data.map((i)=>Math.floor(i/3)-2).reduce((acc, current)=>acc+current)
  
console.log('result',result)


  
  
  
  return (
    <>
    </>
  );
}
export default App