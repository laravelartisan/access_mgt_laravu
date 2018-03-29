<template>
        <li :class="{parent_li: isFolder}" @dblclick="changeType">
            <i v-if="isFolder" @click="toggle" class="fa icon-open-state" :class='{"fa-plus-square-o": !open, "fa-minus-square-o": open}'></i>
            <router-link v-if="model.uri"  @click.native="collapseMenu" :to="{name: model.uri}" :title="model.name">{{model.name}}</router-link>
            <a href="javascript:void(0)" @click="collapseMenu" v-else  :title="model.name">{{model.name}}</a>
            <transition name="fade">
            <ul v-show="open" v-if="isFolder">
                <tree v-for="(child, index) in model.children" :key="index" :model="child"></tree>
            </ul>
            </transition>
        </li>
</template>
<script>
    export default {
        name:'tree',
        props: {
            model: Object
        },
        data: function () {
            return {
                open: false,
                folder:false,
            }
        },
        computed: {
            isFolder: function () {
                return this.folder = this.model.children &&
                        this.model.children.length;
            }
        },
        methods: {
            collapseMenu:function(){
                if (this.folder) {
                    this.toggle();
                }
            },
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                /*if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }*/
            },
            addChild: function () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        }
    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>