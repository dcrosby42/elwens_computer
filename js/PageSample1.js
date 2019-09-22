import LcarsElements from "./LcarsElements.js"


export default {
  components: LcarsElements,
  template: `
    <lcars-row>
      <lcars-column v-bind:width="10">
        <header-elbow-right title="DATABASE" color="lilac" />
        <lcars-row>
          <lcars-column v-bind:width="5" v-bind:height="5" fg-color="husk">
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
          </lcars-column>
          <lcars-column v-bind:width="3">
            <zoom-grid>SENSOR GRID</zoom-grid>
          </lcars-column>
				
          <lcars-column1 />
          <lcars-column>
            <tab-left>PICARD</tab-left>
            <tab-left color="lilac"></tab-left>
            <tab-left color="danub">GALILEO</tab-left>
            <tab-left color="danub">RIKER</tab-left>
            <tab-left>DATA</tab-left>
          </lcars-column> 
        </lcars-row>

      </lcars-column> 

    </lcars-row>
  `,
}
