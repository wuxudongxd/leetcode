function replaceSpace(s: string): string {
    
    // 正则版
    return s.replace(/ /g, "%20");
    
}

replaceSpace("We are happy.");