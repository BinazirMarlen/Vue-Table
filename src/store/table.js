
// const state = {
//     tdata: [
//       {id: 1, text: "Города"},
//       {id: 2, text: "Общее количество"},
//       {id: 3, text: "Фактическое Количество"},
//       {id: 4, text: "Действия"}
//   ],
//     data: [
//       {
//         id: 1,
//         City: "Astana",
//         totalAmount: "100",
//         actualAmount: "15",
//         Actions: ["edit", "delete"]
//       },
//       {
//         id: 1,
//         City: "Almaty",
//         totalAmount: "140",
//         actualAmount: "20",
//         Actions: ["edit", "delete"]
//       },
//       {
//         id: 1,
//         City: "Aktau",
//         totalAmount: "50",
//         actualAmount: "5",
//         Actions: ["edit", "delete"]
//       },
// ]
    
// };

// const getters = {
//   allData: state => state.data,
//   TData: state => state.tdata
// };


// const mutations = {
//   addData(state, dat) {
//     state.data=[...state.data, dat]
//   },

//   onClick(state) {
//     state.showAddData = !state.showAddData
//   },

//   onDelete: (state, id) =>
//     (state.data = state.data.filter(dat => dat.id !== id)),
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// };