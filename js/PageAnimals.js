import LcarsElements from "./LcarsElements.js"
import { playSoundEvent } from "./sounds.js"

const AnimalArticle = {
  props:['animal'],
  components: LcarsElements,
  template: `<lcars-column v-bind:width="6"><lcars-row>
        <img halign="middle" width="70%" v-bind:src="'images/animals/'+animal.name.toLowerCase()+'.png'" />
</lcars-row>
      <h3>{{animal.name}}</h3>
      <p>{{animal.text}}</p>
</lcars-column>
  `,
}

const AnimalTable = {
  components: _.merge(LcarsElements, {AnimalArticle}),
  data: function(){
    return {
      selectedAnimal: null,
      animals:[
        {
          name: "AARDVARK",
          tabColor: "",
          text: `
          The aardvark (/ˈɑːrdvɑːrk/ ARD-vark; Orycteropus afer) is a medium-sized, burrowing, nocturnal mammal native to Africa.[2][3] It is the only living species of the order Tubulidentata,[4][5] although other prehistoric species and genera of Tubulidentata are known. Unlike other insectivores, it has a long pig-like snout, which is used to sniff out food. It roams over most of the southern two-thirds of the African continent, avoiding areas that are mainly rocky. A nocturnal feeder, it subsists on ants and termites, which it will dig out of their hills using its sharp claws and powerful legs. It also digs to create burrows in which to live and rear its young. It receives a "least concern" rating from the IUCN, although its numbers seem to be decreasing.
          Aardvarks are afrotheres, along with elephants, manatees, hyraxes, and related mammals. 
          `,
          sound:"",
        },
        {
          name: "BEAVER",
          tabColor: "",
          text: `The beaver (genus Castor) is a large, primarily nocturnal, semiaquatic rodent. Castor includes two extant species, the North American beaver (Castor canadensis) (native to North America) and Eurasian beaver (Castor fiber) (Eurasia).[1] Beavers are known for building dams, canals, and lodges (homes). They are the second-largest rodent in the world (after the capybara). Their colonies create one or more dams to provide still, deep water to protect against predators, and to float food and building material. The North American beaver population was once more than 60 million, but as of 1988 was 6–12 million. This population decline is the result of extensive hunting for fur, for glands used as medicine and perfume, and because the beavers' harvesting of trees and flooding of waterways may interfere with other land uses.[2]`,
          sound:"",
        },
        {
          name: "CAT",
          tabColor: "",
          text: `The cat (Felis catus) is a small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family.[4] The cat is either a house cat or a farm cat, which are pets, or a feral cat, which ranges freely and avoids human contact.[5] A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.[6]

          Cats are similar in anatomy to the other felid species, with a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. They are predators who are most active at dawn and dusk (crepuscular). Cats can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small animals. Compared to humans, they see better in the dark (they see in near total darkness) and have a better sense of smell, but poorer color vision. Cats, despite being solitary hunters, are a social species. Cat communication includes the use of vocalizations including meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language.[7] Cats also communicate by secreting and perceiving pheromones.[8] `,
          sound:"",
        },
        {
          name: "DOG",
          tabColor: "",
          text: `The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species)[5] is a member of the genus Canis (canines), which forms part of the wolf-like canids,[6] and is the most widely abundant terrestrial carnivore.[7][8][9][10][11] The dog and the extant gray wolf are sister taxa[12][13][14] as modern wolves are not closely related to the wolves that were first domesticated,[13][14] which implies that the direct ancestor of the dog is extinct.[15] The dog was the first species to be domesticated[14][16] and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.[17]

          Their long association with humans has led dogs to be uniquely attuned to human behavior[18] and they are able to thrive on a starch-rich diet that would be inadequate for other canid species.[19] Dogs vary widely in shape, size and colors.[20] They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of "man's best friend". `,
          sound:"",
        },
        {
          name: "ELEPHANT",
          tabColor: "",
          text: `Elephants, the largest existing land animals, are mammals of the family Elephantidae. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. The family Elephantidae also contains several now-extinct groups, including the mammoths and straight-tusked elephants. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs. Distinctive features of all elephants include a long trunk, tusks, large ear flaps, massive legs, and tough but sensitive skin. The trunk, also called a proboscis, is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. The pillar-like legs carry their great weight. `,
          sound:"",
        },
      ],
    }
  },
  created: function() {
    this.selectedAnimal = this.animals[0]
  },
  methods: {
    tabColorFor: function(animal) {
      if (animal.tabColor && animal.tabColor != "") {
        return animal.tabColor
      }
      return "danub"
    },
    mouseover: function(e) {
      playSoundEvent("tableTabMouseOver")
    },
    clicked: function(animal) {
      playSoundEvent("tableTabPressed")
      this.selectedAnimal = animal
    },
  },
  template: `
      <lcars-column v-bind:width="7">
        <header-elbow-right title="LIFE-FORM CATALOG" color="chestnut-rose" />
        <lcars-row>
          <lcars-column v-bind:width="6"  fg-color="husk">
            <animal-article v-if="selectedAnimal" v-bind:animal="selectedAnimal"></animal-article>
          </lcars-column>

          <lcars-column1>
            <tab-left @mouseover="mouseover" @click="clicked(animal)" v-for="animal in animals" v-bind:key="animal.name" v-bind:color="tabColorFor(animal)">{{animal.name}}</tab-left>
          </lcars-column1> 
        </lcars-row>

      </lcars-column> 
  `,
}

export default {
  components: {AnimalTable},
  template: `
    <animal-table />
  `,
}
