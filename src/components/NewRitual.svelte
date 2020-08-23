<style>
  .Story-Section {
    position: relative;
  }
  .Story-Content {
    width: 100%;
    max-width: var(--max-content-width);
    padding: 4rem 2rem;
  }

  @media (min-width: 500px) {
    .Story-Content {
      padding-top: 0;
    }
  }

  @media (min-width: 1024px) {
    .Story-Content {
      display: flex;
      padding-bottom: 10rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .Story-Copy {
    flex: 1;
  }
  @media (min-width: 500px) {
    .Story-Copy {
      padding-top: 4rem;
    }
  }

  .graphic-group {
    width: 500px;
    max-width: 100%;
    height: auto;
    position: relative;
  }
  @media (min-width: 1680px) {
    .graphic-group {
      margin-left: 10rem;
    }
  }

  .photo {
    display: block;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .bottom-right-corner-shape {
    display: none;
    position: absolute;
    right: 0;
  }
  @media (min-width: 600px) {
    .bottom-right-corner-shape {
      display: block;
      bottom: 10%;
      width: 50%;
      height: 200px;
    }
  }

  @media (min-width: 1024px) {
    .bottom-right-corner-shape {
      width: 35%;
      bottom: 0;
      height: 300px;
    }
  }

  @media (min-width: 1680px) {
    .bottom-right-corner-shape {
      margin-left: 10rem;
      width: 500px;
      height: 500px;
    }
  }
</style>

<div class="Story-Section">
  <div class="bottom-right-corner-shape rellax" data-rellax-speed="1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.051 245.952">
      <path
        fill="#7d8a49"
        d="M152.4,306.251h0c-7.509,0-15.414-.4-23.783-.818-5.392-.271-10.969-.551-16.818-.746-14.3-.476-25.889-3.514-36.479-9.559a91.472,91.472,0,0,1-13.41-9.5c-4.251-3.549-8.371-7.415-12.732-11.507-4.877-4.576-9.919-9.309-15.7-14.124-8.85-7.376-15.232-14.526-19.511-21.86-3.774-6.47-5.478-12.246-7.125-17.831A82.773,82.773,0,0,0,2.95,209.112C1.474,205.867.541,200.432.177,192.96c-.294-6.024-.221-13.395.216-21.906a84.2,84.2,0,0,1,24.816-55.514c5.626-5.575,11.514-10.894,17.5-15.81A217.017,217.017,0,0,1,63.52,84.555C80.107,73.969,96.35,67.195,111.8,64.422A180.766,180.766,0,0,1,143.861,61.3a130.712,130.712,0,0,1,14.189.751V306.169C156.25,306.224,154.349,306.251,152.4,306.251Z"
        transform="translate(0.501 -60.799)"
      ></path>
    </svg>
  </div>
  <div class="Story-Content mx-auto">
    <div class="Story-Copy">
      <p class="caps font-alt m0 mb3 line-height-4">A new ritual</p>
      <p class="caps h1 m0">DO IT DAILY.</p>
      <p class="line-height-4 lead">
        Each box contains 30 stick packs with an award winning
        tetra-hydro-curcumin that is 3x more powerful, bioavailable, and
        effective. So you can feel good inside and out.
      </p>
    </div>
    <div class="graphic-group">
      <img
        class="photo"
        src="../images/hard-orange-bowl@2x.png"
        alt="woman reaching for bowl"
      />
    </div>
  </div>
</div>
