const CourseProgress = require("./models/CourseProgress")
const SubSection = require("./models/SubSection")

const course=[
    {
        subSections:[
            {
                timeDuration:'19:20'
            },
            {
                timeDuration:'29:10'
            },

            {
                timeDuration:'59:40'
            },
        
        ]
    }
]
let timeDurationInSeconds=0
course.forEach((section)=>{
    section.subSections.forEach((SubSection)=>{
        timeDurationInSeconds+=parseFloat(SubSection.timeDuration)
    })
})
console.log(timeDurationInSeconds)
const result=convertTimeDuration(timeDurationInSeconds)


function convertTimeDuration(timeInSeconds){
    const hours=parseInt(timeInSeconds/)
}

for (let course of userDetail.course){
    for( let section of course.courseSection)            
           { totalCourseDuration+=
            section.subSection.reduce((acc,subSection)=>acc+parseInt(subSection.timeDuration),0)            
            subSectionLength+=section.subSection.length
           }
           course.totalDuration=convertSecondToDuration(totalCourseDuration)
           //CAN BE OPTIMIZED USING PROMISE ALL
            let courseProgress=await CourseProgress.findOne({
            courseId: course._id,
            userId: userId,
        })
        let completedVideo=courseProgress?.completedVideos.length || 0
        if(subSectionLength===0){
            course.progressPercentage=100
        }else{
            course.progressPercentage=Math.round((completedVideo/subSectionLength)*10000)/100
        }
}
//////////////////////////////////////////////////////////////////////

 for (var i = 0; i < userDetails.courses.length; i++) {
        let totalDurationInSeconds = 0
        SubsectionLength = 0
        //2nd for loop
        for (var j = 0; j < userDetails.courses[i].courseSection.length; j++) 
            {
                totalDurationInSeconds += userDetails.courses[i].courseContent[j]
                .subSection.reduce((acc, curr) => acc + parseInt(curr.timeDuration), 0)
                userDetails.courses[i].totalDuration = convertSecondsToDuration(totalDurationInSeconds)
                SubsectionLength +=
                    userDetails.courses[i].courseContent[j].subSection.length
            }
        let courseProgressCount = await CourseProgress.findOne({
        courseID: userDetails.courses[i]._id,
        userId: userId,
        })
        
        courseProgressCount = courseProgressCount?.completedVideos.length
        if (SubsectionLength === 0) {
            userDetails.courses[i].progressPercentage = 100
        } else {
            // To make it up to 2 decimal point
            const multiplier = Math.pow(10, 2)
            userDetails.courses[i].progressPercentage =Math.round(
                (courseProgressCount / SubsectionLength) * 100 * multiplier
                ) / multiplier
        }}


