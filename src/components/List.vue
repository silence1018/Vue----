<template>
    <div class="list">
        <ul class="order">
            <li v-for="item in order" :key="item.id" @click="orderList(item.id)">
                <span>{{item.text}}</span>
                <span class="arrow">

                </span>
            </li>
        </ul>
        <ul class="items">
            <router-link tag="li" v-for="(item,index) in dealList" :key="index" :to="'/detail/' + item.id">
                <img :src="'img/list/' + item.img" alt="">
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>
                        <span class="price">{{item.price}}元</span>
                        <span class="origin">门市价:{{item.originPrice}}元</span>
                        <span class="sales">销量:{{item.sales}}</span>
                    </p>
                </div>
            </router-link>
        </ul>
        <div class="load-more"  v-show="others.length" @click="loadMore">
            <span  class="tetx" >查看其它{{others.length}}条团购</span>
            <span class="arrow">
                <span class="arrow white"></span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data:function () {
            return {
                order:[
                    {id:"price",text:"价格排序"},
                    {id:"sales",text:"销量排序"},
                    {id:"evaluate",text:"好评排序"},
                    {id:"count",text:"优惠排序"}
                ],
                //商品列表数据
                list:[],
                //
                others:[]
            }
        },
        methods:{
            loadMore:function() {
                //将ohers中的数据加入list中
                this.list = this.list.concat(this.others)
                //清空others
                this.others=[]

             },
            orderList:function(id) {
                console.log(id)

                this.list.sort(function(a,b){
                    if(id == "count"){
                        return (b.originPrice-b.price) - (a.originPrice - a.price)
                    }else{
                        //升序
                        return b[id] - a[id]
                    }

                })

            }
        },
        computed:{
            dealList(){
                //过滤数组
                //每个数组成员包含store中的word
                return this.list.filter((item)=>{
                    return item.title.indexOf(this.$store.state.word)>=0
                })
            }
        },
        //组件创建完毕，发送请求
        created() {
            //该路径是从index.html出发
            this.$http.get(`/data/list.json?id=${this.$route.params.id}`)
            //监听数据返回
                .then(({data})=>{
                    console.log(data)
                    //list只存储前三个
                    this.list = data.slice(0,3)
                    //others存储剩余的
                    this.others = data.slice(3)
                })
        }
    }
</script>

<style scoped lang="scss">
    //引入公共样式
    @import "../base.scss";
    .order{
        display:flex;
        background-color: #fff;
        li{
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            flex:1;
            text-align: center;
            height: 30px;
            line-height: 30px;
            font-size: 10px;
            &:last-child{
                border-right: none;
            }
            .arrow{
                @include arrow(4px);
                position: relative;
                left: 7px;
                top: -2px;
            }
        }
    }
    .items{
        background-color: #fff;
        @extend %items;
    }
    .load-more{
        background-color: #fff;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        color: $navColor;
        .arrow{
            @include arrow(10px,$navColor);
            position: relative;
            left:3px;
            .white{
                border-top-color:#fff;
                position: absolute;
                left:-10px;
                top:-13px;
            }
        }
    }


</style>