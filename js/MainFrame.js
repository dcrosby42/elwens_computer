import NavItem from "./NavItem.js"
import PageLongRangeScans from "./PageLongRangeScans.js"
import PageAnimals from "./PageAnimals.js"
import {playSoundEvent,playKeyboardSound} from "./sounds.js"

export default {
  data: function() {
    return {
      mainTitle: "COMPUTER",
      currentPage: "page-long-range-scans",
      leftNav: [
        { text: "SCANS", id: 1, page: "page-long-range-scans"},
        { text: "ANIMALS", id: 2, page: "page-animals"},
        { text: "15-1.5", id: 3 },
      ],
    }
  },
  created: function(page) {
    let p = window.localStorage.getItem('currentPage')
    if (p !== null) {
      this.setPage(p)
    }
  },
  mounted: function(page) {
    playSoundEvent("login")

    window.addEventListener("keypress", function(e) {
      playKeyboardSound(e)
      // console.log(String.fromCharCode(e.keyCode));
    });
  },
  methods:{
    onNav: function(nav) {
      console.log("Navigate",nav.id,nav.text,nav.page)
      this.setPage(nav.page)
    },
    setPage: function(page) {
      if (page !== undefined) {
        this.currentPage = page
        window.localStorage.setItem('currentPage',page)
      }
    },

  },
  template: `
		<!-- PRE-HEADER ==================================================== -->

		<!-- HEADER ==================================================== -->

	<div class="lcars-app-container">
		<div id="header" class="lcars-row header">


      <div id="" class="lcars-row">
        <!-- ELBOW -->
        <div class="lcars-elbow left-bottom lcars-neon-carrot-bg"></div>

        <!-- BAR WITH TITLE -->
        <div class="lcars-bar horizontal lcars-neon-carrot-bg">
          <div class="lcars-title right lcars-neon-carrot"> {{ mainTitle }} </div>
        </div>

        <!-- ROUNDED EDGE DECORATED -->
        <div class="lcars-bar horizontal right-end decorated lcars-neon-carrot-bg"></div>
      </div>

		</div>

		<!-- SIDE MENU ================================================= -->

		<div id="left-menu" class="lcars-column start-space lcars-u-1">
      <nav-item v-for="item in leftNav" 
        v-bind:nav="item" 
        v-bind:key="item.id" 
        v-bind:activePage="currentPage"
        v-on:click="onNav" />
			<!-- FILLER -->
			<div class="lcars-bar lcars-u-1 lcars-neon-carrot-bg"></div>
		</div>

		<!-- FOOTER ==================================================== -->

		<div id="footer" class="lcars-row ">
			<!-- ELBOW -->
			<div class="lcars-elbow left-top lcars-neon-carrot-bg"></div>
			<!-- BAR -->
			<div class="lcars-bar horizontal both-divider bottom lcars-neon-carrot-bg"></div>
			<!-- ROUNDED EDGE -->
			<div class="lcars-bar horizontal right-end left-divider bottom lcars-neon-carrot-bg"></div>
		</div>

		<!-- MAIN CONTAINER -->
		<div id="container">
      <component v-bind:is="currentPage"></component>
    </div>

  </div>
`,
  components: {
    NavItem,
    PageLongRangeScans,
    PageAnimals,
  },
}
