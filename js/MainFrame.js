import NavItem from "./NavItem.js"
import PageSample1 from "./PageSample1.js"
import PageAnimals from "./PageAnimals.js"

export default {
  props: [],
  data: function() {
    return {
      mainTitle: "COMPUTER",
      message: "This is the message!",
      leftNav: [
        { text: "1234", key: 1},
        { text: "546L", key: 2 },
        { text: "15-1.5", key: 3 },
      ],
      currentPage: "sample1",
    }
  },
  components: {
    NavItem,
    PageSample1,
    PageAnimals,
  },
  computed: {
    currentPageComp: function(){
      return "page-" + this.currentPage.toLowerCase()
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
      <NavItem v-for="item in leftNav" v-bind:nav="item" v-bind:key="item.key" ></NavItem>
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
      <component v-bind:is="currentPageComp"></component>
    </div>

  </div>
`}
