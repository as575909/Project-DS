import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const QtyMng = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="-" onPress={handleDecrementQuantity} />
        <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
        <Button title="+" onPress={handleIncrementQuantity} />
      </View>
     
    </View>
  );
};

export default QtyMng;
