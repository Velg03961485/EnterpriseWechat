<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTit">
				商机详情 |
			</view>
			<view class="contentBackTxt"> 
				返回
			</view>
			<image src="../../static/youjiantou_1.png" mode="" class="contentBackImg"></image>
		</view>
		
		<view class="indexHaveLineTop">
			<view class="indexHaveLineTopL">
				商机名称
				<view class="indexHaveLineTopLImg">
					商机阶段
				</view>
			</view>
			<image src="../../static/bianji_1.png" mode="" class="indexHaveLineTopR"></image>
		</view>
		
		
		<view class="indexNoLine_cen" style="margin-top: 22rpx;">
			<view class="indexHaveLineTen_cenL">
				<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
					<view class="indexNoLine_cenIL">
						商机产品：
					</view>
					<view class="indexNoLine_cenIR">
						慧营销
					</view>
				</view>
				<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
					<view class="indexNoLine_cenIL">
						客户名称：
					</view>
					<view class="indexNoLine_cenIR">
						企蜂
					</view>
				</view>
				<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
					<view class="indexNoLine_cenIL">
						商机金额：
					</view>
					<view class="indexNoLine_cenIR">
						1390.00
					</view>
				</view>
			</view>
			<view class="indexHaveLineTen_cenR">
				<view class="indexNoLine_cenI" style="margin-top: 22rpx;">
					<view class="indexNoLine_cenIL">
						预计签单：
					</view>
					<view class="indexNoLine_cenIR">
						2020-03-22
					</view>
				</view>
				<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
					<view class="indexNoLine_cenIL">
						最近跟进：
					</view>
					<view class="indexNoLine_cenIR">
						2020-03-22
					</view>
				</view>
				<view class="indexNoLine_cenI" style="margin-top: 30rpx;">
					<view class="indexNoLine_cenIL">
						所有者：
					</view>
					<view class="indexNoLine_cenIR">
						张宝宝
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="nicheDeCen">
			<view class="nicheDeCenL">
				<image src="../../static/dangqian_1.png" mode="" class="nicheDeCenLOne"></image>
				<view class="nicheDeCenLTwo">
					该商机处于需求阶段
				</view>
				<view class="nicheDeCenLThree">
					2/4
				</view>
			</view>
			<image src="../../static/jiantou_3.png" mode="" class="nicheDeCenR" @click="openDetailBtn"></image>
		</view>
		
		
		<view class="nicheDeTrn" v-if="isShwoSe">
			<view class="nicheDeTrnItem" v-for="(item,index) in progressData" :key="index">
				<view class="nicheDeTrnItemTop" v-if="progressIndex >= index+1">
					
				</view>
				<view class="" :class="progressIndex > index+1 ? 'nicheDeTrnItemBot' : (progressIndex == index+1 ? 'nicheDeTrnItemBot2' : 'nicheDeTrnItemBot3')">
					<view class="nicheDeTrnItemBotOne">
						<view class="nicheDeTrnItemBotOneL">
							{{item.title}}
						</view>
						<image :src=" progressIndex == index+1 ? '../../static/xuanzhong_2.png' : '../../static/xuanzhong_1.png'" mode="" class="nicheDeTrnItemBotOneR"></image>
					</view>
					<view class="nicheDeTrnItemBotTwo">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="indexNoLine_Bet">
			<view class="indexNoLine_BetIt1" :class="menuHaIndex == 0 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(0)">
				跟进
			</view>
			<view class="indexNoLine_BetIt2" :class="menuHaIndex == 1 ? 'indexNoLine_BetItAcive' : ''" @click="menuHaClickBtn(1)">
				商机日志
			</view>
		</view>
		
		<view class="indexHaveLineCen">
			<view class="indexHaveLineCenTy_2" v-if="menuHaIndex == 0">
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
			<view class="indexHaveLineCenTy_4" v-if="menuHaIndex == 1">
				<view class="indexHaveLineCenTy_4Item">
					<view class="indexHaveLineCenTy_4ItemTop">
						
					</view>
					<view class="indexHaveLineCenTy_4ItemBot">
						<view class="indexHaveLineCenTy_4ItemBotOne">
							<view class="indexHaveLineCenTy_4ItemBotOneL">
								完成阶段要求 张三
							</view>
							<view class="indexHaveLineCenTy_4ItemBotOneR">
								2021-03-05 10:25:12
							</view>
						</view>
						<view class="indexHaveLineCenTy_4ItemBotTwo">
							说明内容说明内容说明内容说明内容说明内容说明内容
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- 操作弹窗 -->
		<view class="dloginView" :style="{height:swiperHeight}" v-if="dloginViewShow">
			<view class="dloginViewC">
				<view class="dloginViewCTop">
					<view class="dloginViewCTopL">
						输单原因
					</view>
					<image src="../../static/close_1.png" mode="" class="dloginViewCTopR" @click="closeBtn"></image>
				</view>
				<view class="dloginViewCBen">
					<view class="dloginViewCBenIt" v-for="(item,index) in resultData" :key="index" @click="choseResultBtn(item.id)">
						<view class="dloginViewCBenItL">
							{{item.name}}
						</view>
						<image v-if="resultIndex == item.id"  src="../../static/duihao_1.png" mode="" class="dloginViewCBenItR"></image>
					</view>
				</view>
				<view class="dloginViewCBot">
					<view class="dloginViewCBotL">
						取消
					</view>
					<view class="dloginViewCBotR">
						确认
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script src="@/assets/js/niche/nicheDetail.js"></script>


<style >
@import url('@/assets/css/niche/nicheDetail.css')	
</style>
