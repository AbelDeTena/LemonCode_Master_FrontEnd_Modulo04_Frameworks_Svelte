<script>
    import Logo from "../assets/logo_2.png"
</script>

<header>
    <picture>
        <img src={Logo} alt="Logotipo"/>
    </picture>      
</header>

<style>
    header{
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        border-bottom: 2px solid black;
        width: 100%;
    }   
    img {        
        width: 100%;      
        max-width: 250px;  
    }
</style>