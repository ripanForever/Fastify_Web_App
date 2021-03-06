const Course =  require('../model/course');

//get all courses
exports.getAllCourses= async (req,reply)=>{
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
        throw error
    }
}

//get single course by ID
exports.getSingleCourse= async (req,reply)=>{
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        return course;
    } catch (error) {
        throw error
    }
}

//get a new course 
exports.addCourse= async (req,reply)=>{
    try {
        const course = new Course(req.body);
        return course.save();
    } catch (error) {
        throw error
    }
}

//updating an existing course
exports.updateCourse=async (req,reply)=>{
    try {
        const courseId = req.params.id;
        const course = req.body;
        const {...updatedCourse}= course;
        const update = await Course.findByIdAndUpdate(courseId,updatedCourse,{new:true})
        return update;
    } catch (error) {
        throw error
    }
}

//delete course
exports.deleteCourse = async (req,reply)=>{
    try {
        const courseId = req.params.id;
        const course = Course.findByIdAndDelete(courseId);
        return course;
    } catch (error) {
        throw error
    }
}