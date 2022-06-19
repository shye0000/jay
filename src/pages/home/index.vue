<template>
  <div>
    <div class="contain" v-if="show == false">
      <a-row :gutter="16" class="top_nav">
        <a-col class="gutter-row" :xs="{ span: 10, offset: 2 }" :md="{ span: 12 }">
          <div class="gutter-box">
            <img class="logo" @click="goHome" src="../../assets/logo.png" />
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="{ span: 9 }" :md="{ span: 4, offset: 5 }">
          <div class="gutter-box igs_box">
            <!-- <a-icon type="instagram" style="color:#CCCACA;font-size: 40px;vertical-align: bottom;" theme="filled" />
            <img class="igs" src="../../assets/tw.png" />
            <img src="../../assets/dis.png" /> -->
            <img @click="gotw" src="../../assets/tw.png" />
            <img class="igs" @click="godis" src="../../assets/dis.png" />
            <a-icon @click="goins" type="instagram" style="color:#CCCACA;font-size: 40px;vertical-align: bottom;"
              theme="filled" />
          </div>
        </a-col>
        <a-col class="gutter-row" :xs="{ span: 1 }" :md="{ span: 2 }"> </a-col>
      </a-row>
      <a-row :gutter="16" class="mid" :class="{ ipmid: hidshow == false }">
        <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
          <div class="gutter-box midbox">
            <p class="mid_title">
              Jay Chou x PSG
            </p>
            <p class="mid_title2">
              Tiger Champs NFT Whitelist
            </p>
            <!--  <p class="mid_title3">
               Open Sale on 23.06.2022
             </p>
            <!-- <p class="mid_title34">
               Whitelist registration
             </p>-->
            <div class="ipt">
              <a-input-search placeholder="Enter Your Email address" enter-button="Sign up" size="large"
                @search="onSearch" v-model="keyword" />
            </div>
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16" class="footer">
        <!-- <a-row :gutter="16" class="footer" v-show="hidshow"> -->
        <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
          <div class="gutter-box">
            <p class="footer_title">
              *NFTs are one-of-a-kind items with digital certificates of authenticity. Buying and owning an NFT means
              you have a certificate of ownership. Your authentic, verifiable NFTs are stored on the Blockchain, a
              secure and transparent digital ledger.
            </p>
            <p class="footer_title footer_title2">© 2022 Paris Saint-Germain and JHB.fr</p>
           <!-- <p class="footer_agreement" @click="goDetail">Terms & Conditions</p> -->
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- B页面 -->
    <div class="containB" v-if="show == true" ref="obtain">
      <!-- <div class="fullPage" ref="fullPage"> -->
      <!-- <div
          class="fullPageContainer"
          ref="fullPageContainer"
          @mousewheel="mouseWheelHandle"
          @DOMMouseScroll="mouseWheelHandle"
        > -->
      <div class="section section1">
        <!-- <a-row :gutter="16" class="top_nav">
          <a-col class="gutter-row" :xs="{ span: 12 }" :md="{ span: 12 }">
            <div class="gutter-box">
              <img class="logo" src="../../assets/logo.png" />
            </div>
          </a-col>
          <a-col
            class="gutter-row"
            :xs="{ span: 11 }"
            :md="{ span: 5, offset: 5 }"
          >
            <div class="igs_box">
              <a-icon
                type="instagram"
                style="color:#CCCACA;font-size: 40px;vertical-align: bottom;"
                theme="filled"
              />
              <img class="igs" src="../../assets/tw.png" />
              <img src="../../assets/dis.png" />
              <a-icon
                class="igss"
                type="menu"
                style="color:#CCCACA;font-size: 40px;vertical-align: bottom;"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :xs="{ span: 1 }" :md="{ span: 2 }">
          </a-col>
        </a-row> -->
        <a-row :gutter="16" class="top_nav">
          <a-col class="gutter-row" :xs="{ span: 10, offset: 2 }" :md="{ span: 12 }">
            <div class="gutter-box">
              <img class="logo" src="../../assets/logo.png" />
            </div>
          </a-col>
          <a-col class="gutter-row" :xs="{ span: 10 }" :md="{ span: 4, offset: 5 }">
            <div class="gutter-box igs_box">
              <img @click="gotw" src="../../assets/tw.png" />
              <img class="igs" @click="godis" src="../../assets/dis.png" />
              <a-icon @click="goins" type="instagram" style="color:#CCCACA;font-size: 40px;vertical-align: bottom;"
                theme="filled" />
              <!-- <a-icon class="igss" type="menu" style="color:#CCCACA;font-size: 40px;vertical-align: bottom;" /> -->
            </div>
          </a-col>
          <a-col class="gutter-row" :xs="{ span: 1 }" :md="{ span: 2 }"> </a-col>
        </a-row>
        <p class="mid_title">
          Jay Chou x PSG
        </p>
        <a-row :gutter="16" class="mid">
          <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
            <div class="gutter-box" style="text-align:center;">
              <!-- <img
                style="padding-top:30px;cursor: pointer;"
                src="../../assets/play.png"
                alt=""
              /> -->
              <div class="s1footer">
                <div class="s1title">Tiger Champs NFT</div>
                <a href="https://crypto.com/nft/drops-event/ea520ac64894205cc48b4a436d2c0f70">View on Crypto.com</a>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="section section2">
        <a-row :gutter="16">
          <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 6, offset: 4 }">
            <div class="gutter-box">
              <div class="s2list">
                <p class="s2lt">
                  POPULATION
                </p>
                <p class="s2la" style="line-height: 1;margin-top:10px;font-size: 80px;">
                  10,000
                </p>
                <p class="s2la" style="line-height:1;">
                  UNIQUE NFTS
                </p>
              </div>
              <div class="s2list">
                <p class="s2lt">
                  SALE DATE
                </p>
                <p class="s2la">
                  2022.06.23
                </p>
              </div>
              <div class="s2list">
                <p class="s2lt">
                  EXCLUSIVELY ON
                </p>
                <p class="s2la s2las">
                  <img src="../../assets/Bitmap.png" />
                  <span>Crypto.com</span>
                  <span>|</span>
                  <span>NFT</span>
                </p>
              </div>
            </div>
          </a-col>
          <a-col class="gutter-row s2r" :xs="{ span: 20, offset: 2 }" :md="{ span: 10, offset:1 }">
            <img class="tiger" src="../../assets/maillot sport.png" />
          </a-col>
        </a-row>
      </div>
      <div class="section section3">
        <a-row :gutter="16">
          <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 16, offset: 4 }">
            <p class="fet">
              NFT Collection
            </p>
            <p class="ttc">
              JHB and PSG have the pleasure to launch this collection of 10,000
              algorithmically generated Tiger NFTs! This project aims to
              celebrate the 10th championship of PSG.
            </p>
            <p class="ttc ttcpic">
              The collection consiste of 3 series:<br />
              1970 Premium, inspired with PSG's football players' goal
              celebration; 10 One of One for auction; 8020 basic version. Join
              our community with the 'Mandopop King', Jay Chou and PSG, one of
              the best football club!
            </p>
            <a-row :gutter="16">
              <a-col class="gutter-row" :xs="{ span: 7 }" :md="{ span: 7 }">
                <div class="imgbox">
                  <img src="../../assets/Rectangle.png" alt="" />
                  <p>Basic</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :xs="{ span: 7, offset: 1 }" :md="{ span: 7 }">
                <div class="imgbox">
                  <img src="../../assets/Rectangle-1.png" alt="" />
                  <p>Premium</p>
                </div>
              </a-col>
              <a-col class="gutter-row" :xs="{ span: 7, offset: 1 }" :md="{ span: 7 }">
                <div class="imgbox">
                  <img src="../../assets/Rectangle-2.png" alt="" />
                  <p>Legendary</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
      <div class="section section4">
        <a-row :gutter="16" class="mgb30">
          <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 16, offset: 4 }">
            <p class="fet fet2">
              Creators
            </p>
            <a-row :gutter="16">
              <a-col class="gutter-row" :xs="{ span: 23 }" :md="{ span: 12 }">
                <div class="imgbox2 sp">
                  <img src="../../assets/jaychou.png" alt="" />
                </div>
              </a-col>
              <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 11, offset: 1 }">
                <p class="fet fet3">Jay Chou</p>
                <p class="ttc">
                  Jay Chou is a asian musician, singer-songwriter,
                  multi-instrumentalist, actor and director. He has sold more
                  than 30 million albums since his debut and dubbed the "King of
                  Mandopop". Jay Chou has won numerous awards in the music
                  industry. Jay Chou debuted his acting career and made his film
                  debut in Initial D (2005), and also since ventured into many
                  movie projects. He made his Hollywood debut in 2011 with The
                  Green Hornet, starring alongside Seth Rogen and Christoph
                  Waltz.
                </p>
                <div style="text-align:right;" class="dontshow">
                  <img style="width:69%;" src="../../assets/tiger.png" alt="" />
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 16, offset: 4 }">
            <a-row :gutter="16">
              <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 12 }">
                <p class="fet">PSG</p>
                <p class="ttc">
                  Paris Saint-Germain Football Club was founded in August 1970.
                  PSG claimed their maiden league championship in 1986. Paris
                  claimed a second league title in 1994 and its crowning glory,
                  the UEFA Cup Winners' Cup in 1996. PSG have dominated French
                  football, winning 27 trophies: seven league titles, six French
                  Cups, six French League Cups and eight French Super Cups. To
                  celebrate the tenth year of the PSG team's championship, PSG
                  will launch a collaborative NFT project.
                </p>
              </a-col>
              <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="imgbox2 sp" style="text-align:right;">
                  <img src="../../assets/bask.png" alt="" />
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
            <div class="rlogo">
              <img src="../../assets/rlogo.png" alt="" />
            </div>
          </a-col>
        </a-row>
        <div class="section section6">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 16, offset: 4 }">
              <p class="fet fet2 roadmap">
                Roadmap
              </p>
              <div class="s6list">
                <div class="s6l">
                  <img class="starimg" src="../../assets/star.png" alt="">
                </div>
                <div class="s6m"></div>
                <div class="s6r">
                  <p class="s6rt">Phase 1 - Launch</p>
                  <div class="s6rde">
                    Launch "Tiger Champs" NFT program on Crypto.com/NFT
                  </div>
                  <div class="s6rde">Launch Discord and Website</div>
                </div>
              </div>
              <div class="s6list">
                <div class="s6l">
                  <img class="starimg" src="../../assets/star.png" alt="">
                </div>
                <div class="s6m"></div>
                <div class="s6r">
                  <p class="s6rt">Phase 2 - Merchandise & More</p>
                  <div class="s6rde">
                    * Tiger Champs exclusive merch discount at PSG Shop
                  </div>
                  <div class="s6rde">
                    * « STAR » Trophy (with dates)
                  </div>
                  <div class="s6rde">
                    * PSG x Jeff Hamilton Varsity Jacket
                  </div>
                  <div class="s6rde">
                    * Champion Ring Fan Version
                  </div>
                  <div class="s6rde">
                    * Collector « STAR » Jersey
                  </div>
                  <div class="s6rde">
                    * PSG x NIKE – Exclusive range
                  </div>
                  <div class="s6rde">
                    * Special Kit with a T-shirt, scarf & cap
                  </div>
                </div>
              </div>
              <div class="s6list">
                <div class="s6l">
                  <img class="starimg" src="../../assets/star.png" alt="">
                </div>
                <div class="s6m"></div>
                <div class="s6r">
                  <p class="s6rt">Phase 3 - Interact & Experiences</p>
                  <div class="s6rde">
                    * Tickets to Jay Chou's concert in Paris
                  </div>
                  <div class="s6rde">
                    * Parc de Prince Stadium & Training center tour
                  </div>
                  <div class="s6rde">
                    * Ligue 1 ticket giveaway campaign
                  </div>
                  <div class="s6rde">
                    * Champions League ticket giveaway campaign
                  </div>
                  <div class="s6rde">
                    * VIP package winner expeirence game at PSG
                  </div>
                  <div class="s6rde">
                    * PSG players & Jay Chou personalized video message + autographed album + autographed PSG Jersey
                  </div>
                </div>
              </div>
              <div class="s6list mg50">
                <div class="s6l">
                  <img class="starimg" src="../../assets/star.png" alt="">
                </div>
                <div class="s6m"></div>
                <div class="s6r sps6r">
                  <p class="s6rt">Phase 4 - Future</p>
                  <div class="s6rde">
                    * Access to Jay Chou x PSG Virtual Lands, experiance Metaverse Scene
                  </div>
                  <div class="s6rde">
                    * Suprise Air-Drops from collaboration of Jay Chou x PSG and other brands
                  </div>
                  <div class="s6rde">
                    * Early Access to all future PSG drops on Crypto.com/NFT
                  </div>
                  <div class="s6rde">
                    * Exclusive behind-the-scenes content posted in NFT holder Discord channel
                  </div>
                  <div class="s6rde">
                    * Opportunities To Interact With Artists And Celebrities
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
          <a-row :gutter="16" class="tg6">
            <a-col class="gutter-row" :xs="{ span: 0 }" :md="{ span: 24 }">
              <div class="s6tig">
                <img src="../../assets/tigers6.png" alt="" />
              </div>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
              <div class="rlogo">
                <img src="../../assets/rlogo.png" alt="" />
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="section section5">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xs="{ span: 20, offset: 2 }" :md="{ span: 8, offset: 4 }">
              <div class="gutter-box">
                <div class="s5list">
                  <p class="s5lt">
                    JOIN THE
                    SOCIETY
                  </p>
                  <p class="s5la">
                    Make sure to join our community on Discord<br />
                    to stay up to date with announcements,<br />
                    drop info, and special releases!
                  </p>
                </div>
                <button class="joinDis">Join Discord</button>
              </div>
            </a-col>
            <a-col class="gutter-row s2r" :xs="{ span: 22, offset: 2 }" :md="{ span: 6, offset: 2 }">
              <img class="tiger2" src="../../assets/tiger2.png" />
            </a-col>
          </a-row>
        </div>
        <div class="section">
          <a-row :gutter="16" class="footer2">
            <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
              <div class="gutter-box">
                <p class="footer_title">
                  *NFTs are one-of-a-kind items with digital certificates of authenticity. Buying and owning an NFT
                  means you have a certificate of ownership. Your authentic, verifiable NFTs are stored on the
                  Blockchain, a secure and transparent digital ledger.
                </p>
                <p class="footer_title footer_title2">
                  © 2022 Paris Saint-Germain and JHB</p>
                <!--<p class="footer_agreement" @click="goDetail">Terms & Conditions</p> -->
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <!-- </div> -->
      <!-- </div> -->
      <div class="celbox">
        <p v-for="(item, index) in 7" :key="index" class="cel" :class="{ act: index == scl }"></p>
      </div>
    </div>
    <a-back-top />
  </div>
