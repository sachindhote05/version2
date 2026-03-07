export default function IndividualLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-2xl font-bold mb-6">
          Individual Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-6 rounded-lg"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Login
        </button>

      </div>

    </div>
  )
}