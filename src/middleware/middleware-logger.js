const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current ACtion:', action);
  next(action);
  console.log('New Updated State:', store.getState());
    
    
    
};

export default middlewareLogger;