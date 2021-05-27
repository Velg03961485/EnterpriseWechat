<template>
	<view class="content">
		
		<!-- 未绑定 -->
		<view class="indexNoLine" v-if="isHaveLine === false">
			<view class="indexNoLine_top">
				<view class="indexNoLine_topL">
					<view class="indexNoLine_topLName">
						虾仁儿
					</view>
					<view class="indexNoLine_topLI">
						@微信
					</view>
				</view>
				<view class="indexNoLine_topR">
					<view class="indexNoLine_topRT" @click="takeOpen_dloginV">
						转至慧营销
					</view>
					<image src="../../static/jiantou_1.png" mode="" class="indexNoLine_topRImg"></image>
				</view>
			</view>
			<view class="indexNoLine_cen">
				<view class="indexNoLine_cenL">
					<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
						<view class="indexNoLine_cenIL">
							所有者：
						</view>
						<view class="indexNoLine_cenIR">
							张宝宝
						</view>
					</view>
					<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
						<view class="indexNoLine_cenIL">
							关联客户：
						</view>
						<view class="indexNoLine_cenIR">
							浙江企蜂-张宝宝
						</view>
					</view>
				</view>
				<view class="indexNoLine_cenR">
					<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
						<view class="indexNoLine_cenIL">
							状态：
						</view>
						<view class="indexNoLine_cenIR">
							客户
						</view>
					</view>
				</view>
				
			</view>
			<view class="indexNoLine_Bet">
				<view class="indexNoLine_BetIt1" :class="menuIndex == 0 ? 'indexNoLine_BetItAcive' : ''" @click="menuClickBtn(0)">
					基础信息
				</view>
				<view class="indexNoLine_BetIt2" :class="menuIndex == 1 ? 'indexNoLine_BetItAcive' : ''" @click="menuClickBtn(1)">
					动态信息
				</view>
			</view>
			<view class="indexNoLine_Bot">
				<view class="indexNoLine_BotTy1" v-if="menuIndex == 0">
					<view class="indexNoLine_BotTy1Tit">
						基础信息
					</view>
					<view class="indexNoLine_BotTy1Txt">
						会话授权状态：拒绝授权
					</view>
					<view class="indexNoLine_BotTy1Txt">
						添加人：吴鹏
					</view>
					<view class="indexNoLine_BotTy1Txt">
						添加方式：客户主动
					</view>
					<view class="indexNoLine_BotTy1Txt">
						添加时间：2021-12-13 23:12:12
					</view>
					<view class="indexNoLine_BotTy1Txt">
						添加渠道：百度
					</view>
					<view class="indexNoLine_BotTy1Tit">
						好友关联
					</view>
					<view class="indexNoLine_BotTy1Txt">
						张宝宝，张三，李四
					</view>
					<view class="indexNoLine_BotTy1Tit">
						群关联
					</view>
					<view class="indexNoLine_BotTy1Txt">
						企蜂关联群，微信关联群
					</view>
				</view>
				
				<view class="indexNoLine_BotTy2" v-if="menuIndex == 1">
					<view class="indexNoLine_BotTy2Item">
						<view class="indexNoLine_BotTy2ItemTop">
							
						</view>
						<view class="indexNoLine_BotTy2ItemBot">
							<view class="indexNoLine_BotTy2ItemBotT">
								<view class="indexNoLine_BotTy2ItemBotTL">
									陈亚里
								</view>
								<view class="indexNoLine_BotTy2ItemBotTR">
									添加好友
								</view>
							</view>
							<view class="indexNoLine_BotTy2ItemBotB">
								2021-12-23 12:23:12
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		<!-- 已绑定 -->
		<view class="indexHaveLine">
			<view class="indexHaveLineTop">
				<view class="indexHaveLineTopL">
					浙江企蜂通信有限公司
				</view>
				<image src="../../static/bianji_1.png" mode="" class="indexHaveLineTopR"></image>
			</view>
			<view class="indexHaveLineTen">
				<view class="indexHaveLineTenIt">
					标签
				</view>
			</view>
			<view class="indexNoLine_cen" style="margin-top: 22rpx;">
				<view class="indexHaveLineTen_cenL">
					<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
						<view class="indexNoLine_cenIL">
							所有者：
						</view>
						<view class="indexNoLine_cenIR">
							张宝宝
						</view>
					</view>
					<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
						<view class="indexNoLine_cenIL">
							联系人姓名：
						</view>
						<view class="indexNoLine_cenIR">
							张宝宝
						</view>
					</view>
				</view>
				<view class="indexHaveLineTen_cenR">
					<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
						<view class="indexNoLine_cenIL">
							最近联系：
						</view>
						<view class="indexNoLine_cenIR">
							2019-09-29 12:22
						</view>
					</view>
					<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
						<view class="indexNoLine_cenIL">
							最近联系：
						</view>
						<view class="indexNoLine_cenIR">
							2019-09-29 12:22
						</view>
					</view>
				</view>
				
			</view>
			<view class="indexNoLine_Bet">
				<view class="indexNoLine_BetIt1" :class="menuHaIndex == 0 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(0)">
					商机
				</view>
				<view class="indexNoLine_BetIt3" :class="menuHaIndex == 1 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(1)">
					跟进
				</view>
				<view class="indexNoLine_BetIt2" :class="menuHaIndex == 2 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(2)">
					联系人
				</view>
			</view>
			<view class="indexHaveLineCen">
				<view class="indexHaveLineCenTy_1" v-if="menuHaIndex == 0">
					<view class="indexHaveLineCenTy_1Item">
						<view class="indexHaveLineCenTy_1ItemOne">
							<view class="indexHaveLineCenTy_1ItemOne_txt">
								商机名称
							</view>
							<view class="indexHaveLineCenTy_1ItemOneBc">
								<image src="../../static/yixiang_1.png" mode="" class="indexHaveLineCenTy_1ItemOneBc_img"></image>
							</view>
						</view>
						<view class="indexHaveLineCenTy_1ItemTwo">
							慧营销领航版
						</view>
						<view class="indexHaveLineCenTy_1ItemThree">
							¥2020.00
						</view>
						<view class="indexHaveLineCenTy_1ItemBtn">
							跟进
						</view>
					</view>
					
				</view>
				<view class="indexHaveLineCenTy_2" v-if="menuHaIndex == 1">
					<view class="indexHaveLineCenTy_2Item">
						<view class="indexHaveLineCenTy_2ItemTop">
							<view class="indexHaveLineCenTy_2ItemTopL">
								张子琪
							</view>
							<view class="indexHaveLineCenTy_2ItemTopR">
								2019-09-12 10:23
							</view>
						</view>
						<view class="indexHaveLineCenTy_2ItemTxt">
							跟进内容跟进内容跟进内容跟进内容跟进内容跟进内容跟进内 容跟进内容跟进内容跟进内容跟进内容
						</view>
					</view>
				</view>
				<view class="indexHaveLineCenTy_3" v-if="menuHaIndex == 2">
					<view class="indexHaveLineCenTy_3Item">
						<view class="indexHaveLineCenTy_3ItemOne">
							张宝宝 | 职位名称
						</view>
						<view class="indexHaveLineCenTy_3ItemPh">
							常用电话：15890876654 
						</view>
						<view class="indexHaveLineCenTy_3ItemPh">
							备用电话：15567890098 
						</view>
					</view>
				</view>
			</view>
			
			
			<view class="indexHaveLineCenTy_1AddBtn">
				新增
			</view>
		</view>
		
		
		
		
		<!-- 转至营销小弹窗 -->
		<view class="dloginV" v-if="gloginShow">
			<view class="dloginVItem" :class="gloginIndex == item.id ? 'dloginVItemActive' : ''" v-for="(item,index) in dloginData" :key="index" @click="choseItemBtn(item.id)">
				{{item.name}}
			</view>
		</view>
		
		
	</view>
</template>

<script src="@/assets/js/index/index.js"></script>


<style >
@import url('@/assets/css/index/index.css')	
</style>
