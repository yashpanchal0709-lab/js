// const tinderUser = new Object() // singleton object
// console.log(tinderUser)

const tinderUser1 = {} // Non singleton object
tinderUser1.id = "123abc",
tinderUser1.name = "YashPanchal"
tinderUser1.isLoggedin = false
// console.log(tinderUser1)

const regularuser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Yash",
            lastname:"Panchal",
        }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname)

//optional chaining : ?

//Merging two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c",6: "d"}

// const obj3 = {obj1, obj2}
// {}: target , obj1,obj2,obj4: source
// const obj3 = Object.assign({},obj1,obj2,obj4)

// ... => spread 
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Yash",
        email:"y@gmail.com"
    },
    {
        id: 2,
        name: "Yash",
        email:"g@gmail.com"
    },
    {
        id: 3,
        name: "Yash",
        email:"j@gmail.com"
    },
    {
        id: 4,
        name: "Yash",
        email:"k@gmail.com"
    }
]

// console.log(users[3].email)

// console.log(tinderUser1)

// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
// console.log(Object.entries(tinderUser1)) // less used

// console.log(tinderUser1.hasOwnProperty("isLoggedin"))

//Destructuring 
// Destructing in object is common, but rare in array

const course = {
    coursename: "js in hindi",
    couseprice: 999,
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course
console.log(instructor)

//React Method
// const navbar = ({company}) =>
// {

// }
// navbar (company ="hitesh")

//Json: key value is also mentioned as strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "couseprice": 999
// }

// [
//     {},
//     {},
//     {}
// ]

// {
//   "login": "hiteshchoudhary",
//   "id": 11613311,
//   "node_id": "MDQ6VXNlcjExNjEzMzEx",
//   "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/hiteshchoudhary",
//   "html_url": "https://github.com/hiteshchoudhary",
//   "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
//   "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
//   "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
//   "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
//   "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
//   "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Hitesh Choudhary",
//   "company": null,
//   "blog": "https://hitesh.ai",
//   "location": "India",
//   "email": null,
//   "hireable": null,
//   "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
//   "twitter_username": "hiteshdotcom",
//   "public_repos": 122,
//   "public_gists": 6,
//   "followers": 56766,
//   "following": 0,
//   "created_at": "2015-03-23T13:03:25Z",
//   "updated_at": "2026-03-16T18:36:23Z"
// }

// {
//   "results": [
//     {
//       "gender": "male",
//       "name": {
//         "title": "Monsieur",
//         "first": "Luca",
//         "last": "Muller"
//       },
//       "location": {
//         "street": {
//           "number": 682,
//           "name": "Rue Abel"
//         },
//         "city": "Merishausen",
//         "state": "Solothurn",
//         "country": "Switzerland",
//         "postcode": 2549,
//         "coordinates": {
//           "latitude": "-61.4524",
//           "longitude": "-14.6650"
//         },
//         "timezone": {
//           "offset": "-8:00",
//           "description": "Pacific Time (US & Canada)"
//         }
//       },
//       "email": "luca.muller@example.com",
//       "login": {
//         "uuid": "9b2158b1-9c5c-4af2-ae2e-70eb26c654e7",
//         "username": "blacktiger540",
//         "password": "tennis1",
//         "salt": "JYtYQ8i6",
//         "md5": "c280a6ddfdc26cdf407fa0ab32ef968f",
//         "sha1": "d43acda928f944bfc151ab56749b0ab176d05fec",
//         "sha256": "93d3d6bdc909e8ab6ede4110f8b776808c8da4832109104b571c55036eb14767"
//       },
//       "dob": {
//         "date": "1945-11-03T19:19:26.721Z",
//         "age": 80
//       },
//       "registered": {
//         "date": "2020-10-30T07:44:32.283Z",
//         "age": 5
//       },
//       "phone": "076 743 29 49",
//       "cell": "078 991 03 18",
//       "id": {
//         "name": "AVS",
//         "value": "756.1083.4793.63"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/72.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
//       },
//       "nat": "CH"
//     }
//   ],
//   "info": {
//     "seed": "ffe6c4356b082b0c",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }