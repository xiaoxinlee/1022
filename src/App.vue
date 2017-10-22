<template>
  <div id="app">
    <header>
      <div>微信</div>
      <div>
        <span class="iconfont">&#xe638</span>
        <span class="iconfont">&#xe6bf</span>
      </div>
    </header>
    <div class="view">
      <router-view/>
    </div>
    <footer>
    	<ul>
    		<li>
    			<router-link to="/weixin">
        		<div class="iconfont">&#xe606</div>
        		<div>微信</div>
      		</router-link>
    		</li>
    		<li>
    			<router-link to="/tong">
        		<div class="iconfont">&#xe60d</div>
        		<div>通讯录</div>
      		</router-link>
    		</li>
    		<li>
					<router-link to="/faxian">
						<div class="iconfont">&#xe605</div>
						<div>发现</div>
					</router-link>
    		</li>
    		<li>
    			<router-link to="/wode">
        		<div class="iconfont">&#xe607</div>
        		<div>我</div>
     			</router-link>
    		</li>
    	</ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  @import '../static/css/app.css';
</style>
