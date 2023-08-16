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
    } 
    }
    }


pAequorFactory();
console.log(pAequorFactory(1, mockUpStrand()));
const test = pAequorFactory(1, mockUpStrand());
console.log(test.mutate());




