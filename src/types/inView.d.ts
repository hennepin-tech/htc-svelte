declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onenter?: () => void
    onexit?: () => void
  }
}