function Bola(context) {
   this.context = context;
   this.x = 0;
   this.y = 0;
   this.velocidadeX = 0;
   this.velocidadeY = 0;
   this.cor = 'black';
   
}
Bola.prototype = {
   // Interface de sprite
   atualizar: function() {
      var ctx = this.context;
	if (this.x < 40 || this.x > ctx.canvas.width - 40) //alterado
         this.velocidadeX *= -1;

      if (this.y < 40 || this.y > ctx.canvas.height - 40)//alterado
         this.velocidadeY *= -1;
	  
      this.x += this.velocidadeX;
      this.y += this.velocidadeY;
   },
   desenhar: function() {
      var ctx = this.context;
      ctx.save();
      ctx.fillStyle = this.cor;
      ctx.beginPath();
	  ctx.fillRect(this.x, this.y, 40, 40);//alterado
      //ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();      
   },
   // Interface de colisão
   retangulosColisao: function() {
      return [
         {
           x: this.x,
           y: this.y,
           largura: 40,//alterado
           altura:  40  //alterado
         }
      ];
   },
   colidiuCom: function(sprite) {
      if (this.x < sprite.x)  // Estou na esquerda
         this.velocidadeX = -Math.abs(this.velocidadeX);  // -
      else
         this.velocidadeX = Math.abs(this.velocidadeX);   // +
 
      if (this.y < sprite.y)  // Estou acima
         this.velocidadeY = -Math.abs(this.velocidadeY);  // -
      else
         this.velocidadeY = Math.abs(this.velocidadeY);   // +
   }
}
