<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTit">
				联系人详情 |
			</view>
			<view class="contentBackTxt"> 
				返回
			</view>
			<image src="../../static/youjiantou_1.png" mode="" class="contentBackImg"></image>
		</view>
		
		<view class="indexHaveLineTop">
			<view class="indexHaveLineTopL">
				张宝宝
			</view>
			<image src="../../static/bianji_1.png" mode="" class="indexHaveLineTopR"></image>
		</view>
		
		<view class="indexNoLine_cen" style="margin-top: 22rpx;">
			<view class="indexHaveLineTen_cenL">
				<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
					<view class="indexNoLine_cenIL">
						职位名称：
					</view>
					<view class="indexNoLine_cenIR">
						市场部总监
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
			<view class="indexHaveLineTen_cenR">
				
			</view>
		</view>
		
		<view class="contactsTit">
			关联客户：浙江企蜂通信公司
		</view>
		
		
		<view class="indexNoLine_Bet">
			<view class="indexNoLine_BetIt1" :class="menuHaIndex == 0 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(0)">
				基础信息
			</view>
			<view class="indexNoLine_BetIt2" :class="menuHaIndex == 1 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(1)">
				通话记录
			</view>
		</view>
		
		
		<view class="contactsDeTy_1" v-if="menuHaIndex == 0">
			<view class="contactsDeTy_1Item">
				姓名：张宝宝
			</view>
			<view class="contactsDeTy_1Item">
				性别：女 
			</view>
			<view class="contactsDeTy_1Item">
				职位：市场部总监 
			</view>
			<view class="contactsDeTy_1Item">
				生日：1990-12-10
			</view>
			<view class="contactsDeTy_1Item">
				QQ：7483292010289
			</view>
			<view class="contactsDeTy_1Item">
				邮箱：7483292010289@qq.com 
			</view>
			<view class="contactsDeTy_1Item">
				常用电话：15909876654
			</view>
			<view class="contactsDeTy_1Item">
				被用电话：15908765543
			</view>
		</view>
		
		
		<view class="contactsDeTy_2" v-if="menuHaIndex == 1">
			<view class="contactsDeTy_2Item">
				<view class="contactsDeTy_2ItemTop">
					<view class="contactsDeTy_2ItemTopL">
						15890765543
					</view>
					<view class="contactsDeTy_2ItemTopR">
						已接去电
					</view>
				</view>
				<view class="contactsDeTy_2ItemCen">
					通话时间：2020-01-09 13:30
				</view>
				<view class="contactsDeTy_2ItemBot">
					通话时长：00:12:24
				</view>
			</view>
			<view class="contactsDeTy_2More">
				查看更多
			</view>
		</view>
		
	</view>
</template>

<script src="@/assets/js/contacts/contactsDetail.js"></script>


<style >
@import url('@/assets/css/contacts/contactsDetail.css')	
</style>
