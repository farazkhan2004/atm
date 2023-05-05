var inp=+prompt('enter your number 1: balance check 2:withdrawl 3:doposit 4: exit')
var bal=10000

while(ture){
    if(inp==1){
        document.write('your balance is: ' +bal)
    }
    else if(inp==2){
        var w=+prompt('enter your withdraw')
        if(w>bal){
            document.write('your balance is not enough to withdrawl')
        }
        else{
            document.write('your withdraw' +w+'your new balance is '+bal-w)
        }
    }
    else if(inp==3){
        var d=+prompt('enter amount to deposit')
        document.write('your new balance is'+bal+d)
    }
    else{
        break
    }
}