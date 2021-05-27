<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTit">
				新增商机 |
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
					商机名称：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					商机金额：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					商机产品：
				</view>
			</view>
			<view  class="clueFormInp">
				<xfl-select 
				:list="list"
				:initValue="initValue"
				:showItemNum="2" 
				:isCanInput="false"  
				:style_Container="listBoxStyle"
				:placeholder = "placeholder"
				@visible-change = 'visibleChange'
				>
				</xfl-select>
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					商机阶段：
				</view>
			</view>
			<view  class="clueFormInp">
				<xfl-select 
				:list="list"
				:initValue="initValue"
				:showItemNum="2" 
				:isCanInput="false"  
				:style_Container="listBoxStyle"
				:placeholder = "placeholder"
				@visible-change = 'visibleChange'
				>
				</xfl-select>
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					预期签单：
				</view>
			</view>
			<view  class="clueFormInp">
				<xfl-select 
				:list="list"
				:initValue="initValue"
				:showItemNum="2" 
				:isCanInput="false"  
				:style_Container="listBoxStyle"
				:placeholder = "placeholder"
				@visible-change = 'visibleChange'
				>
				</xfl-select>
			</view>
		</view>
		
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					备注：
				</view>
			</view>
			<view class="clueFormInpteXT" >
				<textarea class="clueFormInpteXT_textarea" />
			</view>
		</view>
		
		<view class="clueFormBtn">
			
			<view class="clueFormBtnSure">
				保存
			</view>
		</view>
		
		
		
	</view>
</template>

<script src="@/assets/js/niche/addNiche.js"></script>


<style >
@import url('@/assets/css/niche/addNiche.css')	
</style>
