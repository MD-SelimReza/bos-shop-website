// "use client";

// import { useState } from "react";
// import { useForm, Controller, FieldValues, useFieldArray } from "react-hook-form";
// import { FaChevronDown, FaPlus, FaMinus } from "react-icons/fa6";

// // Product Variant Sizes
// const productVariants = [
//   { id: 1, size: "S" },
//   { id: 2, size: "M" },
//   { id: 3, size: "L" },
//   { id: 4, size: "XL" },
//   { id: 5, size: "2XL" },
//   { id: 6, size: "3XL" },
// ];

// const AddProductForm = () => {
//   const { control, handleSubmit, formState: { errors } } = useForm();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "sizes", // Name for size array
//   });
//   const [productImages, setProductImages] = useState<any>([]);

//   const onSubmit = (data: any) => {
//     console.log("Form data submitted:", data);
//   };

//   const handleQuantityChange = (index: number, operation: "increase" | "decrease") => {
//     const sizes = fields;
//     if (operation === "increase") {
//       sizes[index].quantity += 1;
//     } else if (operation === "decrease" && sizes[index].quantity > 1) {
//       sizes[index].quantity -= 1;
//     }
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
//     const file = e.target.files && e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const updatedImages = [...productImages];
//         updatedImages[index] = reader.result;
//         setProductImages(updatedImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Product Title */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Product Title</label>
//           <Controller
//             name="title"
//             control={control}
//             rules={{ required: "Product Title is required" }}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Enter Product Title"
//               />
//             )}
//           />
//           {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
//         </div>

//         {/* Product Price */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Price</label>
//           <Controller
//             name="price"
//             control={control}
//             rules={{ required: "Price is required" }}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="number"
//                 className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Enter Product Price"
//               />
//             )}
//           />
//           {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
//         </div>

//         {/* Product Description */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <Controller
//             name="description"
//             control={control}
//             rules={{ required: "Product Description is required" }}
//             render={({ field }) => (
//               <textarea
//                 {...field}
//                 className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                 placeholder="Enter Product Description"
//                 rows={4}
//               />
//             )}
//           />
//           {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
//         </div>

//         {/* Product Sizes and Quantities */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Product Sizes</label>
//           {fields.map((item, index) => (
//             <div key={item.id} className="flex items-center space-x-4 mb-2">
//               <select
//                 {...register(`sizes.${index}.size`)}
//                 defaultValue={item.size}
//                 className="w-1/3 border border-gray-300 rounded-md p-2"
//               >
//                 {productVariants.map((variant) => (
//                   <option key={variant.id} value={variant.size}>
//                     {variant.size}
//                   </option>
//                 ))}
//               </select>

//               <div className="flex items-center">
//                 <button
//                   type="button"
//                   onClick={() => handleQuantityChange(index, "decrease")}
//                   className="p-2 bg-gray-300 text-gray-700 rounded-l-md"
//                 >
//                   <FaMinus />
//                 </button>
//                 <input
//                   {...register(`sizes.${index}.quantity`)}
//                   type="number"
//                   value={item.quantity}
//                   readOnly
//                   className="w-16 text-center p-2 bg-gray-100 text-gray-700"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleQuantityChange(index, "increase")}
//                   className="p-2 bg-gray-300 text-gray-700 rounded-r-md"
//                 >
//                   <FaPlus />
//                 </button>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => remove(index)}
//                 className="p-2 bg-red-500 text-white rounded-md"
//               >
//                 Remove Size
//               </button>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={() => append({ size: "", quantity: 1 })}
//             className="p-2 bg-green-500 text-white rounded-md"
//           >
//             Add Size
//           </button>
//         </div>

//         {/* Product Images */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Product Images</label>
//           <div className="flex space-x-4">
//             {productImages.map((image, index) => (
//               <div key={index} className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">Image {index + 1}</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageUpload(e, index)}
//                   className="mt-2"
//                 />
//                 {image && (
//                   <img
//                     src={image}
//                     alt={`Product Image ${index + 1}`}
//                     className="mt-2 w-full h-auto object-cover"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {productImages.length < 2 && (
//             <button
//               type="button"
//               onClick={() => setProductImages([...productImages, ""])}
//               className="p-2 bg-blue-500 text-white rounded-md mt-4"
//             >
//               Add More Images
//             </button>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
