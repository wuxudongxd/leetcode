// 1 <= word.length <= 100
// word 由小写和大写英文字母组成

function detectCapitalUse(word: string): boolean {
  if (word.length === 1) {
    return true;
  }
  if (word[0] >= 'a' && word[0] <= 'z') {
    for (const char of word) {
      if (char < 'a' || char > 'z') {
        return false;
      }
    }
    return true;
  } else {
    if (word[1] >= 'A' && word[1] <= 'Z') {
      for (const char of word.slice(1, word.length)) {
        if (char < 'A' || char > 'Z') {
          return false;
        }
      }
      return true;
    } else if (word[1] >= 'a' && word[1] <= 'z') {
      for (const char of word.slice(1, word.length)) {
        if (char < 'a' || char > 'z') {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}
