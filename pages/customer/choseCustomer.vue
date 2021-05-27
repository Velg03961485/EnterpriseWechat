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
		
		<view class="choseCSearch">
			<input  type="text" class="choseCSearchInput"  />
			<image src="../../static/search_1.png" mode="" class="choseCSearchImg"></image>
		</view>
		
		
		<view class="choseCList">
			<view class="choseCListItem">
				<view class="choseCListItemTop">
					<view class="choseCListItemTopL">
						客户名称
					</view>
					<view class="choseCListItemTopR">
						共有
					</view>
				</view>
				<view class="choseCListItemCen">
					客户类型 | 客户级别 
				</view>
				<view class="choseCListItemBot">
					杭州市西湖区古翠路80号
				</view>
			</view>
			<view class="choseCListItem">
				<view class="choseCListItemTop">
					<view class="choseCListItemTopL">
						客户名称
					</view>
					<image src="../../static/zhongdain_1.png" mode="" class="choseCListItemTopRImg"></image>
				</view>
				<view class="choseCListItemCen">
					客户类型 | 客户级别 
				</view>
				<view class="choseCListItemBot">
					杭州市西湖区古翠路80号
				</view>
			</view>
		</view>
		
		
	</view>
</template>
 
<script src="@/assets/js/customer/choseCustomer.js"></script>


<style>
@import url('@/assets/css/customer/choseCustomer.css')	
</style>
