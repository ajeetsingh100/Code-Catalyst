db.runCommand({
    collMod:"student",
    validator:{
        $jsonSchema:{
            required:["name","dept","age"],
            title:"student validation checker",
            properties:{
                name:{
                    bsonType:"string",
                    description:"name must of string type and is required"
                },
                dept:{
                    bsonType:"string",
                    enum:["BCA","BTECH","MCA","MTECH"],
                    description:"dept must have one of the following value bca,mca,btech,mtect"
                },
                age:{
                    bsonType:"int",
                    minimum:5,
                    maximum:20,
                    description:"age must be of int type and should be between 5 to 20"
                }
            }
        }
    }
})