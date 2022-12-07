<template>
  <div class="sf-header__navigation desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="category in categories"
      :key="category.ID"
      class="nav-item"
      v-e2e="`app-header-url_${category.Name}`"
      :label="category.Name"
      :link="localePath(`/c/${category.Name}`)"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfHeaderNavigationItem
      v-for="category in categories"
      :key="category.ID"
      class="nav-item"
      v-e2e="`app-header-url_${category.Name}`"
    >
      <template #mobile-navigation-item>
        <SfMenuItem
          :label="category.Name"
          class="sf-header-navigation-item__menu-item"
          :link="localePath(`/c/${category.Name}`)"
          @click="toggleMobileMenu"
        />
      </template>
    </SfHeaderNavigationItem>
  </SfModal>
</template>

<script>
import { SfMenuItem, SfModal } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCategory } from '@brimit_psh/vsf-ordercloud';
// import { onSSR } from '@vue-storefront/core';
import { onMounted } from '@nuxtjs/composition-api';

export default {
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { isMobileMenuOpen, toggleMobileMenu } = useUiState();
    const { categories, search } = useCategory('menu-categories');

    onMounted(async () => {
      await search({});
    });

    return {
      categories,
      isMobileMenuOpen,
      toggleMobileMenu
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}
.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}
</style>
