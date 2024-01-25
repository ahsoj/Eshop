import React from "react";
import ProductList from "./(adminDashboard)/containers/ProductList";

async function getAdmin() {
  const res = await fetch("/api/admin/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type Props = {};

const AdminPage = (props: Props) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <ProductList />
      </div>
    </div>
  );
};

export default AdminPage;
