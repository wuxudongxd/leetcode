let map = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
}

function isValid(s: string): boolean {
    const stack: string[] = [];
    let top: string | undefined;

    for(let char of s){
        let value: string | undefined;
        if((value = map[char])){
            stack.push(value);
        }else{
            top = stack.pop();
            if(top !== char){
                return false;
            }
        }
    }

    return !stack.length;
}