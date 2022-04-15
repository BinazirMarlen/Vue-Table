<template>
    <div class="edit">
        <div class="form-control">
            <input 
            type="text" 
            v-model="city" name="text" 
            placeholder="Город"
            @keyup.enter="editInput(dat.City)" />
        </div>
        <div class="form-control">
            <input
                type="number"
                v-model="gAmount"
                placeholder="Общее кол."
                @keyup.enter="editInput(dat.totalAmount)"
            />
        </div>
        <div class="form-control">
            <input 
                type="number" 
                v-model="fAmount" name="number" 
                placeholder="Факт кол."
                @keyup.enter="editInput(dat.actualAmount)" />
        </div>
    </div>
</template>

<script>
export default {
     name: "EditForm",
    data() {
        return {
        editData:{
            city: '',
            gAmount: '',
            fAmount: ''
            }    
        }
    },
}
</script>

<style>
.edit{
    display: flex;
}
input{
    border: none;
    padding: 5px 18px;
    border-bottom: 1px solid grey;
    margin: 0 6px 50px 2px;
}
</style>