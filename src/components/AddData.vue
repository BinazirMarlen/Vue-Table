<template>
   <form @submit.prevent class="add-data">
    <div class="form-control">
      <input type="text" v-model="City" name="text" placeholder="Город" />
    </div>
    <div class="form-control">
      <input
        type="number"
        v-model="GAmount"
    
        placeholder="Общее кол."
      />
    </div>
     <div class="form-control">
      <input type="number" v-model="FAmount" name="number" placeholder="Факт кол." />
    </div>
    <div class="add"> <button @click="onSubmit" name="number"  class="btn"> Добавить </button></div>
  </form>
</template>

<script>
export default {
    name: "AddData",
    data() {
        return {
            City: '',
            GAmount: '',
            FAmount: ''
        }
    },
    methods: {
        onSubmit() {
            // e.preventDefault()
            // if(!this.text) {
            //     alert('Введите данные !')
            //     return
            // }

            const newData = {
                City: this.City,
                GAmount: this.GAmount,
                FAmount : this.FAmount
            }

            this.$emit("add-data" , newData)

            this.City = '',
            this.GAmount = '',
            this.FAmount = ''
        }
    }
}
</script>

<style >
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    form{
        display: flex;
    }
    input{
        border: none;
        padding: 5px 18px;
        border-bottom: 1px solid grey;
        margin: 0 6px 50px 2px;
    }
    .add{
        margin-top: -20px;
        margin-right: 50px;
    }
  

</style>