function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementsByClassName('banner_section').style.opacity="0.5";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('banner_section').style.opacity="1";
}