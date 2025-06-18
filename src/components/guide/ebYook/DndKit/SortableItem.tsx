import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
    id: string;
    children: React.ReactNode;
}

export function SortableItem({ id, children }: Props) {
    const {
        attributes, // 드래그 앤 드롭에 필요한 속성들
        listeners, // 이벤트 리스너들
        setNodeRef, // DOM 요소 참조
        transform, // 위치 변환 정보
        transition, // 애니메이션 전환 정보
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: '1px solid #ddd',
        padding: '1rem',
        marginBottom: '0.5rem',
        backgroundColor: 'white',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const handleStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div ref={setNodeRef} style={style}>
            {/* 드래그 핸들러 */}
            <div style={handleStyle} {...attributes} {...listeners}>
                ⋮
            </div>
            {/* 컨텐츠 */}
            <div>{children}</div>
        </div>
    );
}
