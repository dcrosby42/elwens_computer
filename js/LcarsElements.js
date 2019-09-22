import ZoomGrid from "./ZoomGrid.js"

const LcarsBase = {

  props: {

    color:{
      type: String,
      default: "",
    },

    fgColor:{
      type: String,
      default: "",
    },

    width:{
      type: Number,
      default: 0,
    },

    height:{
      type: Number,
      default: 0,
    },
  },

  methods: {

    bgColorClass: function() {
      if (this.color == "") { return "" }
      return "lcars-" + this.color + "-bg"
    },

    fgColorClass: function() {
      if (this.fgColor == "") { return "" }
      return "lcars-" + this.fgColor + "-color"
    },

    sizeClass: function() {
      if (this.height == 0 && this.width == 0) {
        return ""
      }
      if (this.height == 0) {
        return "lcars-u-" + this.width.toString()
      }
      if (this.width == 0) {
        return "lcars-vu-" + this.height.toString()
      }
      return "lcars-u-"+this.width.toString()+"-"+this.height.toString()
    },

    appendBases: function(classes) {
      return _.concat(classes,
        this.sizeClass(),
        this.bgColorClass(),
        this.fgColorClass(),
      )
    },

  }
}

const LcarsElement = {
  extends: LcarsBase,
  props: {
    color:{
      type: String,
      default: "tan",
    },
    round:{
      type: String,
      default: "",
    },
  },
  methods:{
    rounding: function() {
      let r = ""
      if (this.round == "both") {
        r = "rounded"
      } else if (this.round == "left") {
        r = "left-rounded"
      } else if (this.round == "right") {
        r = "right-rounded"
      }
      return r
    },
  },
  computed: {
    classList: function() {
      return this.appendBases([
        "lcars-element",
        this.rounding(),
      ])
    },
  },
  template: `<div :class="classList"><slot>NCC 1707-D</slot></div>`
} 

const LcarsRow = {
  extends: LcarsBase,
  computed: {
    classList: function() {
      return this.appendBases([
        "lcars-row",
      ])
    },
  },
  template: `<div :class="classList"><slot></slot></div>`,
}

const LcarsColumn = {
  extends: LcarsBase,
  computed: {
    classList: function() {
      return this.appendBases([
        "lcars-column",
      ])
    },
  },
  template: `<div :class="classList"><slot></slot></div>`,
}

const LcarsColumn1 = {
  extends: LcarsColumn,
  props: {
    width:{
      type: Number,
      default: 1,
    },
  }
}

const TabLeft = {
  extends: LcarsElement,
  props: {
    round: {
      type: String,
      default: "left",
    },
  },
}

const TabRight = {
  extends: LcarsElement,
  props: {
    round: {
      type: String,
      default: "right",
    },
  },
}

const HeaderElbowRight = {
  extends: LcarsBase,
  props: {
    title: {
      type: String,
      default: "LCARS",
    },
  },
  components: {
    LcarsRow,
  },
  template: `
    <lcars-row>
      <div :class="appendBases(['lcars-bar', 'horizontal', 'left-end', 'decorated'])"></div>
      <div :class="appendBases(['lcars-bar', 'horizontal', 'both-divider'])">{{ title }}</div>
      <div :class="appendBases(['lcars-elbow', 'right-bottom'])"></div>
    </lcars-row>
  `
}

export default {
  LcarsElement,
  LcarsRow,
  LcarsColumn,
  LcarsColumn1,
  HeaderElbowRight,
  TabLeft,
  TabRight,
  ZoomGrid,
}

