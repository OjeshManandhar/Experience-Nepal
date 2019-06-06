# Experience-Nepal
Website made for Hackthon at IT Meet v8.0 organized by Kathmandu University

## Idea
A website to help improve the Tourism Industry of Nepal along with helping for the grand success of Visit Nepal 2020 project. Made this website while participating different competitions. There is still a lot of improvement to do in this website along with making an app.

This website also focuses on highlighting different under-rated places of Nepal using **Reedem Code**. The idea is to let users collect **Reedem Code** by visiting diffferent places around the country. The collected codes can be spent at diiferent shops. We decided to have high **Reedem Code** in underrated places to attract more attentation to that place. If the number of tourist visiting certain place depends on the season or other criteria that changes time to time then we decrease the **Reedem Code** points earned at that place when the tourist number is high and increase as the tourist number decreases. Our website also tries to promote using national agencies over international agencies while visiting Nepal which could help develop the tourism industry of Nepal.

**Important:** The **Reedem Code** and **Ratings** give to the places are completly random and dosent reflect its true beauty.

## Screenshots
![Homepage](/screenshots/homepage.png)

![Slider](/screenshots/slider.png)

![User Location using GPS](/screenshots/user-location.png)

![Accessories](/screenshots/accessories.png)

![National Park](/screenshots/national-park.png)

## Todo
- [X] Create different packages for users. Each package contains information of places like Pilgrimage, World Heritage Sites, etc. of Nepal.
- [X] Once user chooses a package, display a map marking/plotting all the location in the package.
- [X] Add a sidebar showing abstract detail of all the places plotted in the map.
- [X] Display the data of the place/marker clicked by the user.
- [ ] Display proper image of the pace while showing its detail.
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
- Donot forget to create **token.js** inside **[map](map)** and add your *publc token*.

## Sites used for learning and collecting data
+ [MapBox](https://docs.mapbox.com/help/tutorials/building-a-store-locator/)
+ [Restaurants](https://www.tripadvisor.com/Restaurants-g293889-Nepal.html)
+ [Business Model](https://www.cleverism.com/business-model-canvas-complete-guide/)

## Timeline
+ **Hackathon at KU IT Meet** *December 2018*
  - **Idea:**
    + Highlight unexposed places
  - Home page with *Package Slider*
  - Display simple map
  - **Team:**
    + [Ojesh Manandhar](https://github.com/OjeshManandhar) - Back-end
    + [Shristi Singh Dongol](https://github.com/shrisingdon) - Logo Design, Front-end, Data collection
    + [Shrijan Bahadur Bajracharya](https://github.com/ShriBuzz) - Logo Design, Data collection, Front-end, Presentation
    + [Palisha Shrestha](https://github.com/palishashrestha) - Data collection
+ **Software Exhibition at Kathfest** *January 2019*
  - **Idea:**
    + Highlight unexposed places
    + Promote use of national agencies over international agencies when visiting Nepal
  - New Homepage (with *Carousel*, *Two-Column Section*, *Package Slider*) (see [Experience Nepal Homepage](https://github.com/OjeshManandhar/Experience-Nepal-Homepage) for more detail)
  - No change in Map display
  - **Team:**
    + [Ojesh Manandhar](https://github.com/OjeshManandhar) - Front-end, Presentation
    + [Shristi Singh Dongol](https://github.com/shrisingdon) - Front-end, Presentation
    + [Shrijan Bahadur Bajracharya](https://github.com/ShriBuzz) - Front-end, Presentation
+ **LOCUS HACK-A-WEEK** *January 2019*
  - **Idea:**
      + Highlight unexposed places using **Reedem Code**
      + Add places where they can spend collected **Reedem Code** points
      + Promote use of national agencies over international agencies when visiting Nepal
  - Add few places in *Two-Column Section* of Hompage
  - Add map for places to spend collected **Reedem Code** points under **Local Shops**
  - Addition of **Reedem Code** and **Ratings** in different *.geojson* files.
  - Add listings and display detail of the place clicked by used in Map-pages.
  - **Team:**
    + [Ojesh Manandhar](https://github.com/OjeshManandhar) - Back-end, Front-end, Presentation
    + [Sushmita Rai](https://github.com/sushmitaraii1) - Front-end, Presentation
    + [Ranima Rajbhandari](https://www.facebook.com/ranima.rajbhandari) - Front-end, Presentation
