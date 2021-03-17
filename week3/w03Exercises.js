//Q: Here the function makeUser returns an object.
//What is the result of accessing its ref? Why?
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?
  //A: The result is "John". user calls makeUSer(), .ref gets the ref value, "this", so user.ref.name is actually this.name

  let calculator = {
    first = 0,
    second = 0,
    read() {
        this.first = +prompt('Enter first value: ', 0);
        this.second = +prompt('Enter second value: ', 0);
    },
    sum() {return (this.first + this.second);},
    mul() {return (this.first * this.second);}
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep();