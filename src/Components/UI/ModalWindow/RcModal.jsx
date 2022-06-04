import React from 'react';
import cl from './RcModal.module.scss'

const RcModal =  ( {children, visible, setVisible} ) => {

    const rootClasses = [cl.RcModal]

    if (visible){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')  } onClick={()=>setVisible(false)}>
            <div className={cl.RcModal__Content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default RcModal;
