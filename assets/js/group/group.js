	export default {
		data() {
			return {
				
				gloginShow:false,
				gloginIndex:0,
				dloginData:[
					{name:'添加新客户',id:1},
					{name:'绑定慧营销已有客户',id:2},
					{name:'转为市场推广新线索',id:3},
				],
				// 已绑定
				menuHaIndex:0,
			}
		},
		onLoad() {

		},
		methods: {
			
			
			// 打开转至慧营销
			takeOpen_dloginV(){
				this.$data.gloginShow = !this.$data.gloginShow;
			},
			// 选择一项
			choseItemBtn(val){
				this.$data.gloginIndex = val;
			},
			
			
			menuHaClickBtn(val){
				this.$data.menuHaIndex = val;
			},
		}
	}