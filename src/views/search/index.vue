<script lang="ts" setup>
import baidu from '/@/icons/search/baidu.svg'
import gitee from '/@/icons/search/gitee.svg'
import github from '/@/icons/search/github.svg'
import google from '/@/icons/search/google.svg'
import npm from '/@/icons/search/npm.svg'

const searchOptions = [
    {
        icon: baidu,
        title: 'baidu',
        text: '百度',
        url: 'https://www.baidu.com/s?wd='
    },
    {
        icon: google,
        title: 'google',
        text: '谷歌',
        url: 'https://www.google.com.hk/search?q='
    },
    {
        icon: gitee,
        title: 'gitee',
        text: '码云',
        url: 'https://search.gitee.com/?q='
    },
    {
        icon: github,
        title: 'github',
        text: 'Github',
        url: 'https://github.com/search?q='
    },
    {
        icon: npm,
        title: 'npm',
        text: 'NPM',
        url: 'https://www.npmjs.com/search?q='
    }
]
const searchType = ref(searchOptions[0])
const keywords = ref('')
function handleSearch() {
    const url: string = `${searchType.value.url}${keywords.value}`
    window.open(url)
}
function handleChange(nav) {
    searchType.value = nav
}
</script>

<template>
    <div class="search-container">
        <div class="search-wrapper">
            <div class="search-type">
                <img style="height: 80px;" :src="searchType.icon" alt="">
            </div>
            <n-input-group>
                <n-input v-model:value="keywords" @keydown.enter="handleSearch" placeholder="请输入搜索内容" />
                <n-button type="primary" @click="handleSearch">
                    搜索
                </n-button>
            </n-input-group>
            <div class="search-class">
                <span class="search-class_item" :class="searchType.title === nav.title && 'active'" v-for="nav in searchOptions" :key="nav.title" @click="handleChange(nav)">{{ nav.text }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .search-wrapper {
        width: 500px;
        height: 500px;
        .search-type {
            text-align: center;
            margin-bottom: 20px;
        }
        .search-class {
            margin-top: 10px;
            &_item {
                margin-right: 20px;
                cursor: pointer;
                
                &.active {
                    text-decoration: underline;
                    color: #2080F0;
                }
                &:last-child {
                    margin: 0;
                }
            }
        }
    }
}
</style>