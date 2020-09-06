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

  onMount(async () => {
    document.addEventListener("snipcart.ready", function () {
      console.log("snip is ready");
      var user = Snipcart.api.user.current();
      console.log(user);
      firstName =
        user &&
        (user.billingAddressFirstName || user.billingAddressName.split(" ")[0]);
    });
  });
</script>

<a href="#noop" class="snipcart-user-profile font-alt caps">
  {firstName || 'My profile'}
</a>
