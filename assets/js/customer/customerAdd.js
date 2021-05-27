	
	import BiaofunRegion from '@/components/biaofun-region/biaofun-region.vue';
	export default {
		components: {
			BiaofunRegion 
		},
		data() {
			
			return {
				qudaoData:[
					{name:'分组一',id:1},
					{name:'分组二',id:2},
					{name:'分组三',id:3},
				],
				qudaoIndex:[0],
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
			takeChoseBtn(){
				this.$data.comboView = true;
			},
			bindComboChange(e){
				console.log(e.target.value)
			},
			cancelPickerBtn(){
				this.$data.comboView = false;
			},
			surePickerBtn(){
				this.$data.comboView = false;
			},
			
			
		}
	}