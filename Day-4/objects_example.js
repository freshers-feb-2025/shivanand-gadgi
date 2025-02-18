let operation={
    num1:2,
    num2:2,
    add:function(){
          console.log(this.num1+this.num2);
    },
    sub:function(){
        console.log(this.num1-this.num2);
    },
    mult:function(){
    console.log(this.num1*this.num2);
    },
    div:function(){
    console.log(this.num1/this.num2);
    }

}

operation.add();
operation.sub();
operation.mult();
operation.div();

