<template>
    <div class="app-home">
        <ul class="icons">
            <router-link v-for="(item,index) in icons" :to="'/list/type/' + item.id" :key="index" tag="li">
                <img :src="'img/icon/' + item.img" alt="">
                <p>{{item.text}}</p>
            </router-link>
        </ul>
        <!--广告模块-->
        <ul class="ad">
            <router-link v-for="(item,index) in ad" :key="index" tag="li" :to="'/detail/' + item.id">
                <h3 :class="'class-' + index">{{item.title}}</h3>
                <p>{{item.description}}</p>
                <img :src="'img/ad/' + item.url" alt="">
            </router-link>
        </ul>
        <!--列表模块-->
        <div class="like">
            <h2 class="title">猜你喜欢 </h2>
            <ul class="items">
                <router-link v-for="(item,index) in list" :key="index" tag="li" :to="'/detail/' + item.id">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data:function(){
            return {
                icons:[
                    {img:"01.png",text:"美食",id:1},
                    {img:"02.png",text:"电影",id:2},
                    {img:"03.png",text:"酒店",id:3},
                    {img:"04.png",text:"休闲",id:4},
                    {img:"05.png",text:"外卖",id:5},
                    {img:"06.png",text:"KTV",id:6},
                    {img:"07.png",text:"周边游",id:7},
                    {img:"08.png",text:"丽人",id:8},
                    {img:"09.png",text:"小吃",id:9},
                    {img:"10.png",text:"火车票",id:10}
                ],
                //广告数据
                ad:[],
                //商品数据
                list:[],
            }
        },
        //组件创建完成后发送请求
        created:function() {
                this.$http.get("data/home.json")
                //监听返回
                    .then(({data})=>{
                        console.log(data)
                        this.ad = data.ad
                        this.list = data.list
                    })
        }
    }
</script>

<style lang="scss" >
    //引入公共样式
    @import "../base.scss";
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    body,html{
        background:#efefef;
    }
    .app-home{
        .icons{
            @include clearfix();
            margin-bottom: 10px;
            padding-top:10px;
            background-color: #fff;
            li{
                float:left;
                width: 20%;
                text-align: center;
                img{
                    width: 60%;
                }
            }
            p{
                font-size: 12px;
                margin:5px 0;
            }
        }
    //广告样式
        .ad{
            display:flex;
            background-color: #fff;
            text-align: center;
            margin-bottom: 10px;
            li{
                flex:1;
                border-right: 1px solid #ccc;
                padding: 15px 0;
                &:last-child{
                    border: none;
                }
                h3{
                    font-size: 14px;
                }
                p{
                    font-size: 12px;
                    padding:5px 0
                }
                .class-0{
                    color: red;
                }
                .class-1{
                    color: green;
                }
                .class-2{
                    color: purple;
                }
            }

    }
    //猜你喜欢
        .like{
            background-color: #fff;
            .title{
                line-height: 35px;
                height: 35px;
                margin: 0 10px;
                border-bottom: 1px solid #ccc;
            }
            .items{
                @extend %items
            }

        }
}

</style>