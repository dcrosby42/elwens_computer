import LcarsElements from "./LcarsElements.js"


export default {
  components: LcarsElements,
  template: `
    <lcars-row>
      <lcars-column v-bind:width="10">
        <header-elbow-right title="LONG RANGE SCANS" color="danub" />
        <lcars-row>
          <lcars-column v-bind:width="5" v-bind:height="5" fg-color="husk">
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
            FSDK GJFH JKDFGHFDJKGHFDJ  FDSJ NGFDJ GFDNJGFDHJGDSH HG FSJGH DSJFHGSDFJJDSHGASD JHGDASJK GDSAHJ 
          </lcars-column>
          <lcars-column v-bind:width="3">
            <zoom-grid></zoom-grid>
          </lcars-column>
				
          <lcars-column1 />
          <lcars-column>
            <tab-left color="lilac">PICARD</tab-left>
            <tab-left color="lilac"></tab-left>
            <tab-left color="danub">GALILEO</tab-left>
            <tab-left color="lilac">RIKER</tab-left>
            <tab-left>DATA</tab-left>
          </lcars-column> 
        </lcars-row>

      </lcars-column> 

    </lcars-row>
  `,
}
