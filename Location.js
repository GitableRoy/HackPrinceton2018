class Location {

  constructor(){
    this.lat = 0;
    this.lng = 0;
    this.log_loc();
    this.continuously_update_loc();
  }

  log_loc() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.print_loc();
    });
  }

  continuously_update_loc() {
    navigator.geolocation.watchPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.print_loc();
    });
  }

  print_loc() {
    console.log(this.lat);
    console.log(this.lng);
  }
}