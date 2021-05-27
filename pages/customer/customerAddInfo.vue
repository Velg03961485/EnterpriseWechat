<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTit">
				新增客户 |
			</view>
			<view class="contentBackTxt">
				返回
			</view>
			<image src="../../static/youjiantou_1.png" mode="" class="contentBackImg"></image>
		</view>
		
		
		<view class="clueForm" style="margin-top: 34rpx;">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					资源分组：
				</view>
			</view>
			<view class="clueFormInp" @click="takeChoseBtn">
				<view class="clueFormInpL">
					
				</view>
				<image src="../../static/jiantou_2.png" mode="" class="clueFormRImg"></image>
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					客户名称：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					资源分组：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					联系地区：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					所属行业：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					法人代表：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					注册资金：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					经营范围：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					公司传真：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>

		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					所在地区：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		
		
		
		<view class="clueFormBtn">
			
			<view class="clueFormBtnSure">
				完成
			</view>
		</view>
		
		
		<view class="takeTimeView" :style="{height:swiperHeight}" v-if="comboView">
			<view class="takeTimeViewBox">
				<view class="takeTimeViewBoxTop">
					<view class="takeTimeViewBoxTopOne" @tap="cancelPickerBtn">
						取消 
					</view>
					<view class="takeTimeViewBoxTopTwo">
						
					</view>
					<view class="takeTimeViewBoxTopThree" @tap="surePickerBtn">
						确定
					</view>
				</view>
				<picker-view  :indicator-style="indicatorStyle" :value="qudaoIndex" @change="bindComboChange" class="takeTimeViewBoxCen">
					<picker-view-column class="takeTimeViewBoxCenOne">
						<view class="takeTimeViewBoxCenOneitem" v-for="(item,index) in qudaoData" :key="index">{{item.name}}</view>
					</picker-view-column>
				</picker-view>
			</view>
			 
		</view>
	</view>
</template>

<script src="@/assets/js/customer/customerAddInfo.js"></script>


<style >
@import url('@/assets/css/customer/customerAddInfo.css')	
</style>
