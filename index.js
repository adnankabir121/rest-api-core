//Step 1: Identify Object Model
/*
    USER
        -name
        -id
        -email
        -password
        -address
*/

// Step 2: Create Model URI/URL
/*
    http://example.com/api/users GET
    http://example.com/api/users POST
    http://example.com/api/users/:id PUT/PATCH
    http://example.com/api/users/:id DELETE
*/

// Step 3: Determine Representation(Array of objects)
/*
[
    {
        "name":"Adnan Kabir Akon",
        "id":0298,
        "email":"adnankabir618@gmail.com",
        "password":2941244,
        "address":"park street,kalkata-1029"
    },
    {
        "name":"Adnan Kabir Akon",
        "id":0298,
        "email":"adnankabir618@gmail.com",
        "password":2941244,
        "address":"park street,kalkata-1029"
    },
    {
        "name":"Adnan Kabir Akon",
        "id":0298,
        "email":"adnankabir618@gmail.com",
        "password":2941244,
        "address":"park street,kalkata-1029"
    }
]
*/
//Single Data Representation
/*
    {
        name:"Adnan Kabir Akon",
        id:0298,
        email:"adnankabir618@gmail.com",
        password:2941244,
        address:"park street,kalkata-1029"
    }
*/

// Step 4: JSON View
/*
    If you hit this address : http://example.com/api/users
    server will show all the information of users like below :

    users:[
        [
            {
                "name":"Adnan Kabir Akon",
                "id":0298,
                "email":"adnankabir618@gmail.com",
                "password":2941244,
                "address":"park street,kalkata-1029"
            },
            {
                "name":"Adnan Kabir Akon",
                "id":0298,
                "email":"adnankabir618@gmail.com",
                "password":2941244,
                "address":"park street,kalkata-1029"
            },
            {
                "name":"Adnan Kabir Akon",
                "id":0298,
                "email":"adnankabir618@gmail.com",
                "password":2941244,
                "address":"park street,kalkata-1029"
            }
        ]
    ]
*/

// Step 5: Accessing these data 
/*
    users[0].name
    users[2].password
    users[11].email
*/