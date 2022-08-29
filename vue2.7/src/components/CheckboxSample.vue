<template>
    <input ref="radio" type="radio" @change="change">
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
type Props = {
    inputValue: boolean;
};
const element = ref<HTMLInputElement>();
const props = defineProps<Props>();
const emits = defineEmits<{
    (name:"change", value:boolean):void
}>()
const internalInputValue = computed({
    get() {
        return props.inputValue;
    },
    set(value:boolean) {
        emits("change", value);
    }
})
function change(e:Event) {
    assertIsDefined(element.value);
    const radio = element.value;
    internalInputValue.value = radio.checked;
}
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}
</script>
<script>
export default {
    model: {
        prop: "inputValue",
        event: "change",
    },
}
</script>