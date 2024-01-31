import { CheckCircle2, X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, Button, Dimensions } from 'react-native';

type SimpleModalProps = {
    visible: boolean,
    onClose: () => void,
    onSelect: (value: ItemProps[]) => void,
    data: ItemProps[]
}

type ItemProps = {
    id: number,
    name: string
}

const { height } = Dimensions.get('screen')

const SimpleModal = ({ visible, onClose, onSelect, data }: SimpleModalProps) => {
    const [selectedItems, setSelectedItems] = useState<ItemProps[]>([]);

    const toggleSelection = (itemSelected: ItemProps) => {
        const isSelected = selectedItems.includes(itemSelected);

        if (isSelected) {
            setSelectedItems((prevItems) => prevItems.filter((item) => item.name !== itemSelected.name));
        } else {
            setSelectedItems((prevItems) => [...prevItems, itemSelected]);
        }
    };

    const handleConfirm = () => {
        onSelect(selectedItems);
        onClose();
    };

    const renderItem = (item: ItemProps) => {
        const isSelected = selectedItems.includes(item);

        return (
            <TouchableOpacity onPress={() => toggleSelection(item)} activeOpacity={0.7}>
                <View className='flex-row items-center my-1 h-8'>
                    <Text className='mr-2'>{item.name}</Text>
                    {isSelected && <CheckCircle2 color='#ff0000' />}
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        // Limpar a seleção quando o modal for fechado
        if (!visible) {
            setSelectedItems([]);
        }
    }, [visible]);


    return (
        <Modal transparent animationType='fade' visible={visible} onRequestClose={onClose}>
            <View className='flex-1 justify-center items-center bg-[#00000070]'>
                <View className='bg-white rounded-md p-5 w-4/5'>
                    <View className='flex flex-row justify-between items-center mb-5'>
                        <Text className='text-base font-bold'>Categorias</Text>
                        <TouchableOpacity onPress={onClose}>
                            <X color='#ff0000' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ maxHeight: height * 0.7 }}>
                        <FlatList
                            data={data}
                            showsVerticalScrollIndicator={false}
                            className='mb-3'
                            renderItem={({ item }) => renderItem(item)}
                        />
                    </View>
                    <Button color='#ff0000' title="Confirmar" onPress={handleConfirm} />
                </View>
            </View>
        </Modal>
    );
};

export default SimpleModal;
