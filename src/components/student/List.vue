<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from 'vue-router';
import  useStudent  from "@/composables/studentApi";
import { onMounted } from "vue";


const { studentData, error, getAllstudent, deleteStudentData } = useStudent();
onMounted(getAllstudent)


const deleteStudent = async (id) => {
    if(!window.confirm("are youn sure")){
        return;
    }
   await deleteStudentData(id);
   await getAllstudent();
    
    
}


</script>
<template>
    <div>
        <div class="bg-orange-900 p-4 grid grid-cols-9">
            <div class="col-span-6 md:col-span-8">
                <h1 class="text-3xl font-bold text-center mt-3 text-white">Student List</h1>
            </div>
                <div class="text-right">
                     <!-- :to "name:'add'" means render to add.vue page.when user clicked the add icon. -->
                    <RouterLink :to="{name:'add'}">                             
                    <button
                        class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6 hover:scale-120 transition-transform">
                        <UserPlusIcon />Add
                    </button>
                    </RouterLink>
                </div>

        </div>

        <table class="table-auto w-full">
            <thead class="bg-slate-600 text-white hover:bg-blue-900">
                <tr>
                    <th class="py-1">No</th>
                    <th class="py-1">Name</th>
                    <th class="py-1">Email</th>
                    <th class="py-1">Mob No</th>
                    <th class="py-1">Address</th>
                    <th class="py-1">Action</th>
                </tr>
            </thead>
            <tbody class="text-center hover:bg-red-100">
                <tr v-for="({id, stuname,email,mobno,address}, i) in studentData" :key="id">
                    <td class="py-2">{{ ++i }}</td>
                    <td class="py-2">{{ stuname }}</td>
                    <td class="py-2">{{ email }}</td>
                    <td class="py-2">{{ mobno }}</td>
                    <td class="py-2">{{ address }}</td>
                    <td class="py-2 ">
                        <RouterLink :to="{name:'view', params:{id:id}}">
                            <EyeIcon class="hover:scale-170 transition-transform  text-green-500 h-6 w-6 inline" />
                        </RouterLink>
                        <RouterLink :to="{name: 'edit', params: {id:id}}">
                            <PencilIcon class="hover:text-blue-500 hover:scale-170 transition-transform h-6 w-6 mx-6 inline" />
                        </RouterLink>
                        <TrashIcon class="text-red-700 h-6 w-6 inline hover:scale-170 transition-transform cursor-pointer" @click="deleteStudent(id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script Scoped>
</script>