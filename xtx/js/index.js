window.addEventListener('load', function () {
    // 电梯导航模块开始
    (function () {
        // 页面导航栏模块
        const nav = document.querySelector('.main_nav')
        const scrolls = document.querySelector('.scroll')
        // scrolls.style.paddingLeft = nav.offsetLeft + 'px'
        const section = document.querySelector('.section')
        window.addEventListener('scroll', function () {
            let n = document.documentElement.scrollTop
            if (n >= section.offsetTop) {
                scrolls.style.marginTop = 0
            } else {
                scrolls.style.marginTop = '-130px'

            }
        })
    })();

    (function () {
        // 获取电梯模块元素
        const xtx_elevator = document.querySelector('.xtx-elevator')
        // 获取滚动目标新鲜好物模块元素
        const xhw = document.querySelector('.xx_haowu')
        // 获取滚动目标元素得到新鲜好物模块的的scrollTop的值
        let n = xhw.offsetTop - 300
        window.addEventListener('scroll', function () {
            const y = document.documentElement.scrollTop
            if (y >= n) {
                xtx_elevator.style.opacity = 1
            } else {
                xtx_elevator.style.opacity = 0
            }
        })
        // 点击返回顶部按钮
        const backTop = document.querySelector('#backTop')
        backTop.addEventListener('click', function () {
            // let timer = setInterval(function () {
            //     if (document.documentElement.scrollTop <= 0) {
            //         clearInterval(timer)
            //     }
            //     document.documentElement.scrollTop = document.documentElement.scrollTop - 50
            // }, 1)
            document.documentElement.scrollTop = 0
        })
    })();
    (function () {
        // 获取电梯父级元素，使用事件委托
        const list = document.querySelector('.xtx-elevator-list')
        list.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && e.target.dataset.name) {
                // 移除选中类
                let odd = document.querySelector('.xtx-elevator-list .active')
                if (odd) {
                    odd.classList.remove('active')
                }
                // 添加类
                e.target.classList.add('active')
                // 点击那个小盒子，页面滚动到对应大盒子的位置
                document.documentElement.scrollTop = document.querySelector(`.${e.target.dataset.name}`).offsetTop - 50
            }
        })
    })();
    // 页面滚动到指定位置，对应的小盒子处于选中状态
    (function () {
        window.addEventListener('scroll', function () {
            // 先移除页面选中的active类
            let odd = document.querySelector('.xtx-elevator-list .active')
            if (odd) {
                odd.classList.remove('active')
            }
            // 获取四个大盒子元素
            const news = document.querySelector('.new')
            const popular = document.querySelector('.popular')
            const brand = document.querySelector('.brand')
            const topic = document.querySelector('.topic')
            let n = document.documentElement.scrollTop
            if (n >= news.offsetTop - 60 && n < popular.offsetTop - 60) {
                document.querySelector('[data-name=new]').classList.add('active')
            } else if (n >= popular.offsetTop - 60 && n < brand.offsetTop - 60) {
                document.querySelector('[data-name=popular]').classList.add('active')
            } else if (n >= brand.offsetTop - 60 && n < topic.offsetTop - 60) {
                document.querySelector('[data-name=brand]').classList.add('active')
            } else if(n>topic.offsetTop - 60){
                document.querySelector('[data-name=topic]').classList.add('active')
            }
        })
    })();
    // 电梯导航模块结束

    //  轮播图开始
    // 1获取元素
    var focus = this.document.querySelector('.focus')
    var ul = focus.querySelector('.carousel')
    var btnLeft = focus.querySelector('.prve')
    var btnRight = focus.querySelector('.next')
    var dots = focus.querySelector('.dots')
    var focusWidth = focus.offsetWidth;
    // 2鼠标经过focus，左右按钮隐藏和显示
    focus.addEventListener('mouseenter', function () {
        btnLeft.style.display = 'block'
        btnRight.style.display = 'block'
        clearInterval(timer);
        timer = null
    })
    focus.addEventListener('mouseleave', function () {
        btnLeft.style.display = 'none'
        btnRight.style.display = 'none'
        timer = setInterval(function () {
            btnRight.click()
        }, 2000)
    })
    // 3动态生成小圆点、
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li')
        dots.appendChild(li)
        li.setAttribute('Date-index', i)
        li.addEventListener('mouseenter', function () {
            for (var i = 0; i < dots.children.length; i++) {
                dots.children[i].className = ''
            }
            this.className = 'active'
            var index = this.getAttribute('Date-index')
            num = index
            d = index
            animate(ul, -index * focusWidth)
        })
    }
    dots.children[0].className = 'active'
    // 克隆第一张图片
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    // 4右侧按钮
    // 节流阀
    var flag = true
    var num = 0;
    var d = 0
    btnRight.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == ul.children.length - 1) {
                ul.style.left = 0
                num = 0
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true
            })
            // 小圆点跟随右按钮移动
            d++;
            if (d == dots.children.length) {
                d = 0;
            }
            for (var i = 0; i < dots.children.length; i++) {
                dots.children[i].className = ''
            }
            dots.children[d].className = 'active'
        }
    })
    // 左侧按钮
    btnLeft.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px'
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true
            })
            // 小圆点跟随右按钮移动
            d--;
            if (d < 0) {
                d = dots.children.length - 1
            }
            for (var i = 0; i < dots.children.length; i++) {
                dots.children[i].className = ''
            }
            dots.children[d].className = 'active'
        }
    })
    // 左侧按钮
    // 自动播放
    var timer = this.setInterval(function () {
        btnRight.click()
    }, 2000)
    // 轮播图结束
})
