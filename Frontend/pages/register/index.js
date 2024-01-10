import Input from "@/components/Common/Input";

export default function Register() {
  return (
    <>
      <div className="flex h-[100vh] flex-1 justify-between">
        <div className="flex  flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-[50%]">
          <div className="mx-auto w-full lg:w-96  ">
            <div>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register a new account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already have an account ?{" "}
                <a
                  href="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-4">
                  <Input id="username" type="text" label="username" />
                  <Input id="email" type="email" label="email" />
                  <Input id="password" type="password" label="password" />
                  <Input
                    id="confirm"
                    type="password"
                    label="Confirm password"
                  />

                  <div>
                    <button
                      type="submit"
                      className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block max-w-[50vw]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
