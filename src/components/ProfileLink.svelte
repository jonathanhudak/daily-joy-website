<script>
  let firstName;
  import { onMount } from "svelte";

  function getName(user) {
    if (!user) return "My profile";
    let firstName = user.billingAddressFirstName;
    if (!firstName && typeof user.billingAddressName === "string") {
      firstName = user.billingAddressName.split(" ")[0];
    }
    return firstName;
  }

  function positionCart(el) {
    function positionCartNicely() {
      if (el.clientHeight < document.documentElement.clientHeight) {
        el.classList.add("v-center");
      } else {
        console.log("top");
        el.classList.remove("v-center");
      }
    }

    window.addEventListener("resize", positionCartNicely);

    positionCartNicely();

    return {
      cancel: () => {
        window.removeEventListener("resize", positionCartNicely);
      },
    };
  }

  onMount(async () => {
    document.addEventListener("snipcart.ready", function () {
      var user = Snipcart.api.user.current();
      firstName =
        user &&
        (user.billingAddressFirstName || user.billingAddressName.split(" ")[0]);

      let cartPosition;

      Snipcart.subscribe("cart.opened", function (e) {
        cartPosition = positionCart(
          document.getElementById("snip-layout-cart-content")
        );
      });

      Snipcart.subscribe("cart.closed", function () {
        if (cartPosition && cartPosition.cancel) {
          cartPosition.cancel();
        }
      });
    });
  });
</script>

<a href="#noop" class="snipcart-user-profile font-alt caps">
  {firstName || 'My profile'}
</a>
