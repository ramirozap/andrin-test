  class WalterCalculator {

    constructor() {
      this.tare = 0.08;
      this.price = 0.53;
    }

    calculate(money){
      let iterations = 0;
      let result = [];
      if (this.price > money){
        result.push(`No Walter for you.`);
      }else if (this.price == 0) {
        result.push('Dunno where you got that deal but you have a lifetime supply of free Walter!\n');
      }else if (this.price<this.tare) {
        result.push('Congratulations! Your drinking has made you rich!\n')
      }else{
        while ( money >= this.price) {
          //while have money buy more bottles, push iteration to array
          let iteration = {
            bottles: 0,
            remainingCash: 0,
            totalTare: 0,
            finalCash: 0
          };
          let bottles = Math.floor(money / this.price);
          iteration.bottles = bottles;
          iterations += 1;
          //money after buy bottles
          money -= (bottles * this.price);
          iteration.remainingCash = money;
          iteration.totalTare = this.getChange(bottles);
          //money after change empty bottle
          money += iteration.totalTare;
          iteration.finalCash = money;
          // push iterartion
          money = Math.round(money*Math.pow(10,2))/Math.pow(10,2);
          result.push(iteration);
        }
      }
      result.unshift(iterations);
      return result;
    }

    getChange(bottles){
      return bottles * this.tare;
    }

    setPrice(val){
      this.price = val;
    }

  }

  export {WalterCalculator}
