let kamanda = [
    
]
let j,y
let i=0;
let add=('add,')
while(true){
    let x = prompt('Komanda')
    
    
    if(x.split(' ')[0]=='add,' ){
        kamanda.push(x.split(' ')[1])
    }else if(x.split(' ')[0]=='del,' ){
        for(key in kamanda){
        if(kamanda[key]==x.split(' ')[1]){
        kamanda.splice(key,1)}
        }
    }else if(x =='stop') break
     console.log(kamanda);
}