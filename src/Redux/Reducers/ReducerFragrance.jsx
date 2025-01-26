import * as ActionType from '../Actions/ActionsTypes';
const initial_state=[
    {
        "name": "Chanel No. 5",
        "release_date": "1921-05-05",
        "brand": "Chanel",
        "price": 150.00,
        "picture": "Images/Fragrances/Chanel_No_5.jpeg",
        "genre": "Floral",
        "sex": "Female"
    },
    {
        "name": "Dior Sauvage",
        "release_date": "2015-09-01",
        "brand": "Dior",
        "price": 105.00,
        "picture": "Images/Fragrances/Dior_Sauvage.jpeg",
        "genre": "Woody Aromatic",
        "sex": "Male"
      },
      {
        "name": "Black Opium",
        "release_date": "2014-09-01",
        "brand": "Yves Saint Laurent",
        "price": 120.00,
        "picture": "Images/Fragrances/Black_Opium.jpeg",
        "genre": "Oriental Vanilla",
        "sex": "Female"
      },
      {
        "name": "Acqua di Gio",
        "release_date": "1996-06-01",
        "brand": "Giorgio Armani",
        "price": 95.00,
        "picture": "Images/Fragrances/Acqua_di_Gio.jpeg",
        "genre": "Citrus Aromatic",
        "sex": "Male"
      },
      {
        "name": "Flowerbomb",
        "release_date": "2005-01-01",
        "brand": "Viktor & Rolf",
        "price": 135.00,
        "picture": "Images/Fragrances/Flowerbomb.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Angel",
        "release_date": "1992-09-01",
        "brand": "Thierry Mugler",
        "price": 95.00,
        "picture": "Images/Fragrances/Angel.jpeg",
        "genre": "Oriental",
        "sex": "Female"
      },
      {
        "name": "Light Blue",
        "release_date": "2001-04-01",
        "brand": "Dolce & Gabbana",
        "price": 85.00,
        "picture": "Images/Fragrances/Light_Blue.jpeg",
        "genre": "Citrus Floral",
        "sex": "Female"
      },
      {
        "name": "Lancome La Vie Est Belle",
        "release_date": "2012-09-01",
        "brand": "Lancome",
        "price": 110.00,
        "picture": "Images/Fragrances/Lancome_La_Vie_Est_Belle.jpeg",
        "genre": "Fruity Floral",
        "sex": "Female"
      },
      {
        "name": "Armani Code",
        "release_date": "2004-03-01",
        "brand": "Giorgio Armani",
        "price": 98.00,
        "picture": "Images/Fragrances/Armani_Code.jpeg",
        "genre": "Oriental Spicy",
        "sex": "Male"
      },
      {
        "name": "Gucci Bloom",
        "release_date": "2017-08-01",
        "brand": "Gucci",
        "price": 125.00,
        "picture": "Images/Fragrances/Gucci_Bloom.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Paco Rabanne 1 Million",
        "release_date": "2008-09-01",
        "brand": "Paco Rabanne",
        "price": 95.00,
        "picture": "Images/Fragrances/Paco_Rabanne_1_Million.jpeg",
        "genre": "Citrus Spicy",
        "sex": "Male"
      },
      {
        "name": "Versace Eros",
        "release_date": "2012-01-01",
        "brand": "Versace",
        "price": 100.00,
        "picture": "Images/Fragrances/Versace_Eros.jpeg",
        "genre": "Woody Oriental",
        "sex": "Male"
      },
      {
        "name": "Tom Ford Black Orchid",
        "release_date": "2006-10-01",
        "brand": "Tom Ford",
        "price": 130.00,
        "picture": "Images/Fragrances/Tom_Ford_Black_Orchid.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },{
        "name": "YSL L'Homme",
        "release_date": "2006-01-01",
        "brand": "Yves Saint Laurent",
        "price": 115.00,
        "picture": "Images/Fragrances/YSL_L_Homme.jpeg",
        "genre": "Woody Spicy",
        "sex": "Male"
      },
      {
        "name": "Carolina Herrera Good Girl",
        "release_date": "2016-09-01",
        "brand": "Carolina Herrera",
        "price": 120.00,
        "picture": "Images/Fragrances/Carolina_Herrera_Good_Girl.jpeg",
        "genre": "Oriental Floral",
        "sex": "Female"
      },
      {
        "name": "Jadore Dior",
        "release_date": "1999-01-01",
        "brand": "Dior",
        "price": 130.00,
        "picture": "Images/Fragrances/Jadore_Dior.jpeg",
        "genre": "Floral",
        "sex": "Female"
      },
      {
        "name": "Jean Paul Gaultier Le Male",
        "release_date": "1995-09-01",
        "brand": "Jean Paul Gaultier",
        "price": 105.00,
        "picture": "Images/Fragrances/Jean_Paul_Gaultier_Le_Male.jpeg",
        "genre": "Oriental Fougere",
        "sex": "Male"
      },
      {
        "name": "Narciso Rodriguez For Her",
        "release_date": "2003-01-01",
        "brand": "Narciso Rodriguez",
        "price": 100.00,
        "picture": "Images/Fragrances/Narciso_Rodriguez_For_Her.jpeg",
        "genre": "Floral Woody Musk",
        "sex": "Female"
      },
      {
        "name": "Jo Malone Wood Sage and Sea Salt",
        "release_date": "2014-01-01",
        "brand": "Jo Malone",
        "price": 120.00,
        "picture": "Images/Fragrances/Jo_Malone_Wood_Sage_And_Sea_Salt.jpeg",
        "genre": "Woody Aromatic",
        "sex": "Unisex"
      },
      {
        "name": "Miss Dior",
        "release_date": "1947-03-01",
        "brand": "Dior",
        "price": 115.00,
        "picture": "Images/Fragrances/Miss_Dior.jpeg",
        "genre": "Floral",
        "sex": "Female"
      },
      {
        "name": "Chloé Eau de Parfum",
        "release_date": "2008-01-01",
        "brand": "Chloé",
        "price": 110.00,
        "picture": "Images/Fragrances/Chloe_Eau_de_Parfum.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Viktor & Rolf Spicebomb",
        "release_date": "2012-09-01",
        "brand": "Viktor & Rolf",
        "price": 95.00,
        "picture": "Images/Fragrances/Viktor_Rolf_Spicebomb.jpeg",
        "genre": "Spicy",
        "sex": "Male"
      },
      {
        "name": "Creed Aventus",
        "release_date": "2010-01-01",
        "brand": "Creed",
        "price": 300.00,
        "picture": "Images/Fragrances/Creed_Aventus.jpeg",
        "genre": "Fruity",
        "sex": "Male"
      },
      {
        "name": "Byredo Gypsy Water",
        "release_date": "2008-01-01",
        "brand": "Byredo",
        "price": 150.00,
        "picture": "Images/Fragrances/Byredo_Gypsy_Water.jpeg",
        "genre": "Woody Aromatic",
        "sex": "Unisex"
      },
      {
        "name": "Tom Ford Oud Wood",
        "release_date": "2007-01-01",
        "brand": "Tom Ford",
        "price": 220.00,
        "picture": "Images/Fragrances/Tom_Ford_Oud_Wood.jpeg",
        "genre": "Woody Oriental",
        "sex": "Unisex"
      },
      {
        "name": "Hermès Terre d'Hermès",
        "release_date": "2006-01-01",
        "brand": "Hermès",
        "price": 140.00,
        "picture": "Images/Fragrances/Hermes_Terre_d_Hermes.jpeg",
        "genre": "Woody Spicy",
        "sex": "Male"
      },
      {
        "name": "Aventus for Her",
        "release_date": "2016-01-01",
        "brand": "Creed",
        "price": 300.00,
        "picture": "Images/Fragrances/Aventus_for_Her.jpeg",
        "genre": "Fruity",
        "sex": "Female"
      },
      {
        "name": "L'Homme Ideal",
        "release_date": "2014-01-01",
        "brand": "Guerlain",
        "price": 125.00,
        "picture": "Images/Fragrances/L_Homme_Ideal.jpeg",
        "genre": "Woody Oriental",
        "sex": "Male"
      },
      {
        "name": "Baccarat Rouge 540",
        "release_date": "2015-01-01",
        "brand": "Maison Francis Kurkdjian",
        "price": 250.00,
        "picture": "Images/Fragrances/Baccarat_Rouge_540.jpeg",
        "genre": "Amber Floral",
        "sex": "Unisex"
      },
      {
        "name": "Le Labo Santal 33",
        "release_date": "2011-01-01",
        "brand": "Le Labo",
        "price": 175.00,
        "picture": "Images/Fragrances/Le_Labo_Santal_33.jpeg",
        "genre": "Woody Spicy",
        "sex": "Unisex"
      },
      {
        "name": "Viktor & Rolf Flowerbomb Nectar",
        "release_date": "2018-01-01",
        "brand": "Viktor & Rolf",
        "price": 140.00,
        "picture": "Images/Fragrances/Viktor_Rolf_Flowerbomb_Nectar.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Dolce & Gabbana The One",
        "release_date": "2006-01-01",
        "brand": "Dolce & Gabbana",
        "price": 120.00,
        "picture": "Images/Fragrances/Dolce_Gabbana_The_One.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Tom Ford Neroli Portofino",
        "release_date": "2007-01-01",
        "brand": "Tom Ford",
        "price": 190.00,
        "picture": "Images/Fragrances/Tom_Ford_Neroli_Portofino.jpeg",
        "genre": "Citrus Aromatic",
        "sex": "Unisex"
      },
      {
        "name": "Yves Saint Laurent Mon Paris",
        "release_date": "2016-01-01",
        "brand": "Yves Saint Laurent",
        "price": 120.00,
        "picture": "Images/Fragrances/Yves_Saint_Laurent_Mon_Paris.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      },
      {
        "name": "Chanel Coco Mademoiselle",
        "release_date": "2001-01-01",
        "brand": "Chanel",
        "price": 130.00,
        "picture": "Images/Fragrances/Chanel_Coco_Mademoiselle.jpeg",
        "genre": "Floriental",
        "sex": "Female"
      }
]
const ReducerFragrance=(state=initial_state,action)=>{
    let newState=[...state];
    switch(action.type){
        case ActionType.ADD_FRAGRANCE:
          newState=[...state,action.payload];
        break;
        case ActionType.DELETE_FRAGRANCE:
          newState = state.filter((item) => item.name !== action.payload); 
          break;
        case ActionType.EDIT_FRAGRANCE:
  newState = state.map((item) =>
    item.name === action.payload.name ? { ...item, ...action.payload.newFragrance } : item
  );
  break;

          break;
      
        case ActionType.SEARCH_BY_SEX:
          newState = action.payload? state.filter((item) => item.sex === action.payload): [...state];
        break;
    }
    return newState;
}
export default ReducerFragrance;