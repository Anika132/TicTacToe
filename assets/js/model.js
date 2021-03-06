const TicTacToeOperations ={
    CurrentPlayer:"O",
    // AIPlayer:"X",
    Names:[[1,4,7],[3,4,5]],
    isWin:false,
    emptyBoxes:[],
    TogglePlayer(player){
        if(player=="O"){
            player='X';
        }
        else{
            player='O';
        }
        return player;
    },
    CheckHorizontal(Cells,num,noofrow){
        console.log("Inside Check Horizontal");
        if((Cells[num-1].innerText == Cells[num].innerText)&&(Cells[num].innerText==Cells[num+1].innerText)){
            console.log("Winner",noofrow);
            this.isWin=true;
            return this.getLine("H",noofrow);
        }else{
            return null;
        }
    },
    CheckVertical(Cells,num,noofcol){
        console.log("inside Check vertical ");
        if((Cells[num-3].innerText == Cells[num].innerText)&&(Cells[num].innerText == Cells[num+3].innerText)){
            console.log("Winner");
            this.isWin=true;
            return this.getLine("V",noofcol);
        }else{
            return null;
        }
    },
    CheckWin(Cells){
        var wincells=null;
        for(let i=0;i<this.Names.length;i++){
            for(let j=0;j<this.Names[i].length;j++){
                var number = this.Names[i][j];
                if((Cells[number].innerText =="O")||(Cells[number].innerText =="X")){
                    if(!this.isWin){
                        if(i==0){
                            var wincells=this.CheckHorizontal(Cells,number,j);
                            }else{
                            var wincells= this.CheckVertical(Cells,number,j);
                            }
                        }
                }
            }
        } 
        if((Cells[4].innerText=='O')||(Cells[4].innerText=='X')){
            if((Cells[0].innerText == Cells[4].innerText)&&(Cells[4].innerText==Cells[8].innerText)){
                console.log("Winner");
                this.isWin=true;
                this.isDiagonal=true;
               wincells= "diag1";
            }
            else
            if((Cells[2].innerText == Cells[4].innerText)&&(Cells[4].innerText==Cells[6].innerText)){
                console.log("Winner");
                this.isWin=true;
                this.isDiagonal=true;
               wincells="diag2";
            }
        }
        console.log("wincells",wincells);
        return wincells;
    },
    getWin(){
        return this.isWin;
    },
    getPlayer(player){
        if(player=="O"){
            return "2";
        }
        else{
            return "1";
        }
    },
    getLine(line,j){
        return line+j;
    },
    giveEmptyBoxes(cells){
        for(let i=0;i<cells.length;i++){
            console.log("inside for ")
            if((cells[i].innerText=="X")||(cells[i].innerText=="O")){
                console.log(" inside if cond ");
            }else{
                console.log("inside else cond ");
                this.emptyBoxes.push(i);
            }
        }
        return this.emptyBoxes;
    }
}