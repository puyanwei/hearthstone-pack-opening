# Hearthstone Pack Openings

Lets open some packs using the Hearthstone API!

I'm using the API fetched from [here](https://market.mashape.com/omgvamp/hearthstone)

### Installation

```
git clone https://github.com/puyanwei/hearthstone-pack-opening.git
cd hearthstone-pack-opening
npm install
```

My API key is gitignored, so you'll need to grab your own. Create your own local file in the src folder and name it `apiKey.js`.

Inside it put in the following code;

```
const API_KEY = '[Your API Key]';

export default API_KEY;
```

Save it, and then `npm start`
