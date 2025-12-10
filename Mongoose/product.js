const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    }, 
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!'],
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
    }
});

// Instance Mmethods
productSchema.methods.greet = function() {
    console.log('HELLO! HOWDY! HI!');
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

// Static methods
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

Product.fireSale().then(res => console.log(res));

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);

    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}


// findProduct();

// const bike = new Product({ name: 'Tire Pump', price: 519.50, categories: ['Cycling'], qty: {online: 12}});
// bike.save()
//     .then(data => {
//         console.log('IT WORKED');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO ERROR!');
//         console.log(err);
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9.99 }, { new: true, runValidators: true})
// .then(data => {
//     console.log('IT WORKED');
//     console.log(data);
// })
// .catch(err => {
//     console.log('OH NO ERROR!');
//     console.log(err);
// })