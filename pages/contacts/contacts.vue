<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTit">
				新增联系人 |
			</view>
			<view class="contentBackTxt"> 
				返回
			</view>
			<image src="../../static/youjiantou_1.png" mode="" class="contentBackImg"></image>
		</view>
		
		
		<view class="clueForm" style="margin-top: 52rpx;">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					关联客户：
				</view>
			</view>
			<view class="clueFormRText">
				浙江企蜂通信有限公司
			</view>
		</view>
		
		
		<view class="clueForm" style="margin-top: 6rpx;">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					姓名：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					性别：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					生日：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					职位：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					QQ：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					邮箱：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					常用电话：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					备用电话：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>

		<view class="clueFormWsi">
			<view class="clueFormTitWsi">
				<view class="clueFormTit_txt">
					主要联系人：
				</view>
			</view>
			 <switch checked style="transform:scale(0.7)" class="switchBtn" />
		</view>
		
		
		
		
		<view class="clueFormBtn">
			
			<view class="clueFormBtnSure">
				保存
			</view>
		</view>
		
		
		
	</view>
</template>

<script src="@/assets/js/contacts/contacts.js"></script>


<style >
@import url('@/assets/css/contacts/contacts.css')	
</style>
