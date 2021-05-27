

export default{
	data(){
		return{
			menuHaIndex:0,
		}
	},
	onLoad(){
		console.log('fdsafsadf')
	},
	methods:{
		// 菜单切换
		menuHaClickBtn(val){
			this.$data.menuHaIndex = val;
		},
	}
}