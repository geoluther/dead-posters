var deadposterApp = angular.module('deadposterApp', []);

deadposterApp.controller('PosterListCtrl', function ($scope) {

  $scope.posters = posters;

});


var posters = [

{
	"title": "Art Deco Dead",
	"description": "Some Description",
	"link": "#",
	"date": "2006-10-07",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/ArtDecoDead.jpg"
},

{
	"title": "Backstage Pass",
	"description": "Some Description",
	"link": "#",
	"date": "1998-10-24",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/BackstagePass.jpg"
},

{
	"title": "Blue Eyes",
	"description": "Some Description",
	"link": "#",
	"date": "2009-03-21",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/BlueEyes.jpg"
},

{
	"title": "Celtic Dead",
	"description": "Some Description",
	"link": "#",
	"date": "1997-04-19",
	"artist": "Chris O'Riley, George Bain, Arleigh",
	"orient": "p",
	"imgSrc": "img/CelticDead.jpg"
},

{
	"title": "Dark Star",
	"description": "",
	"link": "#",
	"date": "2003-10-04",
	"artist": "Chris O'Riley, Gustave Dore",
	"orient": "p",
	"imgSrc": "img/DarkStar.jpg"
},

{
	"title": "Dead & Beyond",
	"description": "",
	"link": "#",
	"date": "2007-03-24",
	"artist": "Chris O'Riley, B. Thomas, A. Owsley",
	"orient": "p",
	"imgSrc": "img/DeadBeyond.jpg"
},


{
	"title": "Dead Through the Years",
	"description": "",
	"link": "#",
	"date": "2011-03-19",
	"artist": "Chris O'Riley, Bob Marks",
	"orient": "h",
	"imgSrc": "img/DeadThroughtheYears.jpg"
},

{
	"title": "Fractal Skull",
	"description": "",
	"link": "#",
	"date": "2008-03-08",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/FractalSkull.jpg"
},

{
	"title": "Jerry Garcia Memorial",
	"description": "",
	"link": "#",
	"date": "1995-11-04",
	"artist": "Judy Strahota, Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/JerryGarciaMemorial.jpg"
},

{
	"title": "Jerry Garcia Tribute",
	"description": "",
	"link": "#",
	"date": "2010-10-16",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/JerryGarciaTribute.jpg"
},

{
	"title": "Maya Dead",
	"description": "",
	"link": "#",
	"date": "2004-04-03",
	"artist": "Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/MayaDead.jpg"
},

{
	"title": "OZO",
	"description": "",
	"link": "#",
	"date": "2012-10-13",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/OZO.jpg"
},

{
	"title": "Pigpen",
	"description": "",
	"link": "#",
	"date": "2010-03-20",
	"artist": "Chris O'Riley, Bob Marks",
	"orient": "p",
	"imgSrc": "img/Pigpen.jpg"
},

{
	"title": "Skeletons on the Mount",
	"description": "",
	"link": "#",
	"date": "1988-10-22",
	"artist": "Bruce Campbell, Gustave Dore",
	"orient": "p",
	"imgSrc": "img/SkeletonsontheMount.jpg"
},

{
	"title": "The Band",
	"description": "",
	"link": "#",
	"date": "1999-10-16",
	"artist": "Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/TheBand.jpg"
},

{
	"title": "The Bus",
	"description": "",
	"link": "#",
	"date": "1997-10-18",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheBus.jpg"
},

{
	"title": "The Carrion Crow",
	"description": "",
	"link": "#",
	"date": "1999-04-24",
	"artist": "Arleigh, Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/TheCarrionCrow.jpg"
},

{
	"title": "The Dragon",
	"description": "",
	"link": "#",
	"date": "2002-04-20",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheDragon.jpg"
},

{
	"title": "The Flag",
	"description": "",
	"link": "#",
	"date": "2013-03-23",
	"artist": "Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/TheFlag.jpg"
},

{
	"title": "The Jester",
	"description": "",
	"link": "#",
	"date": "2000-10-14",
	"artist": "Arleigh, Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheJester.jpg"
},

{
	"title": "The Mask",
	"description": "",
	"link": "#",
	"date": "2015-10-17",
	"artist":  "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheMask.jpg"
},

{
	"title": "The Phil Zone",
	"description": "",
	"link": "#",
	"date": "2003-04-19",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/ThePhilZone.jpg"
},

{
	"title": "The Pipe",
	"description": "",
	"link": "#",
	"date": "2011-10-15",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/ThePipe.jpg"
},

{
	"title": "The Train",
	"description": "",
	"link": "#",
	"date": "2008-09-20",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheTrain.jpg"
},

{
	"title": "The Zodiac",
	"description": "",
	"link": "#",
	"date": "2012-03-03",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TheZodiac.jpg"
},

{
	"title": "Tie Dye Dead",
	"description": "",
	"link": "#",
	"date": "1996-04-27",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/TieDyeDead.jpg"
},

{
	"title": "Truckin",
	"description": "",
	"link": "#",
	"date": "2001-10-27",
	"artist": "Martin Dadisman, Chris O'Riley",
	"orient": "h",
	"imgSrc": "img/Truckin.jpg"
},

{
	"title": "Ultimate Dead",
	"description": "",
	"link": "#",
	"date": "2004-03-15",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/UltimateDead.jpg"
},

{
	"title": "Uncle Dead",
	"description": "",
	"link": "#",
	"date": "2007-04-20",
	"artist": "Terry Kishiyama",
	"orient": "p",
	"imgSrc": "img/UncleDead.jpg"
},

{
	"title": "Wanted",
	"description": "",
	"link": "#",
	"date": "2014-10-18",
	"artist": "Chris O'Riley, Bob Marks",
	"orient": "p",
	"imgSrc": "img/Wanted.jpg"
},

{
	"title": "Celtic Circle",
	"description": "",
	"link": "#",
	"date": "2016-03-12",
	"artist": "Chris O'Riley",
	"orient": "p",
	"imgSrc": "img/Celtic Circle.jpg",
	"id": 30
}

];

var banner = {
	"title": "Dead Poster Text",
	"description": "",
	"link": "#",
	"date": "",
	"orient": "h",
	"imgSrc": "img/DeadPosterText.JPG"
};