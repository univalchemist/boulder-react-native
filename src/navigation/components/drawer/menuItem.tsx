import React from 'react'

import { Container, Expandable, Icon, TextView } from '@/components'
import TreeBranchL from '@/assets/images/tree-branch-l.svg'

import { IMenuItemProps } from './types'
import styles from './styles'

const MenuItem: React.FC<IMenuItemProps> = ({ item, expanded, matched, onSelect }) => {
  return (
    <Container
      row={false}
      gap={8}
      style={[
        styles.menuContainer,
        item.isSubMenu && styles.subMenuContainer,
        item.isFinalLevel && styles.finalMenu,
      ]}
    >
      <Expandable
        key={item.id}
        isExpanded={expanded.includes(item.id)}
        expandable={!!item.items?.length}
        onPress={() => onSelect(item.id)}
        caption={
          <>
            <Icon name={item.icon} />
            {item.isSubMenu && (
              <TreeBranchL style={[styles.treeBranch, item.isFinalLevel && styles.finalBranch]} />
            )}
            <TextView
              style={[
                styles.menuTitle,
                item.isSubMenu && styles.subMenuTitle,
                matched?.includes(item.id) && styles.matched,
              ]}
            >
              {item.label}
            </TextView>
          </>
        }
      >
        {item.items?.map((subItem) => (
          <MenuItem key={subItem.id} item={subItem} expanded={expanded} onSelect={onSelect} />
        ))}
      </Expandable>
    </Container>
  )
}

export default MenuItem
