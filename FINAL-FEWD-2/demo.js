function FillBilling(e) {
    if(e.billingtoo.checked == true) {
      e.billingname.value = e.shippingname.value;
      e.billingcity.value = e.shippingcity.value;
    }
  }