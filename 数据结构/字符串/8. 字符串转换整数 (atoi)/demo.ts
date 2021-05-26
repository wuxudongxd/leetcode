enum States {
  start,
  signed,
  inNumber,
  end,
}

enum Signs {
  positive,
  negative,
}

const maxInt = 2 ** 31 - 1;
const minInt = -(2 ** 31);

class Automaton {
  public sign = Signs.positive;
  public ans = 0;

  private state = States.start;
  private table = {
    [States.start]: [States.start, States.signed, States.inNumber, States.end],
    [States.signed]: [States.end, States.end, States.inNumber, States.end],
    [States.inNumber]: [States.end, States.end, States.inNumber, States.end],
    [States.end]: [States.end, States.end, States.end, States.end],
  };
  private charToIntMap: { [char: string]: number } = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  };

  private getCol(c: string): number {
    if (c === " ") {
      return 0;
    }

    if (c === "+" || c === "-") {
      return 1;
    }

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(c)) {
      return 2;
    }
    return 3;
  }
  
  process(c: string): void {
    this.state = this.table[this.state][this.getCol(c)];

    if (this.state === States.inNumber) {
      this.ans = this.ans * 10 + this.charToIntMap[c];
      this.ans =
        this.sign === Signs.positive
          ? Math.min(this.ans, maxInt)
          : Math.min(this.ans, -minInt);
    } else if (this.state === States.signed) {
      this.sign = c === "+" ? Signs.positive : Signs.negative;
    }
  }
}

function myAtoi(s: string): number {
  const automation = new Automaton();
  for (const c of s) {
    automation.process(c);
  }

  return (automation.sign === Signs.positive ? 1 : -1) * automation.ans;
}
