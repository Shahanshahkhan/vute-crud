import { ref } from "vue";
import axios from "axios";


export default function useStudent() {
    const url = "http://localhost:3000/student/"
    const studentData = ref([])                          // to set Empty data 
    const error = ref(null)                             // to set Error msg

    // Get All Student Data

    const getAllstudent = async () => {
        studentData.value = []                            // reset data or reset state before fetching
        error.value = null
        try {
            const res = await axios.get(url)
            studentData.value = res.data

        } catch (err) {
            error.value = err

        }
    }
    // get Single Student Data..!

    const getSingleData = async (id) => {
        studentData.value = []
        error.value = null

        try {
            const res = await axios.get(url + id)
            studentData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    //Add Student Data
    const createStudent = async (formData) => {
        studentData.value = []
        error.value = null
        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'content-Type': 'application/json'
                },
                data: JSON.stringify(formData)

            }
            const res = await axios(config)
            studentData.value = res.data
            error.value = err
        } catch (err) {
            error.value = err
        }

    }

    const updateStudentData = async (id, data) => {
        studentData.value = []
        error.value = null
        try {
            const config = {
                method: 'PUT',
                url: url + id,
                headers: {
                    'content-Type': 'application/json'
                },
                data: JSON.stringify(data)

            }
            const res = await axios(config)
            studentData.value = res.data
            error.value = err
        } catch (err) {
            error.value = err
        }
    }

    const deleteStudentData = async (id) => {
        studentData.value = []
        error.value = null
        try {
            const config = {
                method: 'DELETE',
                url: url + id,
                headers: {
                    'content-Type': 'application/json'
                },
            }
            const res = await axios(config)
            studentData.value = res.data
            error.value = err
        } catch (err) {
            error.value = err
        }

    }

    return {
        studentData,
        error,
        getAllstudent,
        getSingleData,
        createStudent,
        updateStudentData,
        deleteStudentData
    };
}
