import React from 'react';

const NGOPage = () => {
  // Mock data
  const foodItems = [
    { id: 1, name: 'Pasta', quantity: '10 servings', restaurant: 'Restaurant A' },
    { id: 2, name: 'Sandwiches', quantity: '20 servings', restaurant: 'Restaurant B' },
  ];

  const deliveryStatus = [
    { id: 1, partner: 'John Doe', status: 'On the way', eta: '15 mins' },
    { id: 2, partner: 'Jane Smith', status: 'Available', eta: 'N/A' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">NGO Dashboard</h1>
        <p className="text-lg">Managing Food Donations Efficiently</p>
      </header>

      <main className="mt-6">
        {/* Available Food Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Available Food</h2>
          <ul className="divide-y divide-gray-300">
            {foodItems.map((food) => (
              <li key={food.id} className="py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{food.name}</h3>
                    <p className="text-sm text-gray-500">
                      {food.quantity} from <span className="font-medium">{food.restaurant}</span>
                    </p>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                    Claim
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Delivery Partner Status Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Delivery Partner Status</h2>
          <ul className="divide-y divide-gray-300">
            {deliveryStatus.map((partner) => (
              <li key={partner.id} className="py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{partner.partner}</h3>
                    <p className="text-sm text-gray-500">
                      Status: <span className="font-medium">{partner.status}</span>
                    </p>
                    {partner.eta !== 'N/A' && (
                      <p className="text-sm text-gray-500">ETA: {partner.eta}</p>
                    )}
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg shadow ${
                      partner.status === 'Available' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                    disabled={partner.status !== 'Available'}
                  >
                    Assign
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default NGOPage;

