<script>
    import Image from "../../Main_Components/Image.svelte";
    import Box60 from "../../Main_Components/Layout/Box60.svelte";

    export let url;
    export let caption;
</script>

<Box60>
    <Image {url} {caption} />
</Box60>
