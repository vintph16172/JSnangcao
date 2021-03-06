
import AdminHeader from "../../../component/admin-header";
import {  getAll,remove } from "../../../api/post";
import { reRender } from "../../../../utils/reRender"

const AdminNews = {
    async render(){
        const { data } = await getAll();
        return /*html*/`
        ${AdminHeader.render()}
        
        <div class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Dashboard News
                </h1>
            </div>
        </div>
        <div class="min-h-full">
                

                
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    



                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg ">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <button type="submit" class="my-4 ml-4 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0066B3] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                <a href="/admin/news/add">Thêm Bài Viết</a>
                                            </button>
                                            


                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Images
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Title
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Desc
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Create Time
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Edit
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    ${data.map((post)=>/*html*/`
                                                        <tr>
                                                            </td>
                                                                <td class="px-6 py-4 whitespace-nowrap text-sm">
                                                                ${post.id}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <div class=" h-24 w-28">
                                                                    <img class="h-24 w-28 " src="${post.img}" alt="">
                                                                </div>
                                                            </td>
                                                                <td class="px-6 py-4 whitespace-normal">
                                                                <div class="text-sm text-gray-900">${post.title}</div>
                                                                
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                    ${post.desc.length}
                                                                </span>
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                ${post.createdAt}
                                                            </td>
                                                            
                                                                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                                
                                                                
                                                                <a href="/admin/news/${post.id}/edit" >
                                                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#04B24A] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </button>
                                                                
                                                                </a>
                                                                <button type="submit" data-id="${post.id}" class="btn-delete inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" >
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                    </svg>
                                                                </button>


                                                            </td>
                                                        </tr>
                                                    
                                                    
                                                    `).join("")}
                                    
                                                <!-- More people... -->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        </div>
                    </div>
                <!-- /End replace -->
                </div>
            </main>
        </div>
        
        
        `;


    },
    afterRender() {
        AdminHeader.afterRender()
        const btns = document.querySelectorAll(".btn-delete");
        btns.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if(confirm){
                  remove(id)
                    .then(() => console.log('Bạn đã xóa thành công'))
                    .then(()=>{reRender(AdminNews , "#content") })     
                }
                
            });
        });
    }

}


export default AdminNews;