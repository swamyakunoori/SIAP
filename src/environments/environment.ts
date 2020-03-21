// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
export const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyBSZx203_PdbUrESIHycg6JMNmyqqI2R5c",
  authDomain: "siapublications.firebaseapp.com",
  databaseURL: "https://siapublications.firebaseio.com",
  projectId: "siapublications",
  storageBucket: "siapublications.appspot.com",
  messagingSenderId: "584631171883",
  appId: "1:584631171883:web:de659a594498088d7d236e"
  },
 // googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU',

//  //List of API URLs
//  urls:{
//   baseUrl:  'http://niranjan-sia.herokuapp.com/api',
//   completedProjectsUrl: baseUrl + '/test'
//  }
 
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
