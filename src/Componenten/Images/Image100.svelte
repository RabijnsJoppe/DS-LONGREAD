<script>
    import Image from "../../Main_Components/Image.svelte";
    import Box100 from "../../Main_Components/Layout/Box100.svelte";
    
    export let url;
    export let caption;
</script>

<Box100>
    <Image {url} {caption} />
</Box100>
