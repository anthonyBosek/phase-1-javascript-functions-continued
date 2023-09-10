function saturdayFun(act = "roller-skate") {
  return `This Saturday, I want to ${act}!`;
}

const mondayWork = function (act = "go to the office") {
  return `This Monday, I will ${act}.`;
};

function wrapAdjective(str = "*") {
  return function (adj = "special") {
    return `You are ${str + adj + str}!`;
  };
}
