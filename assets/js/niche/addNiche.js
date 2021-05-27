	import xflSelect from '@/components/xfl-select/xfl-select.vue';

	export default {
		components: {
			xflSelect
		},
		data() {
			
			return {
				
				swiperHeight:'',
				comboView:false,
				indicatorStyle: `height: 30px;`,
				
				listBoxStyle: `height: 60rpx; font-size: 13px;`,
				list: [
					'苹果',
					{value: '香蕉', disabled: true},
					'葡萄',
					'芒果',
					'大白菜',
				],
				initValue:'',
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
			
			visibleChange(){
				
			},
			
		}
	}