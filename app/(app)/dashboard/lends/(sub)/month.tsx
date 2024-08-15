import React from 'react';
import { FlatList, View } from 'react-native';

import HeaderWithCount from '@/components/HeaderWithCount';
import { ThemedView } from '@/components/ThemedView';
import LendsCard from '@/components/LendsCard';
import Emptystate from '@/components/Emptystate';

import { useAppSelector } from '@/redux/hooks';

export default function month() {
  const { monthLends, isLoading } = useAppSelector(state => state.lends);

  // Empty state
  if (!isLoading && !monthLends.length) {
    return (
      <ThemedView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Emptystate
          title="No Monthly lends found!"
          description="Once you start lending for month base, all your monthly lends will appear in this space."
        />
      </ThemedView>
    );
  }
  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderWithCount title="Month lends" count={monthLends.length} countText="lends" />
      <View>
        <FlatList
          bounces={false}
          style={{ marginBottom: 20, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={monthLends}
          renderItem={({ item }: any) => {
            return (
              <LendsCard
                ld_id={item.ld_id}
                ld_borrower_name={item.ld_borrower_name}
                ld_payment_term={item.ld_payment_term}
                ld_lend_amount={item.ld_lend_amount}
                ld_principal_repayment={item.ld_principal_repayment}
                ld_start_date={item.ld_start_date}
                // ld_paid_amount= {item.ld_paid_amount}
                // ld_pending_amount= {item.ld_pending_amount}
                ld_paid_weeks={item.ld_paid_weeks}
                ld_pending_weeks={item.ld_pending_weeks}
                ld_total_weeks_or_month={item.ld_total_weeks_or_month}
                ld_interest_amount={item.ld_interest_amount}
              />
            );
          }}
          keyExtractor={(item: any) => item.ld_id}
        />
      </View>
    </ThemedView>
  );
}
