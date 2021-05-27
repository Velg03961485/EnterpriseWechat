



export default{
	data(){
		return{
			menuHaIndex:0,
			progressData:[
				{title:'验证客户',text:'阶段一',},
				{title:'需求确定',text:'阶段二',},
				{title:'赢单',text:'阶段三',},
				{title:'输单',text:'阶段四',},
			],
			isShwoSe:false,
			progressIndex:2,
			swiperHeight:'',
			
			dloginViewShow:true,
			resultData:[
				{name:'价格太贵',id:1},
				{name:'客户不想要了',id:2},
				{name:'客户无要求',id:3},
				{name:'无效商机',id:4},
				{name:'无效商机',id:5},
			],
			resultIndex:'',
		}
	},
	onLoad(){
		uni.getSystemInfo({
			success: (res) => { // 需要使用箭头函数，swiper 高度才能设置成功
				// 获取swiperHeight可以获取的高度，窗口高度减去导航栏高度
				this.swiperHeight = res.windowHeight + 'px'
			}
		});
	},
	methods:{
		// 展开详情
		openDetailBtn(){
			this.$data.isShwoSe = !this.$data.isShwoSe;
		},
		// 菜单切换
		menuHaClickBtn(val){
			this.$data.menuHaIndex = val;
		},
		
		// 选择一个原因
		choseResultBtn(val){
			this.$data.resultIndex = val;
		},
		// 关闭
		closeBtn(){
			this.$data.dloginViewShow = false;
		},
	}
}