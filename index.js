const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3003;

sequelize.sync().then(() => {
    console.log('✅ Kết nối Database product_db thành công!');
    app.listen(PORT, () => {
        console.log(`🚀 Product Service (Bài 3) đang chạy trên cổng ${PORT}`);
    });
}).catch(err => console.error('❌ Lỗi kết nối DB:', err));