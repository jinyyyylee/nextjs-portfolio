import { DndContext, DragOverlay, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import GridItem from './GridItem';
import { DragStartEvent, DragEndEvent } from '@dnd-kit/core';

const GridDnd = () => {
    const [items, setItems] = useState(['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5', '아이템 6']);
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id as string);
                const newIndex = items.indexOf(over.id as string);

                const newItems = [...items];
                newItems.splice(oldIndex, 1);
                newItems.splice(newIndex, 0, active.id as string);

                return newItems;
            });
        }
        setActiveId(null);
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto',
            }}
        >
            <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    {items.map((item) => (
                        <GridItem key={item} id={item} />
                    ))}
                </SortableContext>
                <DragOverlay>{activeId ? <GridItem id={activeId} isDragging /> : null}</DragOverlay>
            </DndContext>
        </div>
    );
};

export default GridDnd;
