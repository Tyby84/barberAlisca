<template>
   <div>
       <h2 class="text-centered fadelight">Kapcsolat</h2>
        <div class="contactinfo">
            <div class="fadelight">
                <p><i class="fas fa-map-marker-alt"></i> Szekszárd, Kossuth Lajos u. 2</p>
                <p><i class="fas fa-mobile-alt"></i> +3620/463-1013</p>
                <p><i class="fas fa-envelope-open-text"></i> aliscabarbershop@gmail.com</p>
                <p><i class="fas fa-map-marked-alt"></i> <a href="https://www.google.com/maps/dir/46.2328898,20.1552201/46.3517117,18.7010586/@46.3447508,18.7110806,15z/data=!4m4!4m3!1m1!4e1!1m0" 
                target="_blank" rel="noopener noreferrer">Mutasd a térképen!</a> </p>
            </div>
            <div class="floatright">
                <p><i class="far fa-clock"></i> Nyitvatartás</p>
                <p>Hétfő - Péntek : 09:00 - 18:00</p>
                <p>Szombat - Vasárnap : Zárva</p>
                <p v-if="reggel">Jó reggelt, van már időpontod?</p>
                <p v-if="delutan">Jó napot, van már időpontod?</p>
                <p v-if="este">Jó estet, van már időpontod?</p>
                <p><i class="far fa-calendar-check"></i> <a href="http://bwnet.hu/partner/AliscaBarberSalon" target="_blank">Időpontfoglalás</a></p>
            </div>
        </div>
    

   </div>
</template>

<script>
export default {
    data: function() {
        return {
            reggel: false,
            delutan: false,
            este: false,
            time: new Date()
        }
    },
        mounted() {
            this.getDayTime();
        
        },
        methods: {
            getDayTime() {
                if(this.time.getHours() < 12) {
                    this.reggel = true;

                } else if ( (this.time.getHours() > 12) && (this.time.getHours() < 18) ) {
                    this.delutan = true;
                } else {
                    this.este = true;
                }
            }
        }

    }
</script>