import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import qs from 'query-string';
import classNames from 'classnames';

import styles from './index.module.css';

export default function Home({ location }) {
  useEffect(() => {
    console.log('Home mount!');
  }, []);

  const tab = (qs.parse(location.search.slice(1)).tab || 'airport') as string;

  const tabIndex = ['airport', 'train', 'rent'].indexOf(tab);

  return (
    <View className={styles.homeContainer}>
      <View className={styles.tips}>
        交互要求：<br />
        1. 切换tab需要有动画 <br />
        2. 能够通过URL直接指定显示对应tab
      </View>
      <View className={styles.tabs}>
        <a
          className={classNames(styles.tab, { [styles.active]: tab === 'airport' })}
          href="#/?tab=airport"
        >
          接送机
        </a>
        <a
          className={classNames(styles.tab, { [styles.active]: tab === 'train' })}
          href="#/?tab=train"
        >
          接送站
        </a>
        <a
          className={classNames(styles.tab, { [styles.active]: tab === 'rent' })}
          href="#/?tab=rent"
        >
          租车
        </a>
        <view className={styles.tabIndicator} style={{ left: `${100 / 3 * tabIndex}%` }} />
      </View>
      <View className={styles.content}>
        {tab === 'airport' && <View className={styles.item}>这是接送机模块</View>}
        {tab === 'train' && <View className={styles.item}>这是接送站模块</View>}
        {tab === 'rent' && <View className={styles.item}>这是租车模块</View>}
      </View>
      <View className={styles.content}>
        下面是各种营销模块
      </View>
    </View>
  );
}
