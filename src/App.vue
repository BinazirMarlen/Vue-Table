<template>
<div>
   <Header title="Организационная структура"/>
   <div class="add">
         <button @click="onClick" :showAddData="showAddData" class="btn">Добавить </button>
   </div>
   <div v-show="showAddData">
   <AddData  @add-data="addData" />
   </div>
   <table>
   <thead>
     <th v-for="data in tdata" :key="data.id">
       <td>{{data.text}}</td>
     </th>
   </thead>
   <tbody>
      
     <tr v-for ="dat in data" :key="dat.id">
       <EditForm v-if="dat.isEditing"/>
       <template v-else>
          <td>{{dat.City}}</td>
          <td>{{dat.totalAmount}}</td>
          <td>{{dat.actualAmount}}</td>
       </template>
    
      <td>
        <button @click="onEdit" ><div class="img"><img src="./assets/edit.svg"></div></button>
        <button @click="onDelete(dat.id)" ><div class="img"> X </div></button>
      </td>
     </tr>
   </tbody>
   </table>
</div>
</template>

<script>
 import Header from './components/Header.vue'
 import AddData from './components/AddData.vue'
 import EditForm from './components/EditForm.vue'
 import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'App',
  data: ()=>{
    return {
       tdata: [
      {id: 1, text: "Города"},
      {id: 2, text: "Общее количество"},
      {id: 3, text: "Фактическое Количество"},
      {id: 4, text: "Действия"}
    ],
    showAddData : false,
     data: [
      {
        id: 1,
        City: "Astana",
        totalAmount: "100",
        actualAmount: "15",
        Actions: ["edit", "delete"],
        isEditing: false
      },
      {
        id: 2,
        City: "Almaty",
        totalAmount: "140",
        actualAmount: "20",
        Actions: ["edit", "delete"],
        isEditing: false
      },
      {
        id: 3,
        City: "Aktau",
        totalAmount: "50",
        actualAmount: "5",
        Actions: ["edit", "delete"],
        isEditing: false
      },
]
    }
  },
  components: {
    Header, AddData, EditForm
  },
  methods: {
    onClick() {
      this.showAddData = !this.showAddData
    },
    addData(data) {
      this.data=[...this.data, data]
    },
    onDelete(id){
      this.data = this.data.filter((dat)=>dat.id !==id)
    },
    onEdit() {
      this.data.isEditing = !this.data.isEditing
      // this.data= this.data.map((dat)=>{
      //   dat.City=editData.city,
      //   dat.totalAmount=editData.gAmount,
      //   dat.actualAmount=editData.fAmount
      // })
    }
  }
  // computed: mapState(["allData", "TData"])
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.add{
  width: 100%;
  background: #fff;
  padding: 30px;
  display: flex;
  justify-content: start;
}

.btn{
  background: rgb(213, 207, 207);
  padding: 5px 18px;
  border-radius: 4px;
  border: none;
}

td{
  padding: 10px 45px;
  border-bottom: 1px solid rgb(168, 162, 162)  !important ;
  border-collapse: collapse;
}
img{
  max-width: 10px;
  max-height: 10px;
}
button{
  margin-right: 5px;
}

</style>
