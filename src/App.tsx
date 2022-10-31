import { useState } from "react";
import { Product } from "./components/Product";
import { Spinner } from "./components/Spinner";
import { Error } from "./components/Error";
import { useFetchProducts } from "./hooks/fetchProducts";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";

function App() {
  const { products, isLoading, error, addNewProduct } = useFetchProducts();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
        onClick={() => setShowModal(!showModal)}
      >
        Create Product
      </button>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      {isLoading && <Spinner />}
      {error && <Error message={error} />}
      {showModal && (
        <Modal>
          <CreateProduct
            setShowModal={setShowModal}
            addNewProduct={addNewProduct}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
