import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

const DND = () => {
    // 초기 아이템 데이터
    const [items, setItems] = useState([
        { id: '1', content: 'Item 1' },
        { id: '2', content: 'Item 2' },
        { id: '3', content: 'Item 3' },
        { id: '4', content: 'Item 4' },
        { id: '5', content: 'Item 5' },
    ]);

    // 센서 설정 (마우스/터치 및 키보드)
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // 드래그 종료 시 실행되는 함수
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        // active: 현재 드래그 중인 아이템
        // over: 드래그된 아이템이 위치한 곳의 아이템

        if (over && active.id !== over.id) {
            setItems((items) => {
                //서로 위치를 변경
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div style={{ width: '400px', margin: '0 auto' }}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.map((item) => (
                        <SortableItem key={item.id} id={item.id}>
                            {item.content}
                        </SortableItem>
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default DND;
