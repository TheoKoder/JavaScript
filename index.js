"use strict"
// two parameters for 1. n defining odd number of squares,2. r to define rotation degree


let magicSquare= (n, r)=>{
// declare empty magic square array
  const magicSquare= [];
// loop through rows(i) of masgic square
  for (let i = 0; i < n; i++) 
  {
      magicSquare.push(new Array(n).fill(0))
  }


  let num=1;
  let row, col;


  //account for starting position of 1, based on rotation
  const oddRotation= r % n===1;
  row = oddRotation ? Math.floor(n/2): n-1;
  col= oddRotation ? 0 : Math.floor(n/2);


  switch (r) {
    case 0:
        row=0;
        col= Math.floor(n/2);
        
        break;
    case 1:
            row=Math.floor(n/2);
            col= n-1;
            
            break;
    case 2:
                row=n-1;
                col= Math.floor(n/2);
                
                break;
    case 3:
                    row=Math.floor(n/2);
                    col=0;
                    
                    break;
    default:
        break;
  }


  //populate the magic square with numbers


  //using while loop


  while (num<=n*n) {


    magicSquare[row][col]=num;
    num++;
//calculate next position of 1


    const newRow= (row - 1 + n) % n;
//account for "1 to the right"
    const newCol= (col + 1) % n;
//determine whether to move up/down to the right
    const nPosition=magicSquare[newRow][newCol]!==0 ? (row=(row+1)%n):row=(newRow,col= newCol);


  }


  return magicSquare;
}


//Print a magicSquare
let printMagicSquare= (square)=>
{
    for (const rows of square) 
    {
        console.log(rows.join(''));
    }
}
// set desired odd dimensions and rotation
const n=3;
const r=1;


const newMagicSquare= magicSquare(n, r);
printMagicSquare(newMagicSquare);