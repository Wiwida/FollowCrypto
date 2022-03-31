<script setup></script>

<template>
  <div class="container__content">
    <h2>Prêt à réveler vos compétences ?</h2>
    <div class="header__content">
      <div class="header__content--notice">
        <h3>Un début de notice ...</h3>
        <p>
        Ci-dessous un tableau permettant de classifier ses trades dans des
        setups pré-définis. Vous pouvez par ailleurs rajouter, supprimer ou
        éditer des setups en appuyant sur le bouton "Ajouter un setup".
        </p>
      </div>
    </div>
    <div class="main__content">
      <h2 class="main__content--background">Mes setups</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container__content {
  margin: auto;

  h2:not(.main__content--background) {
    min-height: 85vh;
    line-height: 85vh;
    letter-spacing: 0.15rem;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    animation: 3s infinite 3s alternate letterSpacing;
    background-image: url(../assets/pictures/BTC.svg),url(../assets/pictures/Saly-8.svg);
    background-size: 5%, 30%;
    background-repeat: no-repeat, no-repeat;
    background-position: 81% 28%, right;
  }
  .header__content {
    max-width: 1440px;
    background-image: url(../assets/pictures/backgroundHeaderContent.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position-x: -15%;
    min-height: 75vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    animation: 2s infinite 3s alternate backgroundFloat;

    &--notice {
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(19px);
      -webkit-backdrop-filter: blur(19px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 70px 50px;
      font-family: "Open-sans", sans-serif;
      font-size: 24px;
      max-width: 50%;
      line-height: 40px;
      text-align: center;
      position: relative;
      display: flex;
      justify-content: center;

      h3 {
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        top: -25px;
        padding: 8px;
        border-radius: 5px;
        background-image: linear-gradient(to right, #0f3361da 0%, #537895 100%);
      }
    }
  }

  .main__content {

    min-height: 100vh;

    .main__content--background {
      line-height: 85vh;
      letter-spacing: 0.15rem;
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      background-image: url(../assets/pictures/04.svg);
      background-repeat: no-repeat;
      background-size: 15%;
      background-position: center;
    }

  }
}

@keyframes backgroundFloat {
  from {
    background-position-y: -6px;
  }
  to {
    background-position-y: 6px;
  }
}

@keyframes letterSpacing {
  from {
    letter-spacing: 0.15rem;
  }
  to {
    letter-spacing: 0.35rem;
  }
}
</style>
