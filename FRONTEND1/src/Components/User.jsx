import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();

  console.log(state.user);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">User Details</h1>
        
        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="text-gray-500 text-sm">Name</p>
            <p className="text-lg font-medium text-gray-800">{state?.user?.name}</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-lg font-medium text-gray-800">{state?.user?.email}</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-gray-500 text-sm">Date of Birth</p>
            <p className="text-lg font-medium text-gray-800">{state?.user?.dateOfBirth}</p>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">Mobile Number</p>
            <p className="text-lg font-medium text-gray-800">{state?.user?.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

