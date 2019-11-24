import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout level="4" style={styles.container}>
      {children}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
