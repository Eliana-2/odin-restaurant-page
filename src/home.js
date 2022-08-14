import fishNChips from './fishandchips.jpg';
import restaurant from './restaurant.jpg';
import fishing from './fishing.jpg';

const contentDiv = document.getElementById('content');

function makeImage(source, parent) {
  const image = new Image();
  image.src = source;
  image.classList.add('image');
  parent.appendChild(image);
}

function makePara(text, parent) {
  const para = document.createElement('p');
  para.innerHTML = text;
  para.classList.add('para');
  parent.appendChild(para);
}

function makeParaDiv(textArray, parent) {
  const paraDiv = document.createElement('div');
  paraDiv.classList.add('paras');

  for(const text of textArray) {
    makePara(text, paraDiv);
  }

  parent.appendChild(paraDiv);
}

function makeSectionDiv(source, textArray, layout) {
  const sectionDiv = document.createElement('div');
  sectionDiv.classList.add('image-para-container');

  if(layout === 0) {
    makeImage(source, sectionDiv);
    makeParaDiv(textArray, sectionDiv);
  }
  else {
    makeParaDiv(textArray, sectionDiv);
    makeImage(source,sectionDiv);
  }

  contentDiv.appendChild(sectionDiv);
}

function displayHome() {
  const header = document.createElement('h2');
  header.textContent = 'Something\'s Fishy about Our Food!';
  contentDiv.appendChild(header);

  makeSectionDiv(fishNChips, ['Seafood, not C-food.', 
  'Dive into a decadent menu complete with several endangered species.', 
  'Try our famous chowder and jam out with your clam out!'],
  0);

  makeSectionDiv(restaurant, ['Enjoy the sea-nic view from our restaurant!',
  'We\'ve been making waves with our dedication to fresh ingredients and quality catches since 1973.',
  'Don\'t forget to follow us on Instaclam!'],
  1);

  makeSectionDiv(fishing, ['Can\'t resist the lure of delivery? Order online!',
  'Our deals will send you reeling!',
  '\"I\'m blue, da ba dee da ba di\" <br>- the ocean, probably'],
  0)

}

export {displayHome};