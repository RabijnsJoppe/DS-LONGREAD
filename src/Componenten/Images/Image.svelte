<script>
    import Image from "../../Main_Components/Image.svelte";
    import Box from "../../Main_Components/Layout/Box.svelte";

    export let url;
    export let caption;
</script>

<Box>
    <Image {url} {caption} />
</Box>
