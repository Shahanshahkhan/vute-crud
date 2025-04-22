<script setup>
import useStudent from '@/composables/studentApi';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const {studentData, error , getSingleData, updateStudentData} = useStudent();
const {params} = useRoute()

onMounted(() => {
    getSingleData(params.id)
})



function handleUpdatestudentForm() {
    updateStudentData(params.id, studentData.value)

    

}



</script>
<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-900 p-4">
            <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
        </div>
        <form @submit.prevent="handleUpdatestudentForm" class="w-full">           <!--.prevent ye VUEJS ka modifier hai --> 
            <div class=" items-center m-6">
                <div class="w-1/5">
                    <label for="stuid" class="font-medium">ID:</label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="stuid" class="border-gray-200 w-full py-2 px-4 border" required readonly v-model.trim = "studentData.id"/>
                </div>
                <div class="w-1/5">
                    <label for="stuname" class="font-medium">Name:</label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="stuname" class="border-gray-200 w-full py-2 px-4" v-model.trim = "studentData.stuname"/>
                </div>
                <div class="w-1/5">
                    <label for="stuemail" class="font-medium">Email:</label>
                </div>
                <div class="w-4/5">
                    <input type="email" id="mail" class="border-gray-200 w-full py-2 px-4" v-model.trim = "studentData.email" />
                </div>
                <div class="w-1/5">
                    <label for="stuno" class="font-medium">Mob No:</label>
                </div>
                <div class="w-4/5">
                    <input type="number" id="mobno" class="border-gray-200 w-full py-2 px-4" v-model.trim = "studentData.mobno"/>
                </div>
                <div class="w-1/5">
                    <label for="stuaddress" class="font-medium">Address:</label>
                </div>
                <div class="w-4/5">
                    <input type="text" id="address" class="border-gray-200 w-full py-2 px-4" v-model.trim = "studentData.address" />
                </div>
            </div>
            <div class="flex justify-center">
                <button class="bg-purple-900 text-white font-medium py-2 rounded-md px-10 hover:bg-purple-500 mr-6">Save</button>
                <RouterLink :to="{ name: 'list' }">
                    <button class="bg-purple-900 text-white font-medium py-2 rounded-md px-10 hover:bg-purple-500 mr-6">Back
                        To Home</button>
                </RouterLink>
            </div>
        </form>
    </div>
</template>
<script Scoped>
</script>