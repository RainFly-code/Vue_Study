<template>
    <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(item, index) in imageUrl" :key="index">
            <img :src="item" alt="轮播图片" class="carousel-image" />
        </el-carousel-item>
    </el-carousel>

    <div class="section-container">
        <!-- 热门推荐 -->
        <div class="section">
            <div class="section-header">
                <div class="section-title">
                    <i class="icon-dot"></i>
                    <h3>热门推荐</h3>
                </div>
                <div class="section-tabs">
                    <span>华语</span>
                    <span>|</span>
                    <span>流行</span>
                    <span>|</span>
                    <span>摇滚</span>
                    <span>|</span>
                    <span>民谣</span>
                    <span>|</span>
                    <span>电子</span>
                </div>
                <div class="more-link">
                    <span>更多</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="divider"></div>
            <img src="../../../assets/rmtj.png" alt="">
        </div>

        <!-- 新碟上架 -->
        <div class="section">
            <div class="section-header">
                <div class="section-title">
                    <i class="icon-dot"></i>
                    <h3>新碟上架</h3>
                </div>
                <div class="more-link">
                    <span>更多</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="divider"></div>
            <img src="../../../assets/xdsj.png" alt="">
        </div>

        <!-- 榜单 -->
        <div class="section">
            <div class="section-header">
                <div class="section-title">
                    <i class="icon-dot"></i>
                    <h3>榜单</h3>
                </div>
                <div class="more-link">
                    <span>更多</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="divider"></div>
            <img src="../../../assets/bd.png" alt="">
        </div>
    </div>
</template>


<script setup>
//导入element-plus的轮播图组件
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { ref } from 'vue';
//导入element-plus的样式
import 'element-plus/dist/index.css';
//引入网易云音乐轮播图
const imageUrl = ref([
    'https://p1.music.126.net/rw0oc3dVn84S3wGRKcFzGg==/109951170905426551.jpg',
    'https://p1.music.126.net/ggGhNjOJCm60LZ76t2Pg5w==/109951170912962550.jpg',
    'https://p1.music.126.net/8qNLHmXAN4hkTxTQM8y0fQ==/109951170905352445.jpg',
    'https://p1.music.126.net/KIADDf9C2Lv6pVzwi_cmzw==/109951170905403226.jpg'
]);
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item {
  overflow: hidden;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.section-container {
  padding: 20px;
  max-width: 950px;
  margin: 0 auto;
}

.section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.section-title {
  display: flex;
  align-items: center;
}

.icon-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #C20C0C;
  border-radius: 50%;
  margin-right: 10px;
}

.section-title h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.section-tabs {
  flex: 1;
  margin-left: 20px;
  font-size: 12px;
  color: #666;
}

.section-tabs span {
  margin: 0 5px;
  cursor: pointer;
}

.more-link {
  font-size: 12px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.divider {
  height: 2px;
  background-color: #C20C0C;
  width: 100%;
  margin-bottom: 20px;
}

</style>