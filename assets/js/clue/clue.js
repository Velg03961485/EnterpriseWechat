	
	import BiaofunRegion from '@/components/biaofun-region/biaofun-region.vue';
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import CitySelect from '@/components/xfl-select/citySelect.vue';
	const cityData = require('@/static/json/region.json');
	export default {
		components: {
			BiaofunRegion ,xflSelect,CitySelect
		},
		data() {
			
			return {
				qudaoData:[
					{name:'渠道一',id:1},
					{name:'渠道二',id:2},
					{name:'渠道三',id:3},
				],
				qudaoIndex:[0],
				swiperHeight:'',
				comboView:false,
				indicatorStyle: `height: 30px;`,
				defaultValue:['浙江省', '杭州市', '西湖区'],
				listBoxStyle: `height: 60rpx; font-size: 13px;`,
				list: [
					'苹果',
					{value: '香蕉', disabled: true},
					'葡萄',
					'芒果',
					'大白菜',
				],
				initValue:'',
				cityData:cityData,
				cityDataTwo:[],
				cityDataThree:[],
				placeholder:'',
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
			
			// 选择省市区
			changeRegion(val){
				console.log(val)
				// this.$data.info.provinceCode = val[0].id;
				// this.$data.info.provinceName = val[0].name;
				// this.$data.info.cityCode = val[1].id;
				// this.$data.info.cityName = val[1].name;
				// this.$data.info.areaCode = val[2].id;
				// this.$data.info.areaName = val[2].name;
			},
			handleChange(){
				
			},
			visibleChange(isShow){ // 列表框的显示隐藏事件
				console.log('isShow::', isShow);
				console.log(this.$data.initValue)
			},
			change({newVal, oldVal, index, orignItem}){ 
				console.log(newVal, oldVal, index, orignItem);
				// 对应市的数据
				this.$data.cityDataTwo = orignItem.children;
			},
			visibleChangeTwo(){
				
			},
			changeTwo({newVal, oldVal, index, orignItem}){
				this.$data.cityDataThree = orignItem.children;
			},
			visibleChangeThree(){
				
			},
			changeThree({newVal, oldVal, index, orignItem}){
				
			},
		}
	}