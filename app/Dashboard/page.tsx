export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6">

      {/* Stats */}
      <div className="col-span-12 md:col-span-3 rounded-xl bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Users</p>
        <p className="text-3xl font-bold">1,240</p>
      </div>

      <div className="col-span-12 md:col-span-3 rounded-xl bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Sales</p>
        <p className="text-3xl font-bold">$4,320</p>
      </div>

      <div className="col-span-12 md:col-span-3 rounded-xl bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Orders</p>
        <p className="text-3xl font-bold">320</p>
      </div>

      <div className="col-span-12 md:col-span-3 rounded-xl bg-white p-5 shadow">
        <p className="text-sm text-gray-500">Revenue</p>
        <p className="text-3xl font-bold">$9,820</p>
      </div>

      {/* Table / Chart */}
      <div className="col-span-12 lg:col-span-8 rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 font-semibold">Recent Orders</h3>
        <div className="h-64 rounded bg-neutral-100"></div>
      </div>

      <div className="col-span-12 lg:col-span-4 rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 font-semibold">Activity</h3>
        <div className="h-64 rounded bg-neutral-100"></div>
      </div>

    </div>
  );
}
