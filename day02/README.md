



## 六、过渡(动画)

### 1. 简介
    Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果
    本质上还是使用CSS3动画：transition、animation

### 2. 基本用法
    使用transition组件，将要执行动画的元素包含在该组件内
        <transition>
            运动的元素
        </transition>       
    过滤的CSS类名：6个
    
### 3. 钩子函数
    8个

### 4. 结合第三方动画库animate..css一起使用
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
        <p v-show="flag">网博</p>
    </transition>    

### 5. 多元素动画
    <transition-group>    

### 6. 练习
    多元素动画    