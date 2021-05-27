<template>
	<view class="content">
		<view class="contentBack">
			<view class="contentBackTxt">
				返回
			</view>
			<image src="../../static/youjiantou_1.png" mode="" class="contentBackImg"></image>
		</view>
		<view class="clueTop">
			<image src="../../static/gantan_1.png" mode="" class="clueTopImg"></image>
			<view class="clueTopText">
				该微信好友转为线索后，将进入市场推广模块，根据 分配规则分配，请确认
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_start">
					*
				</view>
				<view class="clueFormTit_txt">
					渠道：
				</view>
			</view>
			<!-- <view class="clueFormInp" @click="takeChoseBtn">
				<view class="clueFormInpL">
					
				</view>
				<image src="../../static/jiantou_2.png" mode="" class="clueFormRImg"></image>
			</view> -->
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
				<view class="clueFormTit_start">
					*
				</view>
				<view class="clueFormTit_txt">
					联系人：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					联系电话：
				</view>
			</view>
			<view class="clueFormInp" >
				<input  type="text"  />
			</view>
		</view>
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					微信：
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
					地区：
				</view>
			</view>
			<!-- <view class="clueFormInp">
				<BiaofunRegion class="areaAddOneFirstRight_a" @change="changeRegion" :defaultValue="defaultValue"></BiaofunRegion>
				<image src="../../static/jiantou_2.png" mode="" class="clueFormRImg"></image>
			</view> -->
			<view class="clueFormInpCb" >
				
				<view  class="clueFormInpCity">
					<CitySelect
					:list="cityData"
					:initValue="initValue"
					:showItemNum="2" 
					:isCanInput="false"  
					:style_Container="listBoxStyle"
					:placeholder = "placeholder"
					@visible-change = 'visibleChange'
					@change="change"
					>
					</CitySelect>
					
				</view>
				<view class="clueFormInpCity">
					<CitySelect
					:list="cityDataTwo"
					:initValue="initValue"
					:showItemNum="2" 
					:isCanInput="false"  
					:style_Container="listBoxStyle"
					:placeholder = "placeholder"
					@visible-change = 'visibleChangeTwo'
					@change="changeTwo"
					>
					</CitySelect>
				</view>
				<view class="clueFormInpCity">
					<CitySelect
					:list="cityDataThree"
					:initValue="initValue"
					:showItemNum="2" 
					:isCanInput="false"  
					:style_Container="listBoxStyle"
					:placeholder = "placeholder"
					@visible-change = 'visibleChangeThree'
					@change="changeThree"
					>
					</CitySelect>
				</view>
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
		
		<view class="clueForm">
			<view class="clueFormTit">
				<view class="clueFormTit_txt">
					搜索词：
				</view>
			</view>
			<view class="clueFormInpteXT" >
				<textarea class="clueFormInpteXT_textarea" />
			</view>
		</view>
		
		
		
		<!-- <a-input placeholder="Basic usage" /> -->
		
		<!-- <a-select default-value="lucy" style="width: 120px" @change="handleChange">
		      <a-select-option value="jack">
		        Jack
		      </a-select-option>
		      <a-select-option value="lucy">
		        Lucy
		      </a-select-option>
		      <a-select-option value="disabled" disabled>
		        Disabled
		      </a-select-option>
		      <a-select-option value="Yiminghe">
		        yiminghe
		      </a-select-option>
		</a-select> -->
		   
		
		<view class="clueFormBtn">
			<view class="clueFormBtnCancel">
				取消
			</view>
			<view class="clueFormBtnSure">
				保存
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

<script src="@/assets/js/clue/clue.js"></script>


<style >
@import url('@/assets/css/clue/clue.css')	
</style>
