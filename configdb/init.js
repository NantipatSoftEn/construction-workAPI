sequelize.sync()
    .then(() => model.article.create({
        id: '',
        title: 'header title',
        image: 'img64bit',
        des:'dfdsfsdfsdfdsgfdg',
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.cart.create({
        id: '',
        productId: 1,
        count: 2,
        checkOut: 1,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.product.create({
        id: '',
        name: 'yeddsdf',
        type: 1,
        des: 'asdadad',
        price:200,
        createdAt: '',
        updatedAt: ''
    }))
    .then(() => model.project.create({
        id: '',
        name: 'asdsadsa',
        type: 1,
        createdAt: '',
        updatedAt: ''
    }))
