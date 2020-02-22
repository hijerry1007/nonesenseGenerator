function generateNonesense(options) {
  // add material for nonesense
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '颱風天泛舟'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '颱風天泛舟'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找VC募錢', '颱風天泛舟']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // select nonsense randomly
  const taskRandomNum = randomNumber(task.engineer)
  const phraseRandomNum = randomNumber(phrase)

  // combine the sentence
  let sentence = ``

  if (options.occupation === 'engineer') {
    sentence += `工程師${task.engineer[taskRandomNum]}${phrase[phraseRandomNum]}`

  }
  if (options.occupation === 'designer') {
    sentence += `設計師${task.designer[taskRandomNum]}${phrase[phraseRandomNum]}`
  }
  if (options.occupation === 'entrepreneur') {
    sentence += `創業家${task.entrepreneur[taskRandomNum]}${phrase[phraseRandomNum]}`
  }
  // return error notice
  if (Object.keys(options).length === 0) {
    sentence += `好人 原來你不想對他們說幹話! 但請至少選擇一個人說幹話喔`
  }
  // return the sentence
  return sentence
}

//for random Number 
function randomNumber(array) {
  let number = Math.floor(Math.random() * (array.length))
  return number;
}

module.exports = generateNonesense