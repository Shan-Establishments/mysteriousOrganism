// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    //changes a random base to new base
    mutate() {
      let newBase = [];
      for (let i = 0; i < this.dna.length; i++) {
        let newDna = returnRandBase();
        while (newDna === this.dna[i]) {
          newDna = returnRandBase();
        }
        newBase.push(newDna);
      }
      return (this.dna = newBase);
    },
    compareDNA(pAequor) {
      console.log();
      this.dna = dna;
      const altDNA = pAequor.dna;
      let num = 0;
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === altDNA[i]) {
          num++;
        } //this function compares the DNAs
      }
      num /= 15;
      num *= 100;
      console.log(
        `The two strands are ${Number.parseFloat(num).toFixed(2)}% the same`
      ); /*Estimates how similar the DNA strands are*/
    },
    willLikelySurvive() {
      let number = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          number++; //Determines whether or not the DNA will survive
        }
      }
      number /= 15;
      number *= 100;
      if (number > 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}

const num1 = pAequorFactory(1, mockUpStrand());
const pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor);
console.log(pAequor.mutate());
console.log(pAequor.compareDNA(num1));
console.log(pAequor.willLikelySurvive(num1));

/* Created 30 instances that pAequor will survive */
let instance = () => {
  let team = [];
  for (let i = 0; i < 31; ) {
    let species = pAequorFactory(i, mockUpStrand());
    if (species.willLikelySurvive == true) {
      i++;
      team.push(trueObject);
    }
  }
  return team;
};

console.log(instance());
