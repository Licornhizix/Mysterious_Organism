// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory= (number, array) => {
 console.log(array);
  return {
    specimenNum : number,
    dna : array,
    mutate() {
      let newBase = returnRandBase();
      let pickRandom = Math.floor(Math.random() * 15);
      do{
        newBase = returnRandBase();   
      }while(newBase === this.dna[pickRandom]);
      this.dna[pickRandom] = newBase;
      return this.dna
    },
    compareDNA(pAequor) {
      let matches = 0;
      let length = this.dna.length;
      for (let i = 0; i < length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matches++;
        }
      }
      const simliaritys = (100 * matches) / length;
      console.log(
        ` Specimen ${this.specimenNum} and specimen ${
          pAequor.specimenNum
        } have ${simliaritys.toFixed(2)} % DNA in common`
      );
    },
    willLikelySurvive() {
      const array = this.dna;
      let countC = 0; // Pour compter les occurrences de 'C'
      let countG = 0; // Pour compter les occurrences de 'G'

      for (let i = 0; i < array.length; i++) {
        if (array[i] === 'C') {
          countC++;
         } else if (array[i] === 'G') {
          countG++;
         }
       }
          console.log("Occurrences de 'C':", countC);
          console.log("Occurrences de 'G':", countG);
          if (countC >= 0.6*array.length  || countG >= 0.6*array.length) {
            return true;
          } else {
            return false;
          }
    }
  }
}



/*const saneDNA = (array) => {
let trueArrays= [];
if (array.willLikelySurvive() === true) {
  trueArrays.push(array.dna);
  return trueArrays + ' is a good specimen for the search';
} else {
  return 'You lose your time with this'
}

}*/
//specimen 1 + DNA
const test1 = pAequorFactory(1, mockUpStrand());
console.log(test1, "\n");

//specimen 2 + DNA
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test2);

//comparsion of matching DNA strands in %
test1.compareDNA(test2);

//the mutated DNA
const test3 = test1.mutate();
console.log(`Mutated Array ${test3}`, "\n");

//Count C or G bases
const test4 = test1.willLikelySurvive();
console.log(`${test4} P. aequor will don't survive!`, "\n");

//console.log(saneDNA(test1));
const specimensSurvived = [];
let specimenCounter = 1;

while (specimensSurvived.length < 30) {
  let newOrganism = pAequorFactory(specimenCounter, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    specimensSurvived.push(newOrganism);
  }
  specimenCounter++;

}
//console.log(specimensSurvived.length);
console.log(specimensSurvived);


