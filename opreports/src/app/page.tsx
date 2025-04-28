"use client";

import{
  Button, 
  buttonVariants 
} from '@/components/ui/button'

export default function Home() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to your Google Form
    window.location.href = 'https://forms.gle/KdGhGWx2gHVpkkYj6';
  };
  

  return (
    <main>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold font-[Helvetica] tracking-tight mb-4 text-black" >Open Product Reports</h1>
        <p className="text-lg text-gray-700 mb-6">
          Real reports from  real people.
        </p>
        <p className="text-md font-serif text-gray-600 mb-8">
        Hi! 👋 My name is Simon, and I am tired of having to type "reddit" after everything when I need an honest and human opinion before making a purchase.
        </p>
        <p className="text-md font-serif text-gray-600 mb-8">
        So, I am creating <span className= "font-bold font-[Helvetica] tracking-tight mb-4 text-black" >Open Product Reports</span>:  an open-source community where people can find and share real consumer reviews before buying. For free!
        </p>

        {/* Email Signup Redirect */}
        <form onSubmit={handleSubmit}>
          {/* <input 
            type="Name" 
            required 
            placeholder="Enter your name" 
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 w-64"
          /> */}
          <Button type="submit">
            Join the Notification List
          </Button>
        </form>

        {/* Privacy Message */}
        <p className="text-xs text-gray-400 mt-4">
          I respect your privacy. Your email will only be used to notify you about the launch.
        </p>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © 2025 Open Product Reports
      </footer>
    </div>
    </main>
  );
}
