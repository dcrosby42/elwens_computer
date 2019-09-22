import ZoomGrid from "./ZoomGrid.js"

const LcarsBase = {
  props: {
    color:{
      type: String,
      default: "tan",
    },
    fgColor:{
      type: String,
      default: "",
    },
  },
  methods: {
    bgColorClass: function() {
      return "lcars-" + this.color + "-bg"
    },
    fgColorClass: function() {
      return "lcars-" + this.fgColor + "-color"
    },
  }
}

const LcarsElement = {
  extends: LcarsBase,
  props: {
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
      return [
        "lcars-element",
        this.rounding(),
        this.bgColorClass(),
        this.fgColorClass(),
      ]
    },
  },
  template: `<div :class="classList"><slot>NCC 1707-D</slot></div>`
} 

const LcarsColumn = {
  extends: LcarsBase,
  props: {
    width:{
      type: Number,
      default: 1,
    },
  },
  methods:{
    widthClass: function() {
      return "lcars-u-" + this.width.toString()
    },
  },
  computed: {
    classList: function() {
      return [
        "lcars-column",
        this.bgColorClass(),
        this.fgColorClass(),
        this.widthClass(),
      ]
    },
  },
  template: `<div :class="classList"><slot></slot></div>`,
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

export default {
  LcarsElement,
  LcarsColumn,
  TabLeft,
  TabRight,
  ZoomGrid,
}

