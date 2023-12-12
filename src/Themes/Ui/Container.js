"use client";
import {cn} from '../Lib/Utils'

const Container = ({ children, className, ...props }) => {
    return(

        <div
          className={cn('mx-auto w-11/12 max-w-7xl 2xl:w-4/', className)}
          {...props}
        >
          {children}
        </div>
      )
};
Container.displayName = 'Container';

export default Container;
