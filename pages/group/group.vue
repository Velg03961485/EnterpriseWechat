<template>
	<view class="content">
		<view class="indexNoLine_top">
			<view class="indexNoLine_topL">
				<view class="indexNoLine_topLName">
					销售一部（11人）
				</view>
			</view>
			<view class="indexNoLine_topR">
				<view class="indexNoLine_topRT" @click="takeOpen_dloginV">
					转至慧营销
				</view>
				<image src="../../static/jiantou_1.png" mode="" class="indexNoLine_topRImg"></image>
			</view>
		</view>
		
		
		<view class="indexNoLine_Bet">
			<view class="indexNoLine_BetIt1" :class="menuHaIndex == 0 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(0)">
				基础信息
			</view>
			<view class="indexNoLine_BetIt2" :class="menuHaIndex == 1 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(1)">
				动态信息
			</view>
		</view>
		
		<view class="indexHaveLineCen">
			<view class="indexHaveLineCenTy_1" v-if="menuHaIndex == 0">
				<view class="indexHaveLineCenTy_1Tp">
					<view class="indexHaveLineCenTy_1TpOne">
						群主：张宝宝
					</view>
					<view class="indexHaveLineCenTy_1TpTwo">
						创建时间： 2020-12-21 13:11:13
					</view>
				</view>
				<view class="indexHaveLineCenTy_1Rt">
					<view class="indexHaveLineCenTy_1Rt_tit">
						群成员
					</view>
					<view class="indexHaveLineCenTy_1RtLi">
						<view class="indexHaveLineCenTy_1RtLiIt" v-for="it in 8">
							<image src="" mode="" class="indexHaveLineCenTy_1RtLiIt_img"></image>
							<view class="indexHaveLineCenTy_1RtLiIt_name">
								张宝宝
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="indexHaveLineCenTy_2" v-if="menuHaIndex == 1">
				<view class="indexNoLine_BotTy2Item">
					<view class="indexNoLine_BotTy2ItemTop">
						
					</view>
					<view class="indexNoLine_BotTy2ItemBot">
						<view class="indexNoLine_BotTy2ItemBotT">
							<view class="indexNoLine_BotTy2ItemBotTL">
								陈亚里
							</view>
							<view class="indexNoLine_BotTy2ItemBotTR">
								创建群
							</view>
						</view>
						<view class="indexNoLine_BotTy2ItemBotB">
							2021-12-23 12:23:12
						</view>
					</view>
				</view>
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

<script src="@/assets/js/group/group.js"></script>


<style >
@import url('@/assets/css/group/group.css')	
</style>
