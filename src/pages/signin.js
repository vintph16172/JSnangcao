import { signin } from "../api/user";

const SignInPage = {
    render() {



        return /*html*/`
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div class="max-w-md w-full space-y-8">
                <div class="grid grid-rows-2">
                    <a href="/">
                        <img class="mx-auto h-24 w-auto" src="../../assets/img/logo.png" alt="Workflow">
                    </a>
                   
                    <div>
                        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
                            Đăng Nhập Tài Khoản
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            hoặc
                            <a href="/signup" class="font-medium text-[#0066B3] hover:text-[#F26F1B]">
                            Đăng Ký
                            </a>
                        </p>
                    
                    </div>
                </div>
                <form class="mt-8 space-y-6" action="#" method="" id="form-signin">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Email..."  >
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] focus:z-10 sm:text-sm" placeholder="Mật Khẩu..." >
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Nhớ tài khoản
                        </label>
                        </div>

                        <div class="text-sm">
                        <a href="#" class="font-medium text-[#0066B3] hover:text-[#F26F1B]">
                            Quên mật khẩu?
                        </a>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                        <span id="alert"></span>
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0066B3] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <!-- Heroicon name: solid/lock-closed -->
                            <svg class="h-5 w-5 text-white group-hover:text-[#0066B3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                            Đăng Nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
        
        `;
    },
    afterRender() {

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const remember = document.querySelector('#remember-me');

        if (localStorage.getItem("user_remember")) {
            email.value = JSON.parse(localStorage.getItem('user_remember')).email;



        } else {
            email.value = "";

        }

        const formSignin = document.querySelector('#form-signin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signin({
                    email: email.value,
                    password: password.value,
                });
                console.log(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));


                if (remember.checked) {
                    localStorage.setItem('user_remember', JSON.stringify(response.data.user));

                }

                alert("Đăng Nhập Thành Công!")
                if (response.data.user.id === 1) {
                    document.location.href = "/admin/products";
                } else {
                    document.location.href = "/";
                }

            } catch (error) {
                console.log(error.response.data);
                document.querySelector('#alert').innerHTML = "Mời Bạn Nhập Lại!";

                if (error.response.data === "Cannot find user") {
                    email.classList.add("border-red-500");
                } else {
                    password.classList.add("border-red-500");
                }

            }
        });
    }


}
export default SignInPage;