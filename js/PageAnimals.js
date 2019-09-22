import LcarsElements from "./LcarsElements.js"


export default {
  components: LcarsElements,
  template: `
    <lcars-row>
      <lcars-column v-bind:width="10">
        <header-elbow-right title="LIFE-FORM CATALOG" color="chestnut-rose" />
        <lcars-row>
          <lcars-column v-bind:width="5" v-bind:height="5" fg-color="husk">
          </lcars-column>
          <lcars-column v-bind:width="3">
          </lcars-column>
				
          <lcars-column1 />
          <lcars-column>
            <tab-left color="lilac">AARDVARK</tab-left>
            <tab-left color="lilac">BEAVER</tab-left>
            <tab-left color="lilac">CAT</tab-left>
            <tab-left color="lilac">DOG</tab-left>
            <tab-left color="lilac">ELEPHANT</tab-left>
          </lcars-column> 
        </lcars-row>

      </lcars-column> 

    </lcars-row>
  `,
}
