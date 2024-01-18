import React from 'react';
import Main from './screens/main';
import Detail from './screens/detail';

const CommonNavigation = (Stack: any) => () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
export default CommonNavigation;
