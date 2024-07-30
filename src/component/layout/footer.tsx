const Footer = () => {
    return (
      <div>
        <footer className="p-4 bg-black sm:p-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold text-white">Flowbite</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                  <ul className="text-gray-400">
                    <li className="mb-4">
                      <a href="https://flowbite.com" className="hover:underline text-white">Flowbite</a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline text-white">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                  <ul className="text-gray-400">
                    <li className="mb-4">
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline text-white">Github</a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline text-white">Discord</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                  <ul className="text-gray-400">
                    <li className="mb-4">
                      <a href="#" className="hover:underline text-white">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline text-white">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-400 sm:text-center">© 2022 <a href="https://flowbite.com" className="hover:underline text-white">Flowbite™</a>. All Rights Reserved.</span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.645A4.125 4.125 0 0021.457 4.5a8.218 8.218 0 01-2.605.998 4.107 4.107 0 00-7.013 3.75A11.67 11.67 0 013.83 4.615a4.082 4.082 0 001.28 5.47A4.076 4.076 0 012 9.056v.05a4.112 4.112 0 003.29 4.034A4.156 4.156 0 015 13.43v.057a4.107 4.107 0 003.656 4.084A4.248 4.248 0 018.29 20.25z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  export default Footer
