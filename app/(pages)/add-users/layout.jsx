import SearchInput from "@/app/_components/SearchInput/SearchInput";
import "@/app/globals.css";
import CredentialsSidebar from "@/app/_components/CredentialsSidebar/CredentialsSidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 px-4 md:flex-row md:items-center md:gap-12 lg:px-11">
        <h2 className="text-xl font-semibold">Add User</h2>
        <SearchInput width="352px" height="42px" />
      </div>
      <div className="mt-10 flex flex-col space-y-6 px-4 md:mt-24 md:flex-row lg:px-11">
        <CredentialsSidebar />
        <div className="w-full overflow-hidden md:pl-4 lg:pl-24">
          {children}
        </div>
      </div>
    </>
  );
}