</template>
<script>
import { saveAs } from "file-saver";
import axios from "axios";
export default {
  data() {
    return {
      scl: 0,
      keyword: "",
      show: true,
      docmHeight: 0, //默认屏幕高度
      hidshow: true, //显示或者隐藏footer
      fullpage: {
        current: 1, // 当前的页面编号
        isScrolling: false, // 是否在滚动,是为了防止滚动多页，需要通过一个变量来控制是否滚动
        deltaY: 0 // 返回鼠标滚轮的垂直滚动量，保存的鼠标滚动事件的deleteY,用来判断是往下还是往上滚
      }
    };
  },
  mounted() {
    this.docmHeight = document.documentElement.clientHeight; //获取当前屏幕高度
    window.onresize = () => {
      //屏幕高度变化时判断
      return (() => {
        let showHeight = document.body.clientHeight;
        this.hidshow = this.docmHeight > showHeight ? false : true;
      })();
    };
    // this.timeIf();
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    gotw() {
      window.location.href = 'https://twitter.com/jaychouxpsg'
    },
    goins() {
      window.location.href = 'https://www.instagram.com/jaychouxpsg/'
    },
    godis() {
      window.location.href = 'https://discord.gg/76Pw2fnghR'
    },
    handleScrollx() {
      let x = window.pageYOffset;
      if (x > 0 && x < 725) {
        this.scl = 0;
      } else if (x >= 725 && x < 1750) {
        this.scl = 1;
      } else if (x >= 1750 && x < 2307) {
        this.scl = 2;
      } else if (x >= 2307 && x < 3336) {
        this.scl = 3;
      } else if (x >= 3336 && x < 4050) {
        this.scl = 4;
      } else if (x >= 4050 && x < 5850) {
        this.scl = 5;
      } else if (x >= 5850) {
        this.scl = 6;
      }
    },
    // timeIf() {
    //   // 时间判断 首页更新跑马灯提示
    //   let a = new Date();
    //   // console.log(a.getFullYear())
    //   if (a.getFullYear() >= 2022 && a.getMonth() >= 6 && a.getDate() >=  13) {
    //     this.show = false;
    //   } else {
    //     return false;
    //   }
    // },
    onSearch(e) {
      let _this = this;
      //var reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
      var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      var ret = reg.test(e);
      if (ret) {
         let str = e;
         //let strData = new Blob([str], { type: "text/plain;charset=utf-8" });
         //saveAs(strData, "测试文件下载.txt");
          axios
          //.post("https://162.19.56.59:8081/folder-api/api/email/save", {
           .post("https://api.jaychouxpsg.com/folder-api/api/email/save", {
            email: e
          })
          .then(function (response) {
            if (response.data.code == 0) {
              _this.$message.success(response.data.msg, 2);
            }
          })
          //.catch(function (error) {
            //_this.$message.success(response.data.msg, 2);
          //});
     } else {
        this.$message.error("Invalid email address", 2);
      }
    },
    goDetail() {
      this.$router.push({ path: "/agreement" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    }
    //next() {
    //   console.log("this.fullpage.current", this.fullpage.current);
    //   // 往下切换
    //   let len = 4; // 页面的个数
    //   if (this.fullpage.current + 1 <= len) {
    //     // 如果当前页面编号+1 小于总个数，则可以执行向下滑动
    //     this.fullpage.current += 1; // 页面+1
    //     this.move(this.fullpage.current); // 执行切换
    //   } else if (this.fullpage.current == len) {
    //     console.log("!");
    //     this.fullpage.current = 1; // 页面
    //     this.move(this.fullpage.current);
    //   }
    // },
    // pre() {
    //   // 往上切换
    //   if (this.fullpage.current - 1 > 0) {
    //     // 如果当前页面编号-1 大于0，则可以执行向下滑动
    //     this.fullpage.current -= 1; // 页面+1
    //     this.move(this.fullpage.current); // 执行切换
    //   }
    // },
    // move(index) {
    //   this.fullpage.isScrolling = true; // 为了防止滚动多页，需要通过一个变量来控制是否滚动
    //   this.directToMove(index); //执行滚动
    //   setTimeout(() => {
    //     //这里的动画是1s执行完，使用setTimeout延迟1s后解锁
    //     this.fullpage.isScrolling = false;
    //   }, 1010);
    // },
    // directToMove(index) {
    //   let height = this.$refs["fullPage"].clientHeight; //获取屏幕的宽度
    //   let scrollPage = this.$refs["fullPageContainer"]; // 获取执行tarnsform的元素
    //   let scrollHeight; // 计算滚动的告诉，是往上滚还往下滚
    //   scrollHeight = -(index - 1) * height + "px";
    //   scrollPage.style.transform = `translateY(${scrollHeight})`;
    //   this.fullpage.current = index;
    // },
    // mouseWheelHandle(event) {
    //   // 监听鼠标监听
    //   // 添加冒泡阻止
    //   let evt = event || window.event;
    //   if (evt.stopPropagation) {
    //     evt.stopPropagation();
    //   } else {
    //     evt.returnValue = false;
    //   }
    //   if (this.fullpage.isScrolling) {
    //     // 判断是否可以滚动
    //     return false;
    //   }
    //   let e = event.originalEvent || event;
    //   this.fullpage.deltaY = e.deltaY || e.detail; // Firefox使用detail
    //   if (this.fullpage.deltaY > 0) {
    //     this.next();
    //   } else if (this.fullpage.deltaY < 0) {
    //     this.pre();
    //   }
    // },
  }
};
</script>
<style scoped>
.contain {
  color: #fff;
  height: 100vh;
  background: url("../../assets/nbg.png") no-repeat center;
  background-size: cover;
}

.logo {
  width: 152px;
  height: 152px;
  z-index: 999;
}

.top_nav {
  padding-top: 30px;
}

.igs {
  margin: 0 20px;
}

.igss {
  margin-left: 20px;
}

.igs_box {
  text-align: right;
  margin-top: 30px;
}

.mid {
  /* background: url("../../assets/person.png") no-repeat center; */
  background-size: cover;
  position: absolute;
  top: 42%;
  height: 70%;
  width: 100%;
  margin-top: -12.5%;
  /* 为高度的一半 */
}

.mid_title {
  font-family: "PSG-Regular";
  font-size: 90px;
  text-align: center;
  line-height: 1;
  padding-top: 20px;
  /* font-family: "PSG-inline"; */
  /* font-family: "PSG-Light"; */
  /* font-family: "PSG-Regular"; */
}

.mid_title2 {
  font-family: "PSG-Regular";
  font-size: 40px;
  text-align: center;
  /* line-height: 1; */
  margin-top: 220px;
}

.mid_title3 {
  font-family: "PSG-Regular";
  font-size: 40px;
  text-align: center;
  line-height: 1.4;
}

.mid_title34 {
  font-family: "PSG-Regular";
  font-size: 40px;
  text-align: center;
}

.midbox {
  position: relative;
  height: 100%;
}

.ipt {
  width: 840px;
  margin: auto;
  font-family: "PSG-Regular";
  position: absolute;
  left: 50%;
  margin-left: -23%;
  bottom: 9vh;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 5px;
  text-align: center;
  margin: 0 auto;
}

.footer2 {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 48px 0 33px 0;
}

.footer_agreement {
  color: #ceae59;
  font-family: "PSG-Regular";
  margin-top: 12px;
  display: inline-block;
}

.footer_agreement:hover {
  color: #40a9ff;
  cursor: pointer;
}

.footer_title {
  font-size: 9px;
  font-family: "PSG-Regular";
  line-height: 1;
}

.footer_title {
  margin-top: 0.5rem;
}

.fullPage {
  height: 100vh;
  overflow: hidden;
}

.fullPageContainer {
  width: 100%;
  height: 100%;
  transition: all linear 0.5s;
}

.section {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  font-family: "PSG-Regular";
}

.section1 {
  background: url("../../assets/nbg.png") no-repeat center;
  background-size: cover;
  color: #fff;
  height: 100vh;
}

.section1 .mid_title {
  font-size: 90px;
  position: absolute;
  top: 18vh;
  text-align: center;
  width: 100%;
  z-index: 99;
}

.s1footer {
  position: absolute;
  bottom: 0px;
  display: block;
  text-align: center;
  width: 100%;
}

.s1footer .s1title {
  font-size: 30px;
  margin-bottom: 20px;
}

.s1footer a {
  display: inline-block;
  background: #c9ab68;
  padding: 27px 28px;
  border-radius: 20px;
  font-size: 30px;
  border: none;
  color: white;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.s1footer a:hover {
  color: #40a9ff;
  cursor: pointer;
}

.section2 {
  background-color: #1a2434;
  position: relative;
  height: 100vh;
}

.s2list {
  font-family: "PSG-Regular";
  border-bottom: 1px solid #585d65;
  padding: 50px 0;
}

.s2lt {
  color: #5177b0;
  font-size: 20px;
}

.s2la {
  color: #fff;
  font-size: 40px;
}

.s2las {
  margin-top: 20px;
}

.s2la img {
  width: 80px;
}

.tiger {
  width: 100%;
  position: absolute;
  bottom: 0px;
}

.section3 {
  background-color: #1a2434;
  color: #fff;
}

.fet {
  font-size: 48px;
  margin-top: 50px;
}

.ttc {
  font-size: 22px;
  margin-top: 30px;
}

.imgbox {
  margin-top: 30px;
}

.imgbox p {
  font-size: 36px;
  margin-top: 10px;
}

.imgbox img {
  width: 100%;
}

.imgbox2 {
  margin-top: 100px;
}

.imgbox2 img {
  width: 80%;
}

.section4 {
  background-color: #1a2434;
  color: #fff;
}

.section5 {
  background: url("../../assets/tran.png") no-repeat center;
  /* height: 100vh; */
  background-size: cover;
  position: relative;
}

.rlogo {
  text-align: center;
  position: relative;
  height: 210px;
}

.rlogo img {
  position: absolute;
  z-index: 99;
  left: 50%;
  margin-left: -150px;
}

.tiger2 {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.s5list {
  margin-top: 200px;
}

.s5lt {
  font-size: 72px;
}

.s5la {
  font-size: 24px;
  /* line-height: 1.8em; */
}

.joinDis {
  color: #070000;
  font-size: 36px;
  padding: 14px 45px;
  border-radius: 20px;
  border: 1px solid #fff;
  cursor: pointer;
  margin-top: 87px;
}

.joinDis:hover {
  color: #1890ff;
}

.celbox {
  position: fixed;
  z-index: 999;
  top: 25%;
  right: 5%;
}

.cel {
  width: 25px;
  height: 25px;
  background: #979797;
  border-radius: 50%;
}

.act {
  background: #fff;
}

.cel:nth-child(n + 1) {
  margin-top: 25px;
}

.section6 {
  background: #024076;
  position: relative
}

.tg6 {
  position: absolute;
  bottom: 0;
  right: 18vw;
}

.s6list {
  display: flex;
}

.s6list:last-child {
  margin-bottom: 100px;
}

.s6l img {
  width: 47.2px;
  height: 45.15px;
}

.s6m {

  /* height: 100%; */
  width: 10px;
  background: #fff;
  margin: 0 22px 0 37.8px;
}

.s6r {
  background: #fff;
  width: 932px;
  border-radius: 20px;
  padding: 50px 75px 50px 64px;
  margin-bottom: 41px;
}

.s6rt {
  font-size: 24px;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 20px;
  margin-bottom: 50px;
  background: linear-gradient(to right, #024076, #F0A3EC);
}

.s6rde {
  font-size: 24px;
  color: #000;
  line-height: 1.2;
}

.roadmap {
  margin-top: 260px;
  margin-bottom: 50px;
}

.sps6r {
  margin-bottom: 0;
}

@media screen and (max-width: 750px) {

  .contain {
    background: url("../../assets/phonebg.png") no-repeat center;
    background-size: cover;
  }

  .section1 {
    background: url("../../assets/phonebg.png") no-repeat center;
    background-size: cover;
  }

  .rlogo img {
    width: 194px;
    height: 237px;
    margin-left:-25%;
  }

  .section1,
  .section2,
  .section3,
  .section4,
  .section5 {
    border-bottom: 1px solid #070000;
  }

  .section2,
  .section3 {
    display: flex;
    align-items: center;
  }

  .top_nav {
    padding-top: 30px;
  }

  .logo {
    width: 72px;
    height: 72px;
  }

  .igs_box {
    margin-top: 20px;
  }

  .igs_box img {
    width: 30px;
  }

  .igs {
    margin: 0 5px;
  }

  .igss {
    margin-left: 10px;
  }

  .mid {
    top: 20%;
    height: 70%;
  }

  .ipmid {
    top: 40%;
    height: 55%;
  }

  .mid_title {
    font-size: 30px;
  }

  .mid_title2 {
    font-size: 24px;
  /*  margin: 150px 0; */
  }

  .mid_title3 {
    font-size: 24px;
  }

  .ipt {
    width: 80%;
    left: 10%;
    margin-left: 0;
   /* bottom: 2vh;*/
  }

  .footer_title {
    font-size: 9px;
  }

  .section1 .mid_title {
    font-size: 36px;
    top: 38vh;
  }

  .s1footer .s1title {
    font-size: 24px;
  }

  .s1footer a {
    font-size: 24px;
    padding: 13px 14px;
  }

  .s1footer {
    width: 80%;
    left: 10%;
    bottom: 0;
  }

  .s2lt {
    color: #5177b0;
    font-size: 20px;
  }

  .s2la {
    color: #fff;
    font-size: 24px;
  }

  .s5lt {
    font-size: 35px;
  }

  .s5la {
    font-size: 16px;
    margin-top: 50px;
  }

  .s2las {
    margin-top: 10px;
  }

  .s2la img {
    width: 40px;
  }

  .s2r {
    height: inherit;
    text-align: right;
    margin-top: 20px;
  }

  .s2list {
    padding: 25px 0;
  }

  .mg30 {
    margin-bottom: 200px;
  }

  .tiger {
    width: 80%;
    position: relative;
  }

  .fet {
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 52px;
  }

  .fet2 {
    /* margin-top: 100px; */
  }

  .fet3 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 24px;
  }

  .ttc {
    font-size: 15px;
    margin-top: 30px;
  }

  .ttcpic {
    /* margin-bottom: 120px; */
    margin-bottom: 30%;
  }

  .imgbox p {
    font-size: 20px;
  }

  .sp {
    text-align: center !important;
    margin-top: 20px;
  }

  .sp img {
    width: 100%;
  }

  .joinDis {
    font-size: 14px;
  }

  .rlogo {
    top: 80px;
  }

  .s5list {
    /* margin-top: 230px; */
    margin-top: 53%;
  }

  .anticon-instagram {
    font-size: 30px !important;
  }

  .anticon-menu {
    font-size: 20px !important;
  }

  .celbox {
    display: none;
  }

  .s2list {
    width: 88%
  }

  .dontshow {
    display: none;
  }

  .mgb30 {
    padding-bottom: 80px;
    border-bottom: 1px solid #070000;
  }

  .mg50 {
    padding-bottom: 80px;
  }

  .section3 {
    height: 100vh;
  }

  .roadmap {
    margin-top: 230px;
  }

  .s6r {
    background: #fff;
    width: 80%;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 41px;
  }

  .s6rde,
  .s6rt {
    font-size: 14px;
  }

  .s6l img {
    width: 26px;
    height: 23px;
  }

  .s6m {
    margin: 0 10px;
  }

  .sps6r {
    margin-bottom: 0;
  }

  .s6list:last-child {
    margin-bottom: 0px;
  }

  .tiger2 {
    position: relative;
    width: 230px;
  }

  .s2r {
    text-align: center;
  }

  .s6rt {
    margin-bottom: 10px;
    padding: 5px 15px;
  }

  .s6r {
    padding: 20px 5px;
    width: 90%;
  }

  .s6rde {
    padding: 0 6px;
  }

  /* over */
}
</style>
