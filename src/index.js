import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages)
    yield takeEvery('FETCH_TAGS', fetchTags)
    yield takeEvery('ADD_TAG', addTag)
}


//saga for PUT /api/images/addtag
function* addTag(action) {
    console.log('in addTag', action.payload.image_id, action.payload.tag_id);
    
}
//saga for GET /api/images
function* fetchImages() {
    try{
        const images = yield axios.get('/api/images');
        //send images to reducer
        yield put({ type: 'SET_IMAGES', payload: images.data })
    }catch(error) {
        console.log('error in fetchImages', error);
    }
}

//saga for GET /api/tags
function* fetchTags() {
    try {
        const tags = yield axios.get('/api/tags');
        //send tags to reducer
        yield put({type:'SET_TAGS', payload: tags.data})
    }catch(error){
        console.log('error in fetchTags', error);
    }
}



// Used to store images returned from the server
const images = (state = [], action) => {
    console.log('in images reducer', action.payload);
    
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    console.log('in tagsReducer', action.payload);
    
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const image_id = (state='', action) => {
    console.log('in image_id', action.payload);
    switch (action.type) {
        case 'SAVE_IMAGE_ID':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags, 
        image_id
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
