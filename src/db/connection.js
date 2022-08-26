const mongoose = require('mongoose')

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URi, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
