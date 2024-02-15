<script setup lang="ts">
  import { Check, ChevronsUpDown } from 'lucide-vue-next'
  import { cn } from '~/lib/utils'
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
  } from '~/components/ui/command'
  import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
  import { Button } from '~/components/ui/button'

  interface IProps {
    data: Array<{ value: string; label: string }>
    selected?: string
    placeholder?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    selected: '',
    placeholder: 'Select...'
  })
  const emit = defineEmits<{
    (e: 'select', value: string)
  }>()
  const selectItem = (value: string) => {
    emit('select', value)
  }
</script>

<template>
  <popover>
    <popover-trigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :class="cn('justify-between', !selected && 'text-muted-foreground')"
      >
        {{ selected ? data.find(item => item.value === selected)?.label : placeholder }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </popover-trigger>
    <popover-content class="p-0">
      <command>
        <command-input :placeholder="placeholder" />
        <command-empty>Nothing found.</command-empty>
        <command-list>
          <command-group>
            <command-item
              v-for="(item, index) in data"
              :key="index"
              :value="item.label"
              @select="selectItem(item.value)"
            >
              <Check
                :class="cn('mr-2 h-4 w-4', item.value === selected ? 'opacity-100' : 'opacity-0')"
              />
              {{ item.label }}
            </command-item>
          </command-group>
        </command-list>
      </command>
    </popover-content>
  </popover>
</template>

<style scoped></style>
