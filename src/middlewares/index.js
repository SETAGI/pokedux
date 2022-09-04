export const logger = ( store ) => ( next ) => ( action ) => {
    next(action);
};

export const featuring = ( store ) => ( next ) => ( actionInfo ) => {
    const featuredaction = [ {name: 'Pika Pika'}, ...actionInfo.action.payload ];
    const actionInfoUpdated = {
        ...actionInfo, 
        action: { 
            ...actionInfo.action, 
            payload: featuredaction 
        }};
    next(actionInfoUpdated);
};
