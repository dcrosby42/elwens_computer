import LcarsElements from "./LcarsElements.js"


export default {
  components: LcarsElements,
  template: `
    <div class="lcars-row">

      <div class="lcars-column lcars-u-10"> 
        <div class="lcars-column lcars-u-10">
          <div class="lcars-row">
            <div class="lcars-bar horizontal left-end decorated lcars-lilac-bg"></div>
            <div class="lcars-bar horizontal both-divider lcars-lilac-bg">DATABASE</div>
            <div class="lcars-elbow right-bottom lcars-lilac-bg"></div>
          </div>
        </div>
        <div class="lcars-row">
          <lcars-column v-bind:width="5" fg-color="husk">
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
          </lcars-column>
          <lcars-column v-bind:width="5">
            <zoom-grid>SENSOR GRID</zoom-grid>
          </lcars-column>
				
          <lcars-column />
          <lcars-column>
            <tab-left>PICARD</tab-left>
            <tab-left color="lilac"></tab-left>
            <tab-left color="danub">GALILEO</tab-left>
            <tab-left color="danub">RIKER</tab-left>
            <tab-left>DATA</tab-left>
          </lcars-column> 
        </div>

      </div> 

    </div>
  `,
}
