# Experience-Nepal
Website made for Hackthon at IT Meet v8.0 organized by Kathmandu University

## Screenshots
![Homepage](/screenshots/index.png)

![Swiper](/screenshots/swiper.png)

![Asking GPS permission](/screenshots/gps.png)

![Accessories nearby](/screenshots/airports.png)

![Herigate across Nepal](/screenshots/heritage.png)

## Idea
- [X] Create different packages for users. Each package contains information of places like Pilgrimage, World Heritage Sites, etc. of Nepal.
- [X] Once user chooses a package, display a map marking/plotting all the location in the package.
- [ ] Add a sidebar showing abstract detail of all the places plotted in the map.
- [ ] Display the data of the place/marker clicked by the user.
- [ ] Add filter options.
- [ ] User proper marker for each category.

## Development
- Used **HTML5**, **CSS3** and **JS** for making the webpages.
- Used **Mapbox** *v3.1.1* **Leaflet API** for maps
- Tested on **Google Chrome** *Version 71.0.3578.98 (Official Build) (64-bit)* running on **Windows 10** and **Windows 7**
- [Link](https://colorlib.com/wp/template/photon/) to slider template used in **[index.html](index.html)** page.
- New [**Homepage**](index.html) was copied from [Experience Nepal Homepage](https://github.com/OjeshManandhar/Experience-Nepal-Homepage)

## Installing
- To clone this repo
  ```shell
  git clone https://github.com/OjeshManandhar/Experience-Nepal.git
  ```
- Create a file named **token.js** inside **[map](map)** folder
- Write following code in it
  ```js
  const token = '<your public token key>';
  ```
- To get the token key(s) create a Mapbox account.
- Open **[index.html](index.html)** in your web browser.

## File Details
- **[index.html](index.html)** is the homepage.
- HTML files inside **[locationsHTML](map/locationsHTML)** are the webpages for individual packages.
- All webpages inside **[locationsHTML](map/locationsHTML)** use **[map.css](map/map.css)** and **[map.js](map/map.js)**.
- GeoJSON files inside **[locations](map/locations)** contains the information about places plotted on the map of each pages.

## Authors
[Ojesh Manandhar](https://github.com/OjeshManandhar) - Back-end, Front-end

[Shristi Singh Dongol](https://github.com/shrisingdon) - Logo Design, Front-end, Data collection

[Shrijan Bahadur Bajracharya](https://github.com/ShriBuzz) - Logo Design, Data collection, Presentation

[Palisha Shrestha](https://github.com/palishashrestha) - Data collection