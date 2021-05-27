	

	export default {
		components: {
			
		},
		data() {
			
			return {
				
				swiperHeight:'',
				comboView:false,
				indicatorStyle: `height: 30px;`,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => { // 需要使用箭头函数，swiper 高度才能设置成功
					// 获取swiperHeight可以获取的高度，窗口高度减去导航栏高度
					this.swiperHeight = res.windowHeight + 'px'
				}
			});
		},
		methods: {
			
			
			
		}
	}