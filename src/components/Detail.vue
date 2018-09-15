<template>
    <div>
        <div class="image-part">
            <img :src="'img/item/' + data.src" alt="">
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
        <div class="price-part">
            <span class="price">
                <strong>{{data.price}}元</strong>
            </span>
            <span class="origin">门市价:{{data.originPrice}}元</span>
            <span class="buy">立即购买</span>
        </div>
        <div class="sales-part">
            <div class="row">
                <div class="col">支持立即退货</div>
                <div class="col">支持随时退货</div>
            </div>
            <div class="row sales">
                <div class="col">销量{{data.sales}}</div>
            </div>
        </div>
        <div class="store-part module">
            <div class="module-header">店家信息</div>
            <div class="module-body">
                <p>{{data.storeName}}</p>
                <p>{{data.storeAddress}}</p>
            </div>
            <div class="module-footer">查看其他{{data.storeNum}}家分店</div>
        </div>
        <div class="buy-part module">
            <div class="module-header">购买须知</div>
            <div class="module-body">
                <ul class="list">
                    <li>
                        <h3>有效日期</h3>
                        <p>{{data.validateTime}}</p>
                    </li>
                    <li>
                        <h3>使用日期</h3>
                        <p>{{data.useTime}}</p>
                    </li>
                    <li>
                        <h3>使用规则</h3>
                        <p v-for="(item,index) in data.rules" :key="index">{{item}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data:function(){
            return {
                data:{}
            }
        },
        created:function () {
            this.$http.get("data/product.json",{
                params:{
                    id:this.$route.params.id
                }
            })
                //监听数据返回
                .then(({data})=>{
                    console.log(data)
                    this.data = data
                })
        },
        // beforeRouteEnter(){
        //     console.log("beforeRouteEnter",arguments)
        // }

    }
</script>

<style  lang="scss">
    @import "../base.scss";
    *{
        margin: 0;
        padding: 0;
    }
    .image-part{
        position: relative;
        img{

            width: 100%;
        }
        h1,p{
            position: absolute;
            left:10px;
            bottom:10px;
            color: #fff;
            font-size: 16px;
        }
        h1{
            bottom:35px;
            font-size: 28px;

        }

    }
    .price-part{
        height: 60px;
        font-size: 16px;
        background-color: #fff;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        .price{
            color: $navColor;
            margin-right: 10px;
           strong{
               font-size: 36px;
               font-weight: normal;
           }
        }
        .buy{
            float: right;
            background-color: #f40;
            color: #ffffff;
            padding: 5px 10px;
            font-size: 12px;
            margin-top:17px;
        }
    }
    .sales-part{
        padding: 10px 0;
        background-color: #fff;
        margin-bottom: 10px;
        .row{
            display:flex;
            color: yellowgreen;
            .col{
                flex: 1;
                padding-left: 10px;
                line-height: 30px;
                height: 30px;
            }
            &.sales{
                color:#333;
            }
        }
    }
    .module{
        background-color: #fff;
        margin-bottom: 10px;
        padding: 10px;
        .module-header{
            height: 50px;
            line-height: 50px;
            font-size: 24px;
            border-bottom: 1px solid #ccc;
        }
        .module-body{
            padding: 10px 0;
            line-height: 30px;
            h3{
                line-height: 50px;
                color: #f90;
                font-weight: normal;
            }

        }
        .module-footer{
            line-height: 30px;
            height: 30px;
            border-top: 1px solid #ccc;
            color:skyblue;
            padding-top: 5px;
        }
    }

</style>