class Buttons {
    constructor(){
        this.email = createInput('Your email');
        this.index  += 1;
    }
    hide(){
        this.email.hide();
    }
    display(){
        this.email.position(50,1000);
        value = this.email.value();
        
    }
    //getState(){
     // var gameStateRef  = database.ref('gameState');
      //gameStateRef.on("value",function(data){
       //  emailno = data.val();
     // })
  
 //   }
  
   // update(state){
     // database.ref('/').update({
       // emailno: state
     // });
    //}
    update(){
      var emailname = "emailno" + this.index;
      database.ref(emailname).set({
        name: emails
      });
    }
    
}
