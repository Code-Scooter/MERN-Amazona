import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, requried: true, unique: true },
    slug: { type: String, requried: true, unique: true },
    image: { type: String, requried: true },
    brand: { type: String, requried: true },
    category: { type: String, requried: true },
    description: { type: String, requried: true },
    price: { type: Number, requried: true },
    countInStock: { type: Number, requried: true },
    rating: { type: Number, requried: true },
    numReviews: { type: Number, requried: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
