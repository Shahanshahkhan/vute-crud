<script setup>
import { ref, reactive } from 'vue';
import {RouterLink} from 'vue-router';
import useStudent from '@/composables/studentApi';

const {studentData, error, createStudent} = useStudent();



// v-model binding function formData with field name,email,mobno,address
const formData = reactive({
    stuname: "",
    email: "",
    mobno: '',
    address:""
});

// it's a function to handle a form submission  our page ,create async function. 
const handleAddstudentForm = async () => {                     // async . this an asynchronous arrow func used to handle the student form submission event in a Vue component.
    await createStudent(formData)
    
};
</script>

<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-600 p-4">
            <h1 class="text-3xl font-bold text-white"> Add Student</h1>
        </div>

        <form @submit.prevent="handleAddstudentForm" class="w-full" id="AddStudentForm">
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label for="stuname" class="font-medium">Name:</label>
                </div>
                <div class="w-7/5">
                    <input type="text" id="stuname" class="border-gray-200 w-full py-2 px-4" placeholder="Write Your Name" v-model.trim="formData.stuname" required>
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label for="email" class="font-medium">Email:</label>
                </div>
                <div class="w-7/5">
                    <input type="email" id="email" class="border-gray-200 w-full py-2 px-4" placeholder="Write Your Email" v-model.trim="formData.email" required>
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label for="mobno" class="font-medium">Mob No:</label>
                </div>
                <div class="w-7/5">
                    <input type="text" id="mobno" class="border-gray-200 w-full py-2 px-4" placeholder="Write Your Mobile No" v-model.trim="formData.mobno" required>
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label for="address" class="font-medium">Address:</label>
                </div>
                <div class="w-7/5">
                    <input type="text" id="address" class="border-gray-200 w-full py-2 px-4" placeholder="Write Your Address" v-model.trim="formData.address" required>
                </div>
            </div>
            <div class="m-8 flex justify-center">
                <button type="submit" class="bg-purple-900 text-white font-medium py-2 rounded-md px-10 hover:bg-purple-500 mr-6 ">Add</button>
                <RouterLink :to="{name:'list'}">
                    <button type="button" class="bg-purple-900 text-white font-medium py-2 rounded-md px-10 hover:bg-purple-500 mr-6 ">Back To Home</button>
                </RouterLink>
            </div>
        </form>
    </div>

</template>
<script Scoped>
</script>