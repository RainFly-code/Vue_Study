品牌管理
<template>
    <h1>品牌管理系统</h1>
    <div class = "brandMange">
        <h4>品牌管理</h4>
        <table border="1" width="800px">
            <thead>
                <tr>
                    <th>选择</th>
                    <th>编号</th>
                    <th>品牌名称</th>
                    <th>价格</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- 列表循环中，有key会根据dom标签的变化而变化，无key会固定在当前的dom标签上 -->
                <tr v-for="(item,index) in brandList" :key="item.id">
                    <td><input type="checkbox"></td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.brandName }}</td>
                    <td :class="{priceColor:item.price > 600}">{{ item.price }}</td>
                    <td>{{ item.time}}</td>
                    <td> <a href="#" @click="delBrand(item.id)">删除</a></td>
                </tr>
            </tbody>
            <tfoot>
                <tr v-show="brandList.length == 0">
                    <td colspan="6" class="nullData">暂无数据</td>
                </tr>
            </tfoot>
        </table>
        <h4>添加品牌</h4>
        <form action="#" class="forms">
            <span>品牌名称</span>
            <input type="text" v-model="brandName" placeholder="请输入品牌名称"><br>
            <span>品牌价格</span>
            <input type="number" v-model="brandPrice" placeholder="请输入价格"><br>
            <button class="btns" @click="addBrand"  >添加品牌</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const brandName = ref('')
const brandPrice = ref(0)
const brandList = ref([
    {id:1,brandName:'小米',price:1000,time:new Date("2023-10-01")},
    {id:2,brandName:'华为',price:200,time:new Date("2023-10-02")},
    {id:3,brandName:'苹果',price:300,time:new Date("2023-10-03")},
    {id:4,brandName:'三星',price:400,time:new Date("2023-10-04")},
    {id:5,brandName:'魅族',price:500,time:new Date("2023-10-05")},
    {id:6,brandName:'OPPO',price:600,time:new Date("2023-10-06")},
    {id:7,brandName:'VIVO',price:700,time:new Date("2023-10-07")},
])
//添加品牌
const addBrand = () => {
    console.log(brandName.value,brandPrice.value)
    if(brandName.value.trim().length == 0|| brandPrice.value <= 0){
        alert('请输入合法品牌名称和价格')
        return
    }
    //获取当前添加商品id
    const id = brandList.value.length > 0 ? brandList.value[brandList.value.length-1].id + 1 : 101;
    const newBrand = {
        id: id,
        brandName: brandName.value,
        price: brandPrice.value,
        time: new Date()
    }
    brandList.value.push(newBrand)
    brandName.value = ''
    brandPrice.value = 0
}
//删除品牌
const delBrand = (id) => {
    console.log(brandList.value.findIndex(item => item.id === id))
    let index = brandList.value.findIndex(item => item.id === id)
    if(index !== -1){
        brandList.value.splice(index,1)
    }else{
        alert('删除失败')
    }
}
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 20px;
    color: #72bfe0;
}
.brandMange{
    border: 1px solid #72bfe0;
    width: 100%;
    h4{
        text-align: center;
    }
    tbody{
        text-align: center;
    }
    table{
        width: 80%;
        margin-left: 10%
    };
}
h4{
    margin-top: 20px;
    margin-bottom: 10px;
    color: #72bfe0;
}
.forms{
    margin-left: 40%;
    margin-top: 10px;
    span{
        display: inline-block;
        width: 80px;
    }
    input{
        width: 200px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #72bfe0;
        margin-top: 10px;   
    }
     .btns{
        margin-left: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100px;
        height: 30px;
        background-color: #72bfe0;
        color: white;
        border-radius: 5px;
        border: none;
    }
}
.priceColor{
    color: red;
}
.nullData{
    text-align: center;
    color: #72bfe0;
    font-size: 20px;
    font-weight: bold;
}

</style>