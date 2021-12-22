class Member {
  constructor(memberVal) {
    this.memberInfo = this.parseMemberVal(memberVal);
  }
  
  memberInfoMap = {
    G: 0.88,
    S: 0.95,
    U: 1,
  }

  memberInfo = null;

  memberVal = null;

  setMemberVal (val) {
    this.memberVal = val;
  }

  parseMemberVal (val) {
    
    return Object.keys(this.memberInfoMap).filter(res => val.indexOf(res) !== -1)[0]
  }



  getMemberDiscount () {
    if (this.memberInfo) return this.memberInfoMap[this.memberInfo];

    return 1;
  }
}