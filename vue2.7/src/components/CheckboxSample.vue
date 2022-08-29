<template>
    <input ref="radio" type="radio" @change="change">
</template>
<script setup lang="ts">
import {computed, ref, onMounted, watch} from "@vue/composition-api";
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
function setChecked(value:boolean) {
    assertIsDefined(element.value);
    const radio = element.value;
    radio.checked = value;
}
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}
onMounted(() => setChecked(props.inputValue));
watch(() => [props.inputValue], () => setChecked(props.inputValue));
</script>
<script>
export default {
    model: {
        prop: "inputValue",
        event: "change",
    },
}
</script>