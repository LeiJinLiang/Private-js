module.exports = {
    path: 'demo',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../Demo/containers/DemoContainer'))
        })
    }
}
