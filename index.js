import React, { createContext, useContext } from "react";
import {
  ActionSheetProvider,
  connectActionSheet
} from "@expo/react-native-action-sheet";
const context = createContext();
const Provider = context.Provider;
const ASHookProvider = connectActionSheet(
  ({ children, showActionSheetWithOptions }) => (
    <Provider value={showActionSheetWithOptions}>{children}</Provider>
  )
);
const TopProvider = props => (
  <ActionSheetProvider>
    <ASHookProvider {...props} />
  </ActionSheetProvider>
);
const useShowActionSheetWithOptions = () => {
  const showActionSheetWithOptions = useContext(context);
  return showActionSheetWithOptions;
};
export {
  TopProvider as ActionSheetProvider,
  connectActionSheet,
  useShowActionSheetWithOptions
};
