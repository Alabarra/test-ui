import React from 'react'
import { SkeletonItem } from '../ui/skeletonItem';
interface SkeletonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    repeats: number;
}

const SkeletonGroup: React.FC<SkeletonGroupProps> = ({repeats}) =>{
    const componentsToRender: JSX.Element[] = [];

    for (let i = 0; i < repeats; i++) {
        componentsToRender.push(<SkeletonItem key={i}/>);
      }
    return <>{componentsToRender}</>
}

export default SkeletonGroup;
