const contentDiv = document.getElementById('content');

function makeMenuItem(item, price, parent) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  
  const itemName = document.createElement('div');
  itemName.textContent = item;
  itemName.classList.add('item-name');
  menuItem.appendChild(itemName);

  const itemPrice = document.createElement('div');
  itemPrice.textContent = price;
  itemPrice.classList.add('item-price');
  menuItem.appendChild(itemPrice);

  parent.appendChild(menuItem);
}

function makeMenuSection(headerText, items, prices) {
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-section');

  const sectionHeader = document.createElement('h3');
  sectionHeader.textContent = headerText;
  sectionHeader.classList.add('menu-section-header');
  menuSection.appendChild(sectionHeader);

  const sectionList = document.createElement('ul');
  sectionList.classList.add('menu-items');
  for(let i = 0; i < items.length; i++) {
    makeMenuItem(items[i], prices[i], sectionList);
  }
  menuSection.appendChild(sectionList);
  contentDiv.appendChild(menuSection);
}

function displayMenu() {
  const header = document.createElement('h2');
  header.textContent = 'Menu';
  contentDiv.appendChild(header);

  makeMenuSection('Favorites', ['Fish \'n\' Chips', 'Famous Clam Chowder', 'Classic Fish Taco', 'Krabby Patty w/ Cheese', 'Cum Bucket'], ['$9.99', '$7.99', '$3.99', '$101.00', '$0.69']);
  makeMenuSection('Delicacies', ['Squidward Tortellini', 'Blue Whale Waffles', 'Kelp Wanted'], ['$99.99', '$420.00', '$12.99']);
  makeMenuSection('Drinks', ['Killer Ale', 'Manta Orange'], ['8.99', '$2.99']);
  makeMenuSection('Dessert', ['Shark Fin Scoop', ], ['$6.99']);
}

export {displayMenu}