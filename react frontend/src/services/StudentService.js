import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/student_management";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);

    }

    updateStudent(student){
        return axios.put(STUDENT_API_BASE_URL, student);

    }
    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL+ '/' + id);

    }

    getStudentById(id){
        return axios.get(STUDENT_API_BASE_URL+ '/' + id);
    }

}
export default new StudentService()