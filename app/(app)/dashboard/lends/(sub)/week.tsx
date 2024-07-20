import React from 'react';
import { FlatList, View } from 'react-native';

import HeaderWithCount from '@/components/HeaderWithCount';
import { ThemedView } from '@/components/ThemedView';
import LendsCard from '@/components/LendsCard';

import { useAppSelector } from '@/redux/hooks';

export default function week() {
  const { weekLends } = useAppSelector(state => state.lends);
  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderWithCount title="Week lends list" count={weekLends.length} countText="lends" />
      <View>
        <FlatList
          bounces={false}
          style={{ marginBottom: 20, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={weekLends}
          renderItem={({item}: any) => {
            return (
              <LendsCard
                ld_borrower_name={item.ld_borrower_name}
                ld_payment_term={item.ld_payment_term}
                ld_lend_amount={item.ld_lend_amount}
                ld_principal_repayment={item.ld_principal_repayment}
                ld_start_date={item.ld_start_date}
              />
            );
          }}
          keyExtractor={(item: any, index: number) => item.ld_id}
        />
      </View>
    </ThemedView>
  );
}