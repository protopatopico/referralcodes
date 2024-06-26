// Sample data for deal cards
const deals = [
    {
        name: 'Robinhood',
        description: 'Free stock worth $5 to $200',
        icon: 'robinhood.webp',
        url:'robinhood'
    },
    {
        name: 'Cash App',
        description: 'Free $5 bonus',
        icon: 'cashapp.webp',
        url:'cashapp'
    },
    {
        name: 'American Express Blue Cash Everyday',
        description: '$200 Signup bonus',
        icon: 'amex.webp',
        url:'americanexpress'
    },
    {
        name: 'Wealthfront',
        description: 'Extra 0.50% interest for 3 months = 5.5% APY!',
        icon: 'wealthfront.webp',
        url:'wealthfront'
    },
    {
        name: 'Temu',
        description: '$100 coupon bundle and 30% discount',
        icon: 'temu.webp',
        url:'temu'
    },
    {
        name: 'Grubhub',
        description: '$10 off first order',
        icon: 'grubhub.webp',
        url:'grubhub'
    },
    {
        name: 'Poshmark',
        description: '$10 in Posh Credit',
        icon: 'poshmark.webp',
        url:'poshmark'
    },
    {
        name: 'Rakuten',
        description: 'Get a $10 Cash Bonus and extra 10% cash back',
        icon: 'rakuten.webp',
        url:'rakuten'
    },
    {
        name: 'Aliexpress',
        description: 'Up to 90% off',
        icon: 'aliexpress.webp',
        url:'aliexpress'
    },
    {
        name: 'Honey',
        description: 'Atomatically find and applies coupon codes when you signup for honey',
        icon: 'honey.webp',
        url:'honey'
    },
    {
      name: 'Humble Bundle',
      description: 'Become a member with Humble Choice which offers huge discounts on great bundles of PC games',
      icon: 'humblebundle.webp',
      url:'humblebundle'
    },
    {
      name: 'CSGORoll',
      description: '3 free boxes, and 5% Deposit Bonus when using code: EZCSGOCASES',
      icon: 'csgoroll.webp',
      url:'csgoroll'
    },
    {
      name: 'Key-Drop',
      description: 'Use code: VRY8DXYC and get a free $0.50 + 10% bonus and win free CS2 skins',
      icon: 'keydrop.webp',
      url:'keydrop'
    },
    {
      name: 'CSGOLuck',
      description: 'Deposit match bonus up to 100 coins and free CS2 cases everyday. Use code: EZCSGOSKINS',
      icon: 'csgoluck.webp',
      url:'csgoluck'
    },
    {
      name: 'CSGOFast',
      description: 'Use code: EZCSGOSKINS for a free CS2 skin and +10% into the balance',
      icon: 'csgofast.webp',
      url:'csgofast'
    },
    {
      name: 'Farmskins',
      description: 'Get $0.90 added to your balance using promo code: EZCSSKINS',
      icon: 'farmskins.webp',
      url:'farmskins'
    },
    {
      name: 'DaddySkins',
      description: 'Use promo code: EZCSGOSKINS for +5% deposit bonus',
      icon: 'daddyskins.webp',
      url:'daddyskins'
    },
    {
      name: 'bandit.camp',
      description: 'Get a free $0.15 sign up bonus and +5% deposit bonus using code: freerustscrap',
      icon: 'banditcamp.webp',
      url:'banditcamp'
    },
    {
        name: 'DMarket',
        description: 'Virtual In-Game Items Marketplace for CSGO, Rust, Dota, TF2',
        icon: 'dmarket.webp',
        url:'dmarket'
    },
  ];

  // Get the search input and deal grid elements
    const searchInput = document.querySelector('header input[type="text"]');
    const dealGrid = document.querySelector('.deal-grid');
  
  // Function to create and append deal cards
  function createDealCards() {
    const dealGrid = document.querySelector('.deal-grid');
  
    deals.forEach(deal => {
      const card = document.createElement('div');
      card.classList.add('deal-card');
      card.addEventListener('click', () => {
        window.location.href = deal.url; // Navigate to the deal's URL on click
      });
  
      const icon = document.createElement('img');
      icon.src = `images/${deal.icon}`;
      icon.alt = deal.name;
  
      const name = document.createElement('h3');
      name.textContent = deal.name;
  
      const description = document.createElement('p');
      description.textContent = deal.description;
  
      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(description);
  
      dealGrid.appendChild(card);
    });
  }
  
  // Call the function to render deal cards
  createDealCards();

  // Function to filter and display deal cards based on search input
function filterDealCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDeals = deals.filter(deal =>
      deal.name.toLowerCase().includes(searchTerm)
    );
  
    // Clear the deal grid
    dealGrid.innerHTML = '';
  
    // Create and append deal cards for filtered deals
    filteredDeals.forEach(deal => {
      const card = document.createElement('div');
      card.classList.add('deal-card');
      card.addEventListener('click', () => {
        window.location.href = deal.url;
      });
  
      const icon = document.createElement('img');
      icon.src = `images/${deal.icon}`;
      icon.alt = deal.name;
  
      const name = document.createElement('h3');
      name.textContent = deal.name;
  
      const description = document.createElement('p');
      description.textContent = deal.description;
  
      card.appendChild(icon);
      card.appendChild(name);
      card.appendChild(description);
  
      dealGrid.appendChild(card);
    });
  }
  
  // Call the filterDealCards function initially to display all deals
  filterDealCards();
  
  // Add event listener to the search input
  searchInput.addEventListener('input', filterDealCards);
