const founderFortunes = [
  "Stormy days ahead,\nResilient hearts navigate,\nNew dawn will arise. #spotfounder",
  "Fierce economic gales,\nInnovation's steady flame,\nBrightens darkest times. #spotfounder",
  "Uncertain markets,\nBold spirits find ways to thrive,\nChase dreams undeterred. #spotfounder",
  "Interest rates may climb,\nBut so will your steadfast will,\nAdapt and conquer. #spotfounder",
  "Inflation's sharp claws,\nCarve a path through the chaos,\nForge opportunity. #spotfounder",
  "Though banks may crumble,\nEntrepreneur's courage stands,\nBrick by brick, rebuild. #spotfounder",
  "Recession's cold grip,\nYet founder's heart burns fiercely,\nSparking change anew. #spotfounder",
  "Profits may elude,\nPersistence will find a way,\nHope fuels the journey. #spotfounder",
  "Challenges will come,\nEntrepreneurial minds,\nNavigate the storm. #spotfounder",
  "Adversity's test,\nStrengthens the founder's resolve,\nA phoenix will rise. #spotfounder"
];

const startupFortunes = [
  "Bold ideas bloom,\nIn the soil of adversity,\nGrowth defies the odds. #spotfounder",
  "Though prices climb high,\nIngenuity prevails,\nNew paths will emerge. #spotfounder",
  "In the market's churn,\nInnovative spirits swim,\nUpstream, undaunted. #spotfounder",
  "Economic strife,\nYet startups find the silver,\nLining in the storm. #spotfounder",
  "Change is in the air,\nStartups adapt and flourish,\nUncertainty tamed. #spotfounder",
  "Surmounting challenge,\nStartups seize the fleeting chance,\nTo shape tomorrow. #spotfounder",
  "Solutions abound,\nIn the realm of the startup,\nThe future ignites. #spotfounder",
  "Lean times may descend,\nBut the nimble startup thrives,\nReinvention's key. #spotfounder",
  "Economies shift,\nYet entrepreneurial seeds,\nSprout through the pavement. #spotfounder",
  "Through the market's fog,\nVisionary minds perceive,\nBeacons of promise. #spotfounder"
];

function getRandomFortune(fortunes) {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

function getFounderFortuneCookie() {
  const fortuneElement = document.getElementById('fortune');
  const fortune = getRandomFortune(founderFortunes);
  fortuneElement.textContent = fortune;
  updateTweetButton(fortune);
}

function getStartupFortuneCookie() {
  const fortuneElement = document.getElementById('fortune');
  const fortune = getRandomFortune(startupFortunes);
  fortuneElement.textContent = fortune;
  updateTweetButton(fortune);
}

function updateTweetButton(text) {
  const tweetButton = document.getElementById('tweet-button');
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  tweetButton.setAttribute('href', tweetUrl);
}

document.addEventListener('DOMContentLoaded', function () {
  const founderButton = document.querySelector('[onclick="getFounderFortuneCookie()"]');
  founderButton.addEventListener('click', getFounderFortuneCookie);

  const startupButton = document.querySelector('[onclick="getStartupFortuneCookie()"]');
  startupButton.addEventListener('click', getStartupFortuneCookie);
});